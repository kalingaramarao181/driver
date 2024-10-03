import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../config';
import { FaArrowCircleRight } from "react-icons/fa";
import "./index.css"

const QrCodeGenerator = () => {
  const [amount, setAmount] = useState('');
  const [qrCode, setQrCode] = useState(null);
  const [upiLink, setUpiLink] = useState(null);


  const handleGenerateQrCode = async () => {
    try {
      console.log('Sending request to generate QR code...');
      
      // Axios POST request
      const response = await axios.post(`${baseUrl}generate-qr`, {
        amount: amount,
      });

      console.log('Response received:', response);
      
      if (response.data.qrCode) {
        setQrCode(response.data.qrCode);
        setUpiLink(response.data.upiUrl)
        
      } else {
        alert('Error generating QR code');
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
      alert('Failed to generate QR code');
    }
  };

  return (
    <div className='qrcode-card-container'>
      <div className='arrow-button-container'>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className='payment-input'
      />
      <button className='generate-qr-button' onClick={handleGenerateQrCode}><FaArrowCircleRight /></button>
      </div>

      {qrCode && (
        <div className='qrcode-card'>
          <h3>Scan the QR code to pay</h3>
          <img src={qrCode} className='qr-image' alt="QR Code" />
          <a className="paynow-button" href={upiLink} target="_blank" rel="noopener noreferrer">
            Pay Now
          </a>
        </div>
      )}
    </div>
  );
};

export default QrCodeGenerator;
