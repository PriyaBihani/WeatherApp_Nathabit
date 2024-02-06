import React, { useState, useEffect } from "react";
import LocationButton from "./LocationButton";
import LocationDropdown from "./LocationDropdown";

function Locations({
  handleLocationClick,
  selectedLocation,
  setSelectedLocation,
}) {
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      user = JSON.stringify({ locations: [] });
      localStorage.setItem("user", user);
    }
    user = JSON.parse(user);
    setLocations(user.locations);
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const addLocation = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    user.locations.push(location);
    localStorage.setItem("user", JSON.stringify(user));
    setLocations(user.locations);
  };

  return (
    <div className="flex flex-wrap">
      {console.log(selectedLocation)}
      {locations.map((location) => (
        <LocationButton
          key={location._id}
          location={location}
          onClick={handleLocationClick}
          isActive={selectedLocation._id === location._id}
        />
      ))}
      <div className="relative">
        <button
          className="p-2 mx-1 bg-teal-500 text-white rounded"
          onClick={handleDropdownToggle}
        >
          Add Cities
        </button>
        {showDropdown && (
          <LocationDropdown locations={locations} addLocation={addLocation} />
        )}
      </div>
    </div>
  );
}

export default Locations;
