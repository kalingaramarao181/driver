import "./index.css";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { IoReorderThree } from "react-icons/io5";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const userNotifications = [
    {
      message:
        "Driver alert system: Some vehicles have a driver alert system that monitors a driver's alertness and provides audible and visual warnings if the driver's pattern becomes irregular.",
    },
    {
      message:
        "Driver notification forms: Employees may use a driver notification form to notify their supervisor of activities that may affect their eligibility to drive for state business.",
    },
    {
      message:
        "Notification triggers for driver apps: Some driver apps have notification triggers that send alerts when a driver starts a task, completes a task, or is approaching a destination.",
    },
    {
      message:
        "Driver messaging notifications: Some services, like Samsara, offer driver messaging notifications.",
    },
    {
      message:
        "SMS text messaging for driver schedules: Driver Schedule offers SMS text messaging for driver schedules.",
    },
    {
      message:
        "Client and driver notifications for logistics: Wialon offers client and driver notifications for logistics",
    },
    {
      message:
        "Driver notification forms: Employees may use a driver notification form to notify their supervisor of activities that may affect their eligibility to drive for state business.",
    },
    {
      message:
        "Notification triggers for driver apps: Some driver apps have notification triggers that send alerts when a driver starts a task, completes a task, or is approaching a destination.",
    },
    {
      message:
        "Driver messaging notifications: Some services, like Samsara, offer driver messaging notifications.",
    },
    {
      message:
        "SMS text messaging for driver schedules: Driver Schedule offers SMS text messaging for driver schedules.",
    },
    {
      message:
        "Client and driver notifications for logistics: Wialon offers client and driver notifications for logistics",
    },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav">
        <Link to="/" className="nav-Home-logo">
          <img className="app-logo" src="\images\driver-logo.png" alt="logo" />
        </Link>

        <div className="nav-container-1">
          <div className="nav-cont-2">
            <SlSocialFacebook className="social-nav-icon" />
            <SlSocialInstagram className="social-nav-icon" /> 
            <TiSocialTwitter className="social-nav-icon" />
            <TiSocialLinkedin className="social-nav-icon" />
            <SlSocialGoogle className="social-nav-icon" />
          </div>
          <IoReorderThree onClick={toggleSidebar} className="feature-nav-icon" />
          <ul className={`nav-items-container nav-items-container-mbl ${isOpen ? 'open' : ''}`}>
            <li className="nav-row-item">Home</li>
            <li className="nav-row-item">About Us</li>
            <li className="nav-row-item">Service</li>
            <li className="nav-row-item">Security</li>
            <button className="nav-signup-button">Signin</button>
          </ul>
        </div>
        {/* <div className="slider-notification-container">
          <label className="switch">
            <input className="slider-check" type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <button
            onClick={toggleSidebar}
            to="login"
            className="home-notification-button"
          >
            <IoIosNotificationsOutline />
          </button>
        </div> */}
      </div>
      {/* <div
          onClick={toggleSidebar}
          className={`sidebar ${isOpen ? "open" : ""}`}
        >
            <h1 className="note-title">Notifications</h1>
          <ul className="home-sidebar-container">
            {userNotifications.map((note, index) => <li key={index} className="note-message">{note.message}</li>)}
          </ul>
        </div> */}
    </>
  );
};

export default withRouter(Header);
