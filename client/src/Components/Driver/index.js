import { useState } from "react";
import "./index.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialGoogle } from "react-icons/sl";
import { useDeviceType } from "../Functions/deviceConverter";

import { PiSteeringWheelDuotone } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Duty from "../Duty";
import FindingTrips from "../FindingTrips";
import Wallet from "../Wallet";
import Payments from "../Payments";
import Settings from "../Settings";
import Feedback from "../FeedBack";
import MapContainer from "../Maps"
import QrCodeGenerator from "../UpiPayments";

import { UserContext } from "../Context/userContext";
import Maps from "../Maps";
import DriverProfile from "../DriverProfile";
import UserDataAdmin from "../UserDataAdmin";
import Notifications from "../Notifications";

const Driver = (props) => {
  const [sidebarButtonStatus, setSidebarButtonStatus] = useState("DriverProfile");
  const [mapLocation, setMapLocation] = useState({lat:17.72834676147881,lng:83.30856055625414});

  const { isTablet, isDesktop } = useDeviceType();

  const renderContent = () => {
    if (sidebarButtonStatus === "Duty") {
      return <Duty />;
    } else if (sidebarButtonStatus === "FindingTrips") {
      return <FindingTrips />;
    } else if (sidebarButtonStatus === "Wallet") {
      return <Wallet />;
    } else if (sidebarButtonStatus === "Payments") {
      return <Payments />;
    }else if (sidebarButtonStatus === "Settings") {
      return <Settings />;
    } else if (sidebarButtonStatus === "Feedback") {
      return <Feedback />;
    }else if (sidebarButtonStatus === "Upi") {
      return <QrCodeGenerator />;
    }else if (sidebarButtonStatus === "Maps") {
      return <Maps />;
    }else if (sidebarButtonStatus === "DriverProfile") {
      return <DriverProfile />;
    }else if (sidebarButtonStatus === "UserDataAdmin") {
      return <UserDataAdmin />;
    }else if (sidebarButtonStatus === "Notifications") {
      return <Notifications />;
    }
  };

  const sidebarItems = () => {
    return (
      <div className="admin-sidebar">
        <div className="admin-buttons-container">
          <button className="admin-image-botton" onClick={() => setSidebarButtonStatus("DriverProfile")}>
            <img className="admin-image" alt="profile" src="https://www.payrollhub.in/static/images/admin.png"/>
          </button>
          <div>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Duty" && "#3a31eb",
              }}
              onClick={() => setSidebarButtonStatus("Duty")}
              className="admin-sidebar-button"
            >
              <PiSteeringWheelDuotone className="sidebar-icon" /> Duty
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "FindingTrips" && "#3a31eb",
              }}
              onClick={() => setSidebarButtonStatus("FindingTrips")}
              className="admin-sidebar-button"
            >
              <FaSearch className="sidebar-icon" /> Finding Trips
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Wallet" && "#3a31eb",
              }}
              onClick={() => setSidebarButtonStatus("Wallet")}
              className="admin-sidebar-button"
            >
              <IoWalletOutline className="sidebar-icon" /> Wallet
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Payments" && "#3a31eb",
              }}
              onClick={() => setSidebarButtonStatus("Payments")}
              className="admin-sidebar-button"
            >
              <MdOutlinePayments className="sidebar-icon" /> Payments
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Settings" && "#3a31eb",
              }}
              onClick={() => setSidebarButtonStatus("Settings")}
              className="admin-sidebar-button"
            >
              <IoSettingsOutline className="sidebar-icon"/> Settings
            </button>
          </div>
        </div>
      </div>
    );
  };

  const sidebarItemsMobile = () => {
    return (
        <div className="page-item-footer">
            <button
              style={{fontWeight: sidebarButtonStatus === "Duty" && "bold", transform: sidebarButtonStatus === "Duty" && "scale(1.5)"}}
              onClick={() => setSidebarButtonStatus("Duty")}
              className="admin-footer-button"
            >
              <PiSteeringWheelDuotone />
            </button>
            <button
              style={{fontWeight: sidebarButtonStatus === "FindingTrips" && "bold", transform: sidebarButtonStatus === "FindingTrips" && "scale(1.5)"}}
              onClick={() => setSidebarButtonStatus("FindingTrips")}
              className="admin-footer-button"
            >
                <FaSearch />
            </button>
            <button
             style={{fontWeight: sidebarButtonStatus === "Wallet" && "bold", transform: sidebarButtonStatus === "Wallet" && "scale(1.5)"}}
              onClick={() => setSidebarButtonStatus("Wallet")}
              className="admin-footer-button"
            >
              <IoWalletOutline />
            </button>
            <button
              style={{fontWeight: sidebarButtonStatus === "Payments" && "bold", transform: sidebarButtonStatus === "Payments" && "scale(1.5)"}}
              onClick={() => setSidebarButtonStatus("Payments")}
              className="admin-footer-button"
            >
              <MdOutlinePayments />
            </button>
            <button
              style={{fontWeight: sidebarButtonStatus === "Settings" && "bold", transform: sidebarButtonStatus === "Settings" && "scale(1.5)"}}
              onClick={() => setSidebarButtonStatus("Settings")}
              className="admin-footer-button"
            >
              <IoSettingsOutline />
            </button>
        </div>
    )
  }


  return (
    <UserContext.Provider value={{ sidebarButtonStatus, setSidebarButtonStatus, mapLocation, setMapLocation }}>
    <div className="page-container">
      <div className="page-body">
        {(isTablet || isDesktop) && sidebarItems()}

        <div className="content">{renderContent()}</div>
      </div>
      {(isTablet || isDesktop) && <div className="page-footer">
        <p className="contact-us">Contact Us</p>
        <p className="contact-us">© {new Date().getFullYear()} All rights reserved to <a target="_blank" href="https://beedatatech.com">BeedataTech.com</a></p>
        <div>
          <a style={{color: "white"}} target="_blank" href="https://www.facebook.com/profile.php?id=61567807704128"><SlSocialFacebook className="social-icon" /></a>
          <SlSocialInstagram className="social-icon" />
          <a style={{color: "white"}} target="_blank" href="https://x.com/Rideready2024"><TiSocialTwitter className="social-icon" /></a>
          <a style={{color: "white"}} target="_blank" href="https://www.linkedin.com/in/rideready-beedata-98bb91334/"><TiSocialLinkedin className="social-icon" /></a>
          <SlSocialGoogle className="social-icon" />
        </div>
      </div>}
      {(!isTablet && !isDesktop) && sidebarItemsMobile()}
    </div>
    </UserContext.Provider>
  );
};

export default withRouter(Driver);
