import React from "react";
import { Marker } from "@react-google-maps/api";
import image from "../assets/img/elon.jpg";

const ProfileMarker = ({ lat, lng }) => {
  const icon = {
    url: image,
    scaledSize: new window.google.maps.Size(40, 40),
    origin: new window.google.maps.Point(0, 0),
    anchor: new window.google.maps.Point(20, 20),
    borderRadius: "50%",
  };

  return <Marker position={{ lat, lng }} icon={icon} />;
};

export default ProfileMarker;