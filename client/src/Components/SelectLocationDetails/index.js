import axios from "axios";
import "./index.css";
import { baseUrl } from "../config";

const SelectLocationDetails = ({setOpenExtraDetails,openExtraDetails,setLocationDetails,locationDetails}) => {
    const customerId = localStorage.getItem("senderData") && JSON.parse(localStorage.getItem("senderData")).id
   const submithandler = (e) => {
    e.preventDefault()
    axios.post(`${baseUrl}book-driver`, locationDetails)
    .then((res) => {
        alert("Location Selected successfully Wait for Driver")
        console.log("Successfully Added");
        window.location.reload()
    })
    .catch((err) => {
        console.log(err);
    })
  };

  const onCangeHandler = (e) => {
    setLocationDetails({...locationDetails, [e.target.name]: e.target.value, customerId})
  };

  return (
    <div className={`location-details-form-full-container ${openExtraDetails ? "open-details" : ""}`}>
      <h1 className="location-details-heading">Extra Details</h1>
      <form className="input-full-container" onSubmit={submithandler}>
        <label className="location-details-paragraph">Location</label>
        <input
          type="text"
          className="location-details-input-tag"
          name="location"
          onChange={onCangeHandler}
          placeholder="Enter Your FullName"
          required
        />
        
        <label className="location-details-paragraph">Car Name</label>
        <input
          type="text"
          className="location-details-input-tag"
          name="carName"
          onChange={onCangeHandler}
          placeholder="Enter Your Email"
          required
        />
        <label className="location-details-paragraph">Booking Type</label>
        <select name="bookingType" onChange={onCangeHandler} style={{height: "38px", width: "310px"}} className="location-details-input-tag">
            <option  className="location-details-value" value="Driver Only">--Select Booking Type--</option>
            <option value="Driver Only">Driver Only</option>
            <option value="Driver With Car">Driver With Car</option>
        </select>
        <button className="location-details-submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SelectLocationDetails;
