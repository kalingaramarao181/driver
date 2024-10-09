import "./index.css";
import { Link, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { IoReorderThree } from "react-icons/io5";
import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode'; // Fix import

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enterSignin, setEnterSignin] = useState(false);
  const [isExpired, setIsExpired] = useState(false);
  
  // UseEffect to check token expiration
  useEffect(() => {
    const token = Cookies.get("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds
        if (decodedToken.exp < currentTime) {
          setIsExpired(true);
        }
      } catch (err) {
        console.error("Invalid token", err);
      }
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    setIsExpired(true);
    props.history.push("/login"); // Redirect after logout
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
            <Link style={{color: "white", textDecoration: "none"}} to="home"><li className="nav-row-item">Home</li></Link>
            <li className="nav-row-item">About Us</li>
            <li className="nav-row-item">Service</li>
            <li className="nav-row-item">Security</li>
            {/* Conditional rendering based on token expiration */}
            {isExpired ? (
              <div>
                <button
                  className="nav-signup-button"
                  onMouseEnter={() => setEnterSignin(true)}
                  onMouseLeave={() => setEnterSignin(false)}
                >
                  Signin
                </button>
                {enterSignin && (
                  <div
                    onMouseEnter={() => setEnterSignin(true)}
                    onMouseLeave={() => setEnterSignin(false)}
                    className="customer-signin-container"
                  >
                    <Link to="login">
                      <button className="nav-signup-button">Driver Signin</button>
                    </Link>
                    <Link to="login-c">
                      <button className="nav-signup-button">Customer Signin</button>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <button className="nav-signup-button" onClick={handleLogout}>
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default withRouter(Header);
