import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import "./index.css";
const Notifications = () => {
  const [tripStatus, setTripStatus] = useState("Settled");

  const driverNotifications = [
    {
      title: "New Ride Request",
      message:
        "You have a new ride request from [Customer Name]. Pickup at [Pickup Location]. Tap to accept.",
      actions: ["Accept", "Decline"],
    },
    {
      title: "Ride Accepted",
      message:
        "You have successfully accepted the ride request. Navigate to [Pickup Location] for pickup.",
      actions: ["Navigate"],
    },
    {
      title: "Ride Canceled by Customer",
      message: "The ride request from [Customer Name] has been canceled.",
      actions: [],
    },
    {
      title: "Ride Completed",
      message:
        "Well done! You have successfully completed the ride. Check your earnings.",
      actions: ["View Earnings"],
    },
    {
      title: "Payment Received",
      message:
        "You've received a payment of [Amount] for the ride with [Customer Name].",
      actions: [],
    },
    {
      title: "New Message from Customer",
      message: "[Customer Name] has sent you a message: '[Message Text]'.",
      actions: ["Reply", "View Conversation"],
    },
    {
      title: "New Ride Request in Your Area",
      message:
        "There's a ride request near your current location. Tap to view details.",
      actions: ["Accept", "View Request"],
    },
  ];

  const customerNotifications = [
    {
      title: "Ride Confirmed",
      message:
        "Your driver [Driver Name] is on the way. Estimated arrival: [ETA].",
      actions: ["Track Driver"],
    },
    {
      title: "Driver Arriving Soon",
      message:
        "Your driver [Driver Name] is almost at the pickup location. Please be ready!",
      actions: ["Open GPS", "Call Driver"],
    },
    {
      title: "Ride Canceled by Driver",
      message:
        "We're sorry! Your driver has canceled the ride. Please request another driver.",
      actions: [],
    },
    {
      title: "Driver Has Arrived",
      message:
        "Your driver [Driver Name] is waiting for you at [Pickup Location].",
      actions: ["Call Driver", "Message Driver"],
    },
    {
      title: "Ride Completed",
      message:
        "You've arrived at your destination! Please rate your driver and complete payment.",
      actions: ["Rate Driver", "Pay Now"],
    },
    {
      title: "Payment Successful",
      message:
        "Your payment of [Amount] for the ride with [Driver Name] was successful. Thank you for using Reade Ready!",
      actions: ["View Receipt"],
    },
    {
      title: "Promo Code",
      message:
        "Use promo code 'READY10' to get 10% off your next ride! Limited time offer.",
      actions: ["Apply Now"],
    },
  ];

  const backgroundColors = ["#0000ff", "#f9f9f9"];
  const colors = ["white", "black"];

  return (
    <div className="duty-container">
      <h1 style={{ margin: "10px" }} className="settings-title">
        Notifications:
      </h1>
      <div className="payments-cards-container">
        {driverNotifications.map((eachNotification) => (
          <div style={{ cursor: "pointer" }} className="transaction-card">
            <div className="notification-card-section">
              <GoDotFill className="notification-dot" />
              <div>
                <p className="transaction-type">{eachNotification.title}</p>
                <p className="notification-message">
                  {eachNotification.message}
                </p>
              </div>
            </div>
            <div className="notifications-button-container">
              {eachNotification.actions.map((eachAcction, index) => (
                <button
                  style={{
                    backgroundColor: backgroundColors[index],
                    color: colors[index],
                  }}
                  key={index}
                  className="acctions-button"
                >
                  {eachAcction}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
