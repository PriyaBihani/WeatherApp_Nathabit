// src/components/Forecast.js
import React from "react";
import { formatDate, isToday } from "../utils/date";

const Forecast = ({ forecastData }) => {
  return (
    <div className="">
      {forecastData && (
        <h2 className="text-2xl font-bold text-center mb-4">
          Weather Forecast
        </h2>
      )}
      <div className="flex flex-wrap justify-center">
        {forecastData?.forecast?.forecastday.map((day, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-md rounded-lg p-6 m-2"
          >
            <div className="flex justify-between items-center">
              <div className="text-xl text-bold">
                <h2>{formatDate(day.date)} </h2>
                {isToday(day.date) && <h3 className="text-sm">Today</h3>}{" "}
              </div>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </div>

            <p className="mt-2 text-center text-bold">
              {day.day.condition.text}
            </p>
            <div className="mt-4">
              <p>High: {day.day.maxtemp_c}°C</p>
              <p>Low: {day.day.mintemp_c}°C</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
