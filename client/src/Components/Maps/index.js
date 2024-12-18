import React, { useState, useCallback, useContext } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { BiCurrentLocation } from "react-icons/bi";
import { FaCopy } from "react-icons/fa";
import { FiNavigation } from "react-icons/fi";
import { UserContext } from "../Context/userContext";
import "./index.css";

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

const Maps = () => {

  const {mapLocation} = useContext(UserContext)
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDpQYynPI5mi2WKRjpElTO5epXqPcvATBk", // Replace with your API key
  });

  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(center);
  const [markerPosition, setMarkerPosition] = useState(mapLocation);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

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

  function toRad(value) {
    return (value * Math.PI) / 180;
  }

  // Get the current location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const currentPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(currentPos);
        setMarkerPosition(currentPos);
        map.setCenter(currentPos);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Copy current location to clipboard
  const copyCurrentLocation = () => {
    const textToCopy = `${currentLocation.lat}, ${currentLocation.lng}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Current location copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Navigate to current location in Google Maps
  const navigateToCurrentLocation = () => {
    // const url = `https://www.google.com/maps/dir/?api=1&destination=${currentLocation.lat},${currentLocation.lng}`
    const url = `https://www.google.com/maps/@${currentLocation.lat},${currentLocation.lng},15z`; // Adjust the zoom level
    window.open(url, "_blank"); // Open in a new tab
  };

  // Handle map click to set a marker
  const handleMapClick = (event) => {
    const clickedPosition = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarkerPosition(mapLocation);
    setCurrentLocation(clickedPosition); // Update currentLocation to the new position
    console.log(JSON.stringify(clickedPosition));
    
  };

  // Copy picked location to clipboard
  const copyPickedLocation = () => {
    const textToCopy = `${markerPosition.lat}, ${markerPosition.lng}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Picked location copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  // Navigate to picked location in Google Maps
  const navigateToPickedLocation = () => {
    // const url = `https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}`
    const url = `https://www.google.com/maps?q=${markerPosition.lat},${markerPosition.lng}`; // Adjust the zoom level
    window.open(url, "_blank"); // Open in a new tab
  };

  if (loadError) return <div>Error loading maps</div>; // Error handling

  return isLoaded ? (
    <div className="maps-main-container">
      <div className="maps-button-container-1">
        <input
          className="maps-search"
          placeholder="Search Location"
          type="search"
        />
        <div className="maps-buttons">
          <button className="maps-button" onClick={navigateToCurrentLocation}>
            Current Location <FiNavigation style={{ marginLeft: "10px" }} />
          </button>
          <button className="maps-button" onClick={copyPickedLocation}>
            <FaCopy style={{ marginRight: "10px" }} /> Picked Location
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
        {/* Add a marker for the current location */}
        <Marker position={markerPosition} />
      </GoogleMap>
      <div className="maps-button-container" style={{ marginBottom: "10px" }}>
        <button className="maps-button" onClick={getCurrentLocation}>
          <BiCurrentLocation />
        </button>
        <button className="maps-button" onClick={copyCurrentLocation}>
          <FaCopy />
        </button>
        <button className="maps-button" onClick={navigateToPickedLocation}>
          <FiNavigation />
        </button>
      </div>
      
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default React.memo(Maps);
