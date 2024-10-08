import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const DriverHomePage = () => {
  return (
    <div className="driver-homepage">
      <h1>Welcome to RideReady for Drivers</h1>

      {/* Marquee for announcements */}
      <marquee className="announcement" behavior="scroll" direction="left">
        New job opportunities available! Check your notifications.
      </marquee>

      <div className="feature-cards">
        <h2>Explore Your Dashboard</h2>
        <div className="card-group">
          <div className="card">
            <h3>Your Profile</h3>
            <p>
              Manage your profile information and availability to get more job offers.
            </p>
            <Link to="/driver/profile" className="card-button">View Profile</Link>
          </div>

          <div className="card">
            <h3>Job Notifications</h3>
            <p>
              Get notified for new job requests and accept or decline them easily.
            </p>
            <Link to="/driver/notifications" className="card-button">View Notifications</Link>
          </div>

          <div className="card">
            <h3>Trip History</h3>
            <p>
              Keep track of your completed trips and earnings for better management.
            </p>
            <Link to="/driver/trip-history" className="card-button">View Trips</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverHomePage;
