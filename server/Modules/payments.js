const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const db = require('../Config/connection');


router.post('/generate-qr', async (req, res) => {
    const { amount } = req.body;
    const upiId = "7730020465@ybl"
    const name = "Ramarao"
  
    if (!upiId || !amount) {
      return res.status(400).json({ error: 'UPI ID and amount are required' });
    }
    
  
    const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
  
    try {
      const qrCode = await QRCode.toDataURL(upiUrl);
      res.status(200).json({ qrCode, upiUrl });
    } catch (error) {
      res.status(500).json({ error: 'Error generating QR code' });
    }
  })

  router.post('/payment', async (req, res) => {
    const { orderId, amount, customerId } = req.body;

    if (!orderId || !amount || !customerId) {
        return res.status(400).json({ error: 'Order ID, amount, and customer ID are required' });
    }

    try {
        // Assuming you have a payments table to store the payment details
        const query = 'INSERT INTO payments (payment_id, amount, customer_id, status) VALUES (?, ?, ?, ?)';
        const status = 'Pending'; // Set initial status to Pending

        const result = await db.query(query, [orderId, amount, customerId, status]);
        res.status(201).json({ message: 'Payment initiated successfully', paymentId: orderId });
    } catch (error) {
        console.error('Error saving payment information:', error);
        res.status(500).json({ error: 'Error saving payment information' });
    }
});





module.exports = router;
