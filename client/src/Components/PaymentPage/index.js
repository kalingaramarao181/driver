import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../config';

const PaymentPage = () => {
    const [orderId, setOrderId] = useState('');
    const [amount, setAmount] = useState('');
    const [customerId, setCustomerId] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${baseUrl}payment`, {
                orderId,
                amount,
                customerId,
            });
            // Handle the response (redirect to Paytm payment page or handle accordingly)
            window.location.href = response.data.paymentUrl; // Redirect user to Paytm payment page
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <form onSubmit={handlePayment}>
            <input
                type="text"
                placeholder="Order ID"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Customer ID"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
                required
            />
            <button type="submit">Pay Now</button>
        </form>
    );
};

export default PaymentPage;
