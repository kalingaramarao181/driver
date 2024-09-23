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

import Cookies from "js-cookie";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Duty from "../Duty";
import FindingTrips from "../FindingTrips";
import Wallet from "../Wallet";

const User = (props) => {
  const [sidebarButtonStatus, setSidebarButtonStatus] = useState("Wallet");
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  const onClickLogout = () => {
    Cookies.remove("adminToken");
    props.history.replace("/");
  };

  const renderContent = () => {
    if (sidebarButtonStatus === "Duty") {
      return <Duty />;
    } else if (sidebarButtonStatus === "FindingTrips") {
      return <FindingTrips />;
    } else if (sidebarButtonStatus === "Wallet") {
      return <Wallet />;
    } else if (sidebarButtonStatus === "Payouts") {
      return <h1>ClientData</h1>;
    } else if (sidebarButtonStatus === "Admin") {
      return <h1>No Data</h1>;
    }
  };

  const sidebarItems = () => {
    return (
      <div className="admin-sidebar">
        <div className="admin-buttons-container">
          <button className="admin-image-botton" onClick={() => setSidebarButtonStatus("Admin")}>
            <img className="admin-image" src="https://www.payrollhub.in/static/images/admin.png"/>
          </button>
          <div>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Duty" ? "#0E0C49" : "#030131",
              }}
              onClick={() => setSidebarButtonStatus("Duty")}
              className="admin-sidebar-button"
            >
              Duty
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "FindingTrips"
                    ? "#0E0C49"
                    : "#030131",
              }}
              onClick={() => setSidebarButtonStatus("FindingTrips")}
              className="admin-sidebar-button"
            >
              Finding Trips
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Wallet" ? "#0E0C49" : "#030131",
              }}
              onClick={() => setSidebarButtonStatus("Wallet")}
              className="admin-sidebar-button"
            >
              Wallet
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Payouts" ? "#0E0C49" : "#030131",
              }}
              onClick={() => setSidebarButtonStatus("Payouts")}
              className="admin-sidebar-button"
            >
              Payouts
            </button>
            <button
              style={{
                backgroundColor:
                  sidebarButtonStatus === "Settings" ? "#0E0C49" : "#030131",
              }}
              onClick={() => setSidebarButtonStatus("Settings")}
              className="admin-sidebar-button"
            >
              Settings
            </button>
          </div>
        </div>
        <button onClick={onClickLogout} className="admin-logout-button">
          Logout
        </button>
      </div>
    );
  };

  const sidebarItemsMobile = () => {
    return (
        <div className="page-item-footer">
            <button
              style={{backgroundColor: sidebarButtonStatus === "Duty" && "black"}}
              onClick={() => setSidebarButtonStatus("Duty")}
              className="admin-footer-button"
            >
              <PiSteeringWheelDuotone />
            </button>
            <button
              style={{backgroundColor: sidebarButtonStatus === "FindingTrips" && "black"}}
              onClick={() => setSidebarButtonStatus("FindingTrips")}
              className="admin-footer-button"
            >
                <FaSearch />
            </button>
            <button
             style={{backgroundColor: sidebarButtonStatus === "Wallet" && "black"}}
              onClick={() => setSidebarButtonStatus("Wallet")}
              className="admin-footer-button"
            >
              <IoWalletOutline />
            </button>
            <button
              style={{backgroundColor: sidebarButtonStatus === "Payouts" && "black"}}
              onClick={() => setSidebarButtonStatus("Payouts")}
              className="admin-footer-button"
            >
              <MdOutlinePayments />
            </button>
            <button
              style={{backgroundColor: sidebarButtonStatus === "Settings" && "black"}}
              onClick={() => setSidebarButtonStatus("Settings")}
              className="admin-footer-button"
            >
              <IoSettingsOutline />
            </button>
        </div>
    )
  }


  return (
    <div className="page-container">
      <div className="page-body">
        {(isTablet || isDesktop) && sidebarItems()}

        <div className="content">{renderContent()}</div>
      </div>
      {(isTablet || isDesktop) && <div className="page-footer">
        <p className="contact-us">Contact Us</p>
        <div>
          <SlSocialFacebook className="social-icon" />
          <SlSocialInstagram className="social-icon" />
          <TiSocialTwitter className="social-icon" />
          <TiSocialLinkedin className="social-icon" />
          <SlSocialGoogle className="social-icon" />
        </div>
      </div>}
      {(!isTablet && !isDesktop) && sidebarItemsMobile()}
    </div>
  );
};

export default withRouter(User);
