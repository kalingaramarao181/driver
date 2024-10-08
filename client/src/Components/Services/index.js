import React from 'react';
import './index.css'; // Import the CSS file

const Services = () => {
  return (
    <div className="services-page">
      <h1>Our Services</h1>

      <div className="service-section">
        <h3>Driver Booking</h3>
        <p>
          With RideReady, you can book a driver in minutes. Whether you need a driver now 
          or want to schedule one for later, we’ve got you covered.
        </p>
      </div>

      <div className="service-section">
        <h3>Real-Time Tracking</h3>
        <p>
          Track your driver on the map once your booking is confirmed. Stay updated 
          throughout the trip and get an estimated time of arrival.
        </p>
      </div>

      <div className="service-section">
        <h3>Secure Payment</h3>
        <p>
          Our secure payment gateway ensures that your transactions are safe. View 
          fare estimates before confirming your booking.
        </p>
      </div>
    </div>
  );
};

export default Services;
