import { baseUrl } from "../config";
import { useDeviceType } from "../Functions/deviceConverter";
import axios from "axios"
import "./index.css";
import { UserContext } from "../Context/userContext";
import { useContext } from "react";
import Cookies from "js-cookie"
import {jwtDecode} from 'jwt-decode';
const Trip = ({ trip, isTripAccept}) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  console.log(trip);
  
  const token = Cookies.get("jwtToken");
    const decodedToken = jwtDecode(token);

    const userId = decodedToken.id

  const {setSidebarButtonStatus, setMapLocation} = useContext(UserContext)

  const handleAccept = (tripId) => {
    axios.put(`${baseUrl}/trip/${tripId}/${userId}`)
    .then((res) => {
      console.log(res.data);
      window.location.reload()
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleNavigate = (mapLocation, toLocation) => {
    setSidebarButtonStatus("Maps")
    setMapLocation(JSON.parse(mapLocation))
    console.log(JSON.parse(mapLocation), JSON.parse(toLocation));
    
  }


  return (
    <tr className="table-row">
      <td className="table-data start-data">
        <img className="car-image" src={trip.carImage} alt="car" />
      </td>
      {(isTablet || isDesktop) && (
        <td className="table-data">{trip.carType}</td>
      )}
      <td className="table-data">{trip.location}</td>
      {(isTablet || isDesktop) && (
        <td className="table-data">{trip.bookingType}</td>
      )}
      <td className="table-data">{trip.duration}</td>
      <td className="table-data">{trip.dateTime}</td>
      <td className="table-data">{trip.tripDistance}</td>
      <td className="table-data">{trip.amount}</td>
      {isTripAccept ? (
        <td className="table-data end-data">
          <button
          onClick={() => handleNavigate(trip.fromLocation, trip.toLocation)}
          style={{backgroundColor: "rgb(33, 2, 105)"}}
            className={`${
              isTablet || isDesktop ? "action" : "action-mobile"
            } ignore`}
          >
            Navigate
          </button>
          <button
          style={{fontSize: "10px"}}
            className={`${
              isTablet || isDesktop ? "action" : "action-mobile"
            } accept`}
          >
            Call Customer
          </button>
        </td>
      ) : (
        <td className="table-data end-data">
          <button
            className={`${
              isTablet || isDesktop ? "action" : "action-mobile"
            } ignore`}
          >
            Ignore
          </button>
          <button
          onClick={() => handleAccept(trip.id)}
            className={`${
              isTablet || isDesktop ? "action" : "action-mobile"
            } accept`}
          >
            Accept
          </button>
        </td>
      )}
    </tr>
  );
};

export default Trip;
