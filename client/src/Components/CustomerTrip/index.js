import { baseUrl } from "../config";
import { useDeviceType } from "../Functions/deviceConverter";
import axios from "axios"
import "./index.css";
import { UserContext } from "../Context/userContext";
import { useContext } from "react";
const CustomerTrip = ({ trip, isTripAccept}) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  const {setSidebarButtonStatus, setMapLocation} = useContext(UserContext)



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
        <td className="table-data end-data">
          <button
          style={{backgroundColor: "rgb(33, 2, 105)"}}
            className={`${
              isTablet || isDesktop ? "action" : "action-mobile"
            } ignore`}
          >
            Show 
          </button>
          <button
          style={{fontSize: "10px"}}
            className={`${
              isTablet || isDesktop ? "action" : "action-mobile"
            } accept`}
          >
            Call Driver
          </button>
        </td>
    </tr>
  );
};

export default CustomerTrip;
