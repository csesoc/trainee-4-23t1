import React, { useEffect, useState } from "react";
import "./App.css";
import { GoogleMap, LoadScript, InfoWindowF } from "@react-google-maps/api";

function App() {
  const center = {
    lat: -33.9173,
    lng: 151.2313,
  };

  const location = {
    lat: -33.9172,
    lng: 151.2313,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDszDT0VUQm8ivQAzXc8kG7AIbtjDjbZh4">
      <GoogleMap
        center={center}
        zoom={17}
        mapContainerStyle={{ height: "100vh", width: "100vw" }}
      >
        <InfoWindowF key={0} position={location}>
          <div>
            Hello from Christian
          </div>
        </InfoWindowF>
      </GoogleMap>
    </LoadScript>
  );
}

export default App;
