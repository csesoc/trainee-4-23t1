import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, InfoWindowF } from "@react-google-maps/api";
import { API_KEY } from "../config";

// Temporary Location + profile map marker using a random location
const MapView = () => {
  const [locations, setLocations] = useState([]);

  const center = {
    lat: -33.91894,
    lng: 151.23116,
  };

  useEffect(() => {
    getLocations();
  }, []);

  // multiple locations
  const getLocations = () => {
    // Replace this with your own logic to fetch the list of locations
    const locations = [
      { id: 1, lat: -33.91894, lng: 151.23116, name: "You", imgSrc: "https://i.imgur.com/HmI52b.png", description: "Trainee Showcase", from: "14:00", to: "16:00" },
      { id: 2, lat: -33.91678, lng: 151.22829, name: "John", imgSrc: "https://i.imgur.com/UgD56b.png", description: "Lunch", from: "13:00", to: "14:00" },
      { id: 3, lat: -33.91678, lng: 151.22963, name: "Sarah", imgSrc: "https://i.imgur.com/LYzymb.png", description: "Study 2511", from: "12:00", to: "15:00" },
      { id: 4, lat: -33.9183, lng: 151.2335, name: "Alex", imgSrc: "https://i.imgur.com/EuAKtb.png", description: "Grinding math1141", from: "12:00", to: "14:00" },
      { id: 5, lat: -33.9184, lng: 151.22942, name: "Emily", imgSrc: "https://i.imgur.com/EUBI6b.png", description: "Reading", from: "11:00", to: "14:00" },
    ];

    setLocations(locations);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
      >
        {locations.map((location) => (
          <InfoWindowF
            key={location.id} position={location}>
            <div>
              <img
                src={location.imgSrc}
                alt={location.name}
                style={{ borderRadius: "50%", width: "32px", height: "32px" }}
              />
              <p>{location.name}</p>
              <p>"{location.description}"</p>
              <p>({location.from} - {location.to})</p>
            </div>
          </InfoWindowF>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;