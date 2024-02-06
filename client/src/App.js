// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Forecast from "./components/Forecast";
import Locations from "./components/Locations";

const App = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [forecastData, setForecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const location = localStorage.getItem("selectedLocation");
    if (location) {
      setSelectedLocation(JSON.parse(location));
    }
  }, []);

  const fetchForcast = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${selectedLocation.name}&days=4`
      );
      setForecastData(data);
    } catch (error) {
      console.error("Error fetching forecast data", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedLocation) {
      fetchForcast();
    }
  }, [selectedLocation]);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
    localStorage.setItem("selectedLocation", JSON.stringify(location));
  };

  return (
    <>
      <nav className="flex items-center justify-center bg-teal-500 p-6">
        <div className="text-center text-white text-3xl font-semibold">
          Weather Forecasting
        </div>
      </nav>
      {isLoading && <div className="text-center">Loading...</div>}

      <div className="container mx-auto p-4">
        <Locations
          handleLocationClick={handleLocationClick}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <Forecast forecastData={forecastData} />
      </div>
    </>
  );
};

export default App;
