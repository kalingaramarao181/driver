const express = require('express');
const router = express.Router();
const db = require('../Config/connection');
const bcrypt = require('bcrypt'); // Import bcrypt
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const upload = require('../Config/multer'); // Import multer middleware
const { log } = require('console');


const genarateUniqueId = () => {
    return uuidv4()
}


router.get('/driver-data', (req, res) => {
    const sql = 'SELECT * FROM drivers WHERE isDriver = 1';   
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data);
        }
    });
});


//GET ALL USERS
router.get('/user-data/:userId', (req, res) => {
    const {userId} = req.params
    const sql = 'SELECT * FROM drivers WHERE id = ?';   
    db.query(sql, [userId], (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data[0]);
        }
    });
});

//GET USER VERIFICATION DATA
router.get('/document-verification-data/:userId', (req, res) => {
    const {userId} = req.params
    const sql = 'SELECT * FROM document_verification WHERE id = ?';   
    db.query(sql, [userId], (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data[0]);
        }
    });
});



//GET A SINGLE USER BY ID
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM userdata WHERE id = ?';
    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error('Error fetching user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data[0]);
        }
    });
});

//GET CHATTED USERS
router.get('/users/:senderid', (req, res) => {
    const { senderid } = req.params;

    const userSql = `
    SELECT 
        DISTINCT userdata.id, 
        userdata.fullname, 
        userdata.email, 
        userdata.phoneno, 
        userdata.lastlogin,
        userdata.lastseen,
        userdata.loginstatus
    FROM 
        userdata 
    JOIN 
        messages 
        ON (userdata.id = messages.senderid AND messages.receiverid = ?) 
        OR (userdata.id = messages.receiverid AND messages.senderid = ?)
    WHERE 
        userdata.id != ? 
    ORDER BY 
        (SELECT MAX(timestamp) 
        FROM messages 
        WHERE (messages.senderid = userdata.id AND messages.receiverid = ?) 
            OR (messages.receiverid = userdata.id AND messages.senderid = ?)
        ) DESC;
    `;

    const roomSql = `
            SELECT 
                    DISTINCT r.roomid, 
                    r.room_name, 
                    r.created_at,
                    r.members,
                    r.created_by
                FROM 
                    rooms r
                WHERE 
                    FIND_IN_SET(?, REPLACE(REPLACE(r.members, '[', ''), ']', '')) > 0
                    OR r.created_by = ?
    `;

    db.query(userSql, [senderid, senderid, senderid, senderid, senderid], (err, userData) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Internal Server Error while fetching users' });
        }

        db.query(roomSql, [senderid, senderid], (err, roomData) => {
            if (err) {
                console.error('Error fetching rooms:', err);
                return res.status(500).json({ error: 'Internal Server Error while fetching rooms' });
            }


            res.json({
                users: userData,
                rooms: roomData
            });
        });
    });
});


