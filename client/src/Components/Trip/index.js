import { useDeviceType } from "../Functions/deviceConverter";
import "./index.css";
const Trip = (props) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const { trip, isTripAccept } = props;
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
