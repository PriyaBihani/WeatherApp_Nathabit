// src/components/LocationButton.js
import React from "react";

const LocationButton = ({ location, onClick, isActive }) => {
  return (
    <button
      className={`p-2 mx-1 ${
        isActive ? "bg-blue-500 text-white" : "bg-gray-300"
      } rounded`}
      onClick={() => onClick(location)}
    >
      {location.name}
    </button>
  );
};

export default LocationButton;
