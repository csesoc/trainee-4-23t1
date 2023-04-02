import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, InfoWindowF } from "@react-google-maps/api";
import { API_KEY } from "../config";

const MapView = () => {
  const [location, setLocation] = useState(null);

  const center = {
    lat: -33.9173,
    lng: 151.2313,
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      console.log("FUCK");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
      >
        {" "}
        {location != null ? (
          <InfoWindowF key={0} position={location}>
            <div>Hello from Christian</div>
          </InfoWindowF>
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
