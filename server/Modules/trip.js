const express = require('express');
const router = express.Router();
const db = require('../Config/connection');
const bcrypt = require('bcrypt'); // Import bcrypt
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');


const genarateUniqueId = () => {
    return uuidv4()
}

//GET ALL USERS
router.get('/trips', (req, res) => {
    const sql = 'SELECT * FROM trip_data';
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            let availableTrips = data.filter((eachTrip) => eachTrip.isTripAccepted === 0)
            let acceptedTrips = data.filter((eachTrip) => eachTrip.isTripAccepted === 1)
            res.json({availableTrips, acceptedTrips});
        }
    });
});


// UPDATE EXISTING USER
router.put('/trip/:id', async (req, res) => {
    const { id } = req.params;
    const sql = 'UPDATE trip_data SET isTripAccepted = TRUE WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Error updating Trip:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Trip updated successfully' });
        }
    });
});



module.exports = router;
