import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, InfoWindowF } from "@react-google-maps/api";
import { API_KEY } from "../config";
import image from "../assets/img/elon.jpg";
import image1 from "../assets/img/friend1.png";
import image2 from "../assets/img/friend2.png";
import image3 from "../assets/img/friend3.png";
import image4 from "../assets/img/friend4.png";
import image5 from "../assets/img/friend5.png";
import image6 from "../assets/img/friend6.png";

const MapView = () => {
  const [locations, setLocations] = useState([]);

  const center = {
    lat: -33.9185,
    lng: 151.2345,
  };

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = () => {
    const locations = [
      { id: 1, lat: -33.9173, lng: 151.2315, name: "You", imgSrc: image, description: "in 2521 tut", from: "10:00", to: "11:00" },
      { id: 2, lat: -33.9169, lng: 151.2298, name: "Sally", imgSrc: image1, description: "Lunch", from: "12:30", to: "13:00" },
      { id: 3, lat: -33.9173, lng: 151.2335, name: "Rebecca", imgSrc: image2, description: "Help session", from: "11:00", to: "12:00" },
      { id: 4, lat: -33.9193, lng: 151.2285, name: "Jack", imgSrc: image3, description: "Chillin", from: "12:30", to: "13:00" },
      { id: 5, lat: -33.9193, lng: 151.2298, name: "Helen", imgSrc: image4, description: "Studying", from: "13:30", to: "15:30" },
      { id: 6, lat: -33.9193, lng: 151.2317, name: "Sam", imgSrc: image5, description: "Drinking", from: "13:00", to: "14:30" },
      { id: 7, lat: -33.9193, lng: 151.2339, name: "Jennie", imgSrc: image6, description: "Grinding Exam", from: "12:30", to: "15:30" },
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