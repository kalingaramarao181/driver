import { useState, useEffect } from "react";
import Trip from "../Trip";
import axios from "axios"
import { baseUrl } from "../config";
import "./index.css"
const Duty = () => {
    const [tripData, setTripData] = useState([])
    
    useEffect(() => {
      axios
        .get(`${baseUrl}/trips`)
        .then((res) => {
            setTripData(res.data.availableTrips)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []); // useEffect runs when tripStatus changes
    
    
  return (
    <div className="duty-container">
      <h1 className="trips-title">TRIPS</h1>
      <table className="trip-table">
        {tripData.map((eachTrip, index) => <Trip key={index} trip={eachTrip}/>)}
      </table>
    </div>
  );
};

export default Duty;
