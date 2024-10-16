import { useState, useEffect } from "react";
import axios from "axios"
import { baseUrl } from "../config";
import "./index.css"
import CustomerTrip from "../CustomerTrip";
import Cookies from "js-cookie"
import {jwtDecode} from 'jwt-decode';
const MyBookings = () => {
    const [tripData, setTripData] = useState([])
    const token = Cookies.get("jwtToken");
    const decodedToken = jwtDecode(token);

    const userId = decodedToken.id

    
    useEffect(() => {
      axios
        .get(`${baseUrl}/bookings/${userId}`)
        .then((res) => {
            setTripData(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []); // useEffect runs when tripStatus changes
    
    
  return (
    <div className="duty-container">
      <h1 className="trips-title">My Bookings</h1>
      <table className="trip-table">
        {tripData.map((eachTrip, index) => <CustomerTrip key={index} trip={eachTrip}/>)}
      </table>
    </div>
  );
};

export default MyBookings;
