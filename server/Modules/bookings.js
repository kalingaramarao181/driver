const express = require('express');
const router = express.Router();
const db = require('../Config/connection');
const bcrypt = require('bcrypt'); // Import bcrypt
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');


//GET ALL USERS
router.get('/bookings/:userId', (req, res) => {
    const { userId } = req.params;
    const sql = 'SELECT * FROM trip_data WHERE customerId = ?';
    db.query(sql, [userId], (err, data) => {
        if (err) {
            console.error('Error fetching users:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(data);
        }
    });
});

router.post('/book-driver', async (req, res) => {
    const { customerId,location,amount,carName,fromLocation,toLocation,tripDistance, bookingType, duration } = req.body;
    const bookingId = "123456"
    const dateTime = new Date()
    const baseFare = "190"
    const fareAmount = "600"    
    const formateToLocation = JSON.stringify(toLocation)
    const formateFromLocation = JSON.stringify(fromLocation)

    const carImage = "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80"
    const sql = 'INSERT INTO trip_data (customerId, location, bookingId, carImage, bookingType, carType, duration, dateTime, tripDistance, baseFare, fareAmount, amount, fromLocation, toLocation) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [customerId, location, bookingId, carImage, bookingType, carName, duration, dateTime, tripDistance, baseFare, fareAmount, amount, formateFromLocation, formateToLocation], (err, result) => {
        if (err) {
            console.error('Error updating Trip:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json({ message: 'Trip updated successfully' });
        }
    });
});






module.exports = router;
