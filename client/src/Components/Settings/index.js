import { PiSteeringWheelDuotone } from "react-icons/pi"
import "./index.css"
import { IoWalletOutline } from "react-icons/io5"
import { MdOutlinePayments } from "react-icons/md"
import { IoSearch } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineFeedback } from "react-icons/md";
import { UserContext } from "../Context/userContext";
import { useContext } from "react";

const Settings = () => {

    const {setSidebarButtonStatus} = useContext(UserContext)
    const features = [
        {
            featureId: "Duty",
            featureName: "Duty",
            featureIcon: PiSteeringWheelDuotone
        },{
            featureId: "FindingTrips",
            featureName: "Trips History",
            featureIcon: IoSearch
        },{
            featureId: "Wallet",
            featureName: "Wallet",
            featureIcon: IoWalletOutline
        },{
            featureId: "Payments",
            featureName: "Payments",
            featureIcon: MdOutlinePayments
        },{
            featureId: "DriverProfile",
            featureName: "Security",
            featureIcon: MdOutlineSecurity
        },{
            featureId: "Payments",
            featureName: "Notification",
            featureIcon: IoIosNotificationsOutline
        },{
            featureId: "Payments",
            featureName: "Support",
            featureIcon: MdOutlineContactSupport
        },{
            featureId: "Feedback",
            featureName: "Feedback",
            featureIcon: MdOutlineFeedback
        },
    ]
    return (
        <div className="settings-container">
            <h1 className="settings-title">Settings:</h1>
            <div className="settings-features-cards">
                {features.map((eachFeature, index) => 
                    <div className="settings-feature-card" onClick={() => setSidebarButtonStatus(eachFeature.featureId)} key={index}>
                        <eachFeature.featureIcon className="settings-feature-icon"/>
                        <p className="settings-feature-name">{eachFeature.featureName}</p>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Settings