import React, { useState, useCallback, useContext, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { BiCurrentLocation } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { UserContext } from "../Context/userContext";
import "./index.css";
import { baseUrl } from "../config";
import SelectLocationDetails from "../SelectLocationDetails";

// Style for the map container
const containerStyle = {
  width: "100%",
  height: "60vh", // Adjust the height as needed
};

// Initial center of the map (Visakhapatnam)
const center = {
  lat: 17.6868,
  lng: 83.2185,
};

const MapsCustomer = () => {
  const { mapLocation } = useContext(UserContext);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDpQYynPI5mi2WKRjpElTO5epXqPcvATBk", // Replace with your API key
  });

  const [openExtraDetails, setOpenExtraDetails] = useState(false)

  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(center);
  const [fromLocation, setFromLocation] = useState(null);
  const [toLocation, setToLocation] = useState(null);
  const [fromAddress, setFromAddress] = useState(""); // State for "From" address
  const [toAddress, setToAddress] = useState(""); // State for "To" address
  const [isFromLocationSelected, setIsFromLocationSelected] = useState(true);
  const [currentMarker, setCurrentMarker] = useState(null);
  const [distanceDuration, setDistanceDuration] = useState(null);
  const [locationDetails, setLocationDetails] = useState({})


  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Get the current location and add marker
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(currentPos);
        setCurrentMarker(currentPos);
        map.setCenter(currentPos);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Haversine formula to calculate straight-line distance
  function haversineDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers
    return distance;
  }

  function estimateDuration(distance, speed) {
    const timeInHours = distance / speed; // Time = Distance / Speed
    console.log(distance, speed);

    const hours = Math.floor(timeInHours);
    const minutes = Math.floor((timeInHours - hours) * 60);

    if (hours === 0) {
      return `${minutes}Minutes`;
    } else {
      return `${hours}Hours, ${minutes}Minutes`;
    }
  }

  function toRad(value) {
    return (value * Math.PI) / 180;
  }

  const calculateDistance = () => {
    if (fromLocation && toLocation) {
      const dist = haversineDistance(
        fromLocation.lat,
        fromLocation.lng,
        toLocation.lat,
        toLocation.lng
      );
      const averageSpeed = 20;
      const duration = estimateDuration(dist, averageSpeed);
      const distance = dist.toFixed(2) + "KM";
      const amount = (dist * 50).toFixed(0);
      setOpenExtraDetails((prev) => !prev)
      setDistanceDuration({ distance, duration, amount });
      setLocationDetails({...locationDetails, tripDistance: distance, amount, fromLocation, toLocation, duration})
    } else {
      alert("Both locations must be selected!");
    }
  };

  // Function to reverse geocode and get address from lat/lng
  const getAddressFromLatLng = (lat, lng, setAddress) => {
    const geocoder = new window.google.maps.Geocoder();
    const latLng = new window.google.maps.LatLng(lat, lng);
    geocoder.geocode({ location: latLng }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address); // Set the address state
        console.log("Address: ", results[0].formatted_address);
      } else {
        console.error("Geocoder failed due to: " + status);
      }
    });
  };

  // Handle map click to set either "From" or "To" location
  const handleMapClick = (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    if (isFromLocationSelected) {
      setFromLocation(clickedPosition);
      getAddressFromLatLng(
        clickedPosition.lat,
        clickedPosition.lng,
        setFromAddress
      ); // Get address for From location
    } else {
      setToLocation(clickedPosition);
      getAddressFromLatLng(
        clickedPosition.lat,
        clickedPosition.lng,
        setToAddress
      ); // Get address for To location
    }
  };


  // Copy picked location (either "From" or "To") to clipboard
  const copyLocation = (location) => {
    if (!location) {
      alert("No location selected!");
      return;
    }
    const textToCopy = `${location.lat}, ${location.lng}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Location copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Navigate to selected location in Google Maps
  const navigateToLocation = (location) => {
    if (!location) {
      alert("No location selected!");
      return;
    }
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  const navigateToDirections = () => {
    if (!fromLocation || !toLocation) {
      alert("No location selected!");
      return;
    }
    const url = `https://www.google.com/maps/dir/?api=1&origin=${fromLocation.lat},${fromLocation.lng}&destination=${toLocation.lat},${toLocation.lng}`;
    window.open(url, "_blank"); // Open in a new tab
  };

  if (loadError) return <div>Error loading maps</div>;

  return isLoaded ? (
    <div className="maps-main-container">
      <div className="maps-button-container-1">
        <div className="maps-buttons">
          <button
            className="maps-button"
            style={{ backgroundColor: isFromLocationSelected && "blue" }}
            onClick={() => setIsFromLocationSelected(true)}
          >
            Set Pickup Location
          </button>
          <button
            className="maps-button"
            style={{ backgroundColor: !isFromLocationSelected && "blue" }}
            onClick={() => setIsFromLocationSelected(false)}
          >
            Set Drop Location
          </button>
        </div>
        <div className="maps-buttons">
          <button
            className="maps-button"
            onClick={() =>
              copyLocation(isFromLocationSelected ? fromLocation : toLocation)
            }
          >
            <FaCopy style={{ marginRight: "10px" }} /> Copy Location
          </button>
          <button className="maps-button" onClick={navigateToDirections}>
            Show Directions <FiNavigation style={{ marginLeft: "10px" }} />
          </button>
        </div>
      </div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={15} // Adjust the zoom level as needed
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={handleMapClick} // Handle clicks on the map
      >
        {/* Add markers for From, To, and Current locations */}
        {fromLocation && (
          <Marker
            position={fromLocation}
            label={{
              text: "From",
              color: "white",
              fontSize: "8px",
              fontWeight: "bold",
            }}
          />
        )}
        {toLocation && (
          <Marker
            position={toLocation}
            label={{
              text: "To",
              color: "white",
              fontSize: "8px",
              fontWeight: "bold",
            }}
          />
        )}
        {currentMarker && (
          <Marker
            position={currentMarker}
            label={{
              text: "Current",
              color: "white",
              fontSize: "7px",
              fontWeight: "bold",
            }}
          />
        )}
      </GoogleMap>
      <div className="maps-button-container" style={{ marginBottom: "10px" }}>
        <button className="maps-button" onClick={getCurrentLocation}>
          <BiCurrentLocation />
        </button>
        <button className="maps-button">
          <FaCopy />
        </button>
        <button onClick={calculateDistance} className="maps-button">
          Next
        </button>
        <SelectLocationDetails setOpenExtraDetails={setOpenExtraDetails} openExtraDetails={openExtraDetails} setLocationDetails={setLocationDetails} locationDetails={locationDetails}/>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(MapsCustomer);
