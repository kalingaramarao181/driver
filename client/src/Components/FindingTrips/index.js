import { useState } from "react";
import Trip from "../Trip";
import "./index.css"
const FindingTrips = () => {
    const [tripStatus, setTripStatus] = useState("Available")
    
    
    const availableTrips = [
        {
            location: "Visakhapatnam",
            bookingId: "12345",
            carImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/141867/nexon-exterior-right-front-three-quarter-71.jpeg?isig=0&q=80",
            bookingType: "Only Driver",
            carType: "Maruti Fronx",
            duration: "4 Hours",
            dateTime: "22-09-2024 06:30pm",
            tripDistance: "10.3km",
            baseFare: 199,
            fareAmount: 342,
            amount: 641
        },{
            location: "Gajuwaka",
            bookingId: "12345",
            carImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
            bookingType: "Only Driver",
            carType: "Maruti Grand Vitara",
            duration: "4 Hours",
            dateTime: "22-09-2024 06:30pm",
            tripDistance: "10.3km",
            baseFare: 199,
            fareAmount: 342,
            amount: 533
        },
        {
            location: "Madhurawada",
            bookingId: "12345",
            carImage: "https://imgd-ct.aeplcdn.com/370x231/n/cw/ec/48034/2-series-gran-coupe-exterior-right-front-three-quarter.jpeg?q=80",
            bookingType: "Only Driver",
            carType: "Maruti Brezza",
            duration: "6 Hours",
            dateTime: "22-09-2024 06:30pm",
            tripDistance: "10.3km",
            baseFare: 199,
            fareAmount: 342,
            amount: 748
        }
    ]
    const acceptedTrips = [
        {
            location: "Vizianagaram",
            bookingId: "12345",
            carImage: "https://cdn.skoda-auto.com/images/sites/enin-v2/a71213c6-8d7e-4d75-b8db-0c633fe07cf4/8bca40fc7d92b44e04890e34cfb8852d/HeroBannerModule/d5873a76116765a49a9393a5cabdf63b/6c15c19c9087422c4b3593b63bcd9cadee61d995aa9aa406ecd1beab812bc116/Header_bp1920_1.webp",
            bookingType: "Maruti Swift",
            carType: "Hatch Back Car Driver",
            duration: "3 Hours",
            dateTime: "22-09-2024 06:30pm",
            tripDistance: "10.3km",
            baseFare: 199,
            fareAmount: 342,
            amount: 322
        },
    ]

    const tripStatusChange = (btnStatus) => {
        setTripStatus(btnStatus)
    }

    let tripData = tripStatus === "Available" ? availableTrips : acceptedTrips
    
  return (
    <div className="duty-container">
      <div className="selected-button-container">
        <button  className={`${tripStatus === "Available" ? "selected-button-active" : "selected-button"} available`} onClick={() => tripStatusChange("Available")}>Available Trips</button>
        <button  className={`${tripStatus === "Accepted" ? "selected-button-active" : "selected-button"} accepted`} onClick={() => tripStatusChange("Accepted")}>Accepted Trips</button>
      </div>
      <table className="trip-table">
        {tripData.map(eachTrip => <Trip trip={eachTrip} isTripAccept={tripStatus === "Accepted"}/>)}
      </table>
    </div>
  );
};

export default FindingTrips;