// Function to check if a user exists
const checkUserExists = (email, phoneNumber) => {
    return new Promise((resolve, reject) => {
        const checkUserSql = 'SELECT * FROM drivers WHERE email = ? OR phone_number = ?';
        db.query(checkUserSql, [email, phoneNumber], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

// Function to insert a new user
const insertUser = (userData) => {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO drivers (first_name, last_name, phone_number, email, password, emergency_number, marital_status, dob, location, address, photo, licence_number, licence, driving_experince, isDriver) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(sql, userData, (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
}

// CREATE NEW DRIVER
router.post('/signup-driver', async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, email, password, emergencyNumber, maritalStatus, dob, location, address, photo, licenceNumber, licence, drivingExperince } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user already exists
        const existingUsers = await checkUserExists(email, phoneNumber);

        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'User already exists with this email or phone number' });
        }

        // Insert new user
        const userData = [firstName, lastName, phoneNumber, email, hashedPassword, emergencyNumber, maritalStatus, dob, location, address, photo, licenceNumber, licence, drivingExperince, true];
        const result = await insertUser(userData);

        res.status(201).json({ id: result.insertId, firstName, email });
    } catch (err) {
        console.error('Error during signup-driver:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.put('/document-verification/:userId', (req, res) => {
    const { userId } = req.params;
    const {
      photo_verify,
      pan_verify,
      driving_verify,
      adhar_verify,
      certificate_verify,
      photo_review,
      driving_review,
      adhar_review,
      pan_review,
      certificate_review
    } = req.body;
  
    const checkQuery = `SELECT * FROM document_verification WHERE user_id = ?`;
  
    db.query(checkQuery, [userId], (err, result) => {
      if (err) {
        return res.status(500).send('Error checking for existing record');
      }
  
      if (result.length > 0) {
        // Record exists, dynamically build the update query based on provided fields
        let updateFields = [];
        let updateValues = [];
  
        if (photo_verify !== undefined) {
          updateFields.push('photo_verify = ?');
          updateValues.push(photo_verify);
        }
        if (pan_verify !== undefined) {
            updateFields.push('pan_verify = ?');
            updateValues.push(pan_verify);
          }
        if (driving_verify !== undefined) {
          updateFields.push('driving_verify = ?');
          updateValues.push(driving_verify);
        }
        if (adhar_verify !== undefined) {
          updateFields.push('adhar_verify = ?');
          updateValues.push(adhar_verify);
        }
        if (certificate_verify !== undefined) {
          updateFields.push('certificate_verify = ?');
          updateValues.push(certificate_verify);
        }
        if (photo_review !== undefined) {
          updateFields.push('photo_review = ?');
          updateValues.push(photo_review);
        }
        if (pan_review !== undefined) {
            updateFields.push('pan_review = ?');
            updateValues.push(pan_review);
          }
        if (driving_review !== undefined) {
          updateFields.push('driving_review = ?');
          updateValues.push(driving_review);
        }
        if (adhar_review !== undefined) {
          updateFields.push('adhar_review = ?');
          updateValues.push(adhar_review);
        }
        if (certificate_review !== undefined) {
          updateFields.push('certificate_review = ?');
          updateValues.push(certificate_review);
        }
  
        updateValues.push(userId); // Add userId as the last value
  
        const updateQuery = `
          UPDATE document_verification 
          SET ${updateFields.join(', ')}
          WHERE user_id = ?
        `;
  
        db.query(updateQuery, updateValues, (updateErr, updateResult) => {
          if (updateErr) {
            return res.status(500).send('Error updating the record');
          }
          res.status(200).send('Record updated successfully');
        });
      } else {
        // No record exists, perform an insert
        const insertQuery = `
          INSERT INTO document_verification (
            user_id, 
            photo_verify, 
            driving_verify, 
            adhar_verify, 
            certificate_verify, 
            photo_review, 
            driving_review, 
            adhar_review, 
            certificate_review,
            pan_verify,
            pan_review
          ) 
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
  
        const insertValues = [
          userId,
          photo_verify || null,
          driving_verify || null,
          adhar_verify || null,
          certificate_verify || null,
          photo_review || null,
          driving_review || null,
          adhar_review || null,
          certificate_review || null
        ];
  
        db.query(insertQuery, insertValues, (insertErr, insertResult) => {
          if (insertErr) {
            return res.status(500).send('Error inserting the record');
          }
          res.status(200).send('Record inserted successfully');
        });
      }
    });
});


// CREATE NEW CUSTOMER
router.post('/signup-customer', async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, email, password, emergencyNumber, maritalStatus, dob, location, address, photo, licenceNumber, licence, drivingExperince } = req.body;

        if (!password) {
            return res.status(400).json({ error: 'Password is required' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Check if user already exists
        const existingUsers = await checkUserExists(email, phoneNumber);

        if (existingUsers.length > 0) {
            return res.status(400).json({ error: 'User already exists with this email or phone number' });
        }

        // Insert new user
        const userData = [firstName, lastName, phoneNumber, email, hashedPassword, emergencyNumber, maritalStatus, dob, location, address, photo, licenceNumber, licence, drivingExperince, false];
        const result = await insertUser(userData);

        res.status(201).json({ id: result.insertId, firstName, email });
    } catch (err) {
        console.error('Error during signup-customer:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// UPDATING AN EXISTING USER PASSWORD
router.put('/update-user-data/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const {
            first_name, last_name, phone_number, email, password, emergency_number,
            marital_status, dob, location, address
        } = req.body;

        // Create an array to store the fields that need to be updated
        let fieldsToUpdate = [];
        let values = [];

        if (first_name) {
            fieldsToUpdate.push('first_name = ?');
            values.push(first_name);
        }
        if (last_name) {
            fieldsToUpdate.push('last_name = ?');
            values.push(last_name);
        }
        if (phone_number) {
            fieldsToUpdate.push('phone_number = ?');
            values.push(phone_number);
        }
        if (email) {
            fieldsToUpdate.push('email = ?');
            values.push(email);
        }
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            fieldsToUpdate.push('password = ?');
            values.push(hashedPassword);
        }
        if (emergency_number) {
            fieldsToUpdate.push('emergency_number = ?');
            values.push(emergency_number);
        }
        if (marital_status) {
            fieldsToUpdate.push('marital_status = ?');
            values.push(marital_status);
        }
        if (dob) {
            fieldsToUpdate.push('dob = ?');
            values.push(dob);
        }
        if (location) {
            fieldsToUpdate.push('location = ?');
            values.push(location);
        }
        if (address) {
            fieldsToUpdate.push('address = ?');
            values.push(address);
        }

        if (fieldsToUpdate.length === 0) {
            return res.status(400).json({ error: 'No fields provided to update' });
        }

        const sql = `UPDATE drivers SET ${fieldsToUpdate.join(', ')} WHERE id = ?`;
        values.push(userId);

        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error updating user:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'User data updated successfully' });
            }
        });
    } catch (error) {
        console.error('Error updating user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/upload-file/:userId', upload.single('file'), (req, res) => {
    const { userId } = req.params;
    const file = req.file;
    
    const documentType = req.body.documentType;
    
    if (!documentType) {
      return res.status(400).send('Document type is required.');
    }

    if (!file) {
      return res.status(400).send('File upload is required.');
    }
  
    const query = `UPDATE drivers SET ${documentType} = ? WHERE id = ?`;
    const values = [file.path, userId];
  
    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Error updating database:', err);
        return res.status(500).send('Internal server error');
      }

      res.status(200).send('File uploaded and path saved in database');
    });
});


router.put('/accept-documents/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const sql = `UPDATE drivers SET document_verification = 1 WHERE id = ?`;

        db.query(sql, [userId], (err, result) => {
            if (err) {
                console.error('Error updating user:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'User data updated successfully' });
            }
        });
    } catch (error) {
        console.error('Error updating user data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});



// UPDATING AN EXISTING USER PASSWORD
router.put('/update-password', async (req, res) => {
    const { email, password } = req.body; // Example fields

    console.log('Email:', email);
    console.log('Password:', password);

    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = 'UPDATE userdata SET password = ? WHERE email = ?';
        db.query(sql, [hashedPassword, email], (err, result) => {
            if (err) {
                console.error('Error updating user:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'Password updated successfully' });
            }
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//UPDATE LOGOUT STATUS
router.put('/update-logout/:id', (req, res) => {
    const { id } = req.params;
    const date = new Date()
    const sql = 'UPDATE userdata SET lastseen = ?, loginstatus = ? WHERE id = ?';
    db.query(sql, [date, false, id], (err, result) => {
        if (err) {
            console.error('Error updating user:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'User updated successfully' });
        }
    });
});

module.exports = router;
