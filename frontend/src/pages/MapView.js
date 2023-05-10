import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, InfoWindowF } from "@react-google-maps/api";
import { API_KEY } from "../config";

const MapView = () => {
  const [locations, setLocations] = useState([]);

  const center = {
    lat: -33.9173,
    lng: 151.2313,
  };

  useEffect(() => {
    getLocations();
  }, []);


  // multiple locations
  const getLocations = () => {
    // Replace this with your own logic to fetch the list of locations
    const locations = [
      { id: 1, lat: -33.9169, lng: 151.2279, name: "Friend 1" },
      { id: 2, lat: -33.9169, lng: 151.2298, name: "Friend 2" },
      { id: 3, lat: -33.9173, lng: 151.2335, name: "Friend 3" },
    ];

    setLocations(locations);
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        center={center}
        zoom={14}
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
      >
        {locations.map((location) => (
          <InfoWindowF key={location.id} position={location}>
            <div>{location.name}</div>
          </InfoWindowF>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
