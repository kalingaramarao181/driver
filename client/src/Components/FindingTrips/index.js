import { useState, useEffect, useContext } from "react";
import Trip from "../Trip";
import axios from "axios";
import { baseUrl } from "../config";
import { UserContext } from "../Context/userContext";
import "./index.css";

const FindingTrips = () => {
  const [tripStatus, setTripStatus] = useState("Available");
  const [tripData, setTripData] = useState([]);
  const {setSidebarButtonStatus} = useContext(UserContext)

  // Fetch trips whenever tripStatus changes
  useEffect(() => {
    axios
      .get(`${baseUrl}/trips`)
      .then((res) => {
        tripStatus === "Available"
          ? setTripData(res.data.availableTrips)
          : setTripData(res.data.acceptedTrips);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [tripStatus]); // useEffect runs when tripStatus changes

  const tripStatusChange = (status) => {
    setTripStatus(status); // Change the trip status when a button is clicked
  };

  return (
    <div className="duty-container">
      <div className="selected-button-container">
        <button
          className={`${tripStatus === "Available" ? "selected-button-active" : "selected-button"} available`}
          onClick={() => tripStatusChange("Available")}
        >
          Available Trips
        </button>
        <button
          className={`${tripStatus === "Accepted" ? "selected-button-active" : "selected-button"} accepted`}
          onClick={() => tripStatusChange("Accepted")}
        >
          Accepted Trips
        </button>
      </div>
      <table className="trip-table">
      <tbody>
        {tripData.map((eachTrip) => (
          <Trip key={eachTrip.id} trip={eachTrip} setSidebarButtonStatus={setSidebarButtonStatus} isTripAccept={tripStatus === "Accepted"} />
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default FindingTrips;
