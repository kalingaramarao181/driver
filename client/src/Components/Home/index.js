import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to RideReady</h1>
      
      {/* Marquee for announcements */}
      <marquee className="announcement" behavior="scroll" direction="left">
        Get 20% off on your first ride! Book Now!
      </marquee>

      <div className="feature-cards">
        <h2>Explore Our Services</h2>
        <div className="card-group">
          <div className="card">
            <h3>Book a Driver</h3>
            <p>
              Easily search and book a driver in your vicinity, available 24/7.
            </p>
            <Link to="/services" className="card-button">Learn More</Link>
          </div>

          <div className="card">
            <h3>Track Your Driver</h3>
            <p>
              Use our real-time tracking to follow your driver’s location on the map.
            </p>
            <Link to="/services" className="card-button">Learn More</Link>
          </div>

          <div className="card">
            <h3>Secure Payments</h3>
            <p>
              Pay securely through our app and get an estimated fare before booking.
            </p>
            <Link to="/services" className="card-button">Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
