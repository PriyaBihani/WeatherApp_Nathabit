// src/components/LocationDropdown.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationDropdown = ({ addLocation }) => {
  const [locations, setLocations] = useState([]);
  const fetchLocations = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/api/locations");
      setLocations(data.data);
    } catch (error) {
      console.error("Error fetching locations", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded overflow-hidden shadow-md">
      {locations.map((location) => (
        <button
          key={location._id}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
          onClick={() => addLocation(location)}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationDropdown;
