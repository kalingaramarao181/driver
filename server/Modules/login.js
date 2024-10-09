const express = require('express');
const router = express.Router();
const db = require('../Config/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

//LOGIN ROUTE
router.post('/login', (req, res) => {
    const { email, password } = req.body;   
    const checkUserSql = 'SELECT * FROM drivers WHERE email = ?';
    db.query(checkUserSql, [email], async (err, data) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        
        if (data.length === 0) {
            return res.status(404).json({ error: 'No user found' });
        }

        const user = data[0];
        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
            return res.status(401).json({ error: 'Wrong credentials' });
        }

         const token = jwt.sign(
            { id: user.id, username: user.email, isDriver: user.isDriver },
            JWT_SECRET,
           { expiresIn: '1h' } // Token expires in 1 hour
        );

        return res.json({ message: 'Login successful', user, token });

        // const loginTime = new Date();
        // const updateSql = 'UPDATE userdata SET lastlogin = ?, loginstatus = ?, logincount = logincount + 1 WHERE id = ?';

        // db.query(updateSql, [loginTime, true, user.id], (updateErr) => {
        //     if (updateErr) {
        //         console.error('Error updating login time:', updateErr);
        //         return res.status(500).json({ error: 'Internal Server Error' });
        //     }
        //     // Generate JWT token
       

        // });
    });
});

module.exports = router;
