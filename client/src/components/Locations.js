import React, { useState, useEffect } from "react";
import LocationButton from "./LocationButton";
import LocationDropdown from "./LocationDropdown";
import { getUser, setUser } from "../utils/localstorage";

function Locations({
  handleLocationClick,
  selectedLocation,
  setSelectedLocation,
}) {
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    let user = getUser();
    setLocations(user.locations);
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const addLocation = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
    let user = getUser();
    user.locations.push(location);
    setUser(user);
    setLocations(user.locations);
  };

  return (
    <div className="flex flex-wrap">
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
