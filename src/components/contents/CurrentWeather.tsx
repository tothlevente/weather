import { useState, useEffect } from "react";

import WeatherData from "../../interface/WeatherData";

import WeatherIcon from "../weather-icon";
import Position from "@/interface/Position";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    const success = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      setPosition({ latitude, longitude });
    };

    const error = (err: GeolocationPositionError) => {
      console.error(`Error getting location: ${err.message}`);

      return <div>Error getting location:</div>;
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!position) {
    return (
      <div className="center-container">
        <span className="center-container-text">
          Geolocation is not supported by this browser...
        </span>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="center-container">
        <div className="throbber"></div>
        <span className="center-container-text">Loading...</span>
      </div>
    );
  }

  return (
    <div className="weather-container">
      <div>
        <div className="weather-header">
          <span className="weather-title">{weatherData.main.temp}°C</span>
          <span className="weather-area">{weatherData.name}</span>
        </div>
        <div className="weather-data">
          <span>Temperature: {weatherData.main.temp}°C</span>
          <span>Feels like: {weatherData.main.feels_like}°C</span>
          <span>Maximum: {weatherData.main.temp_max}°C</span>
          <span>Minimum: {weatherData.main.temp_min}°C</span>
          <span className="separator"></span>
          <span>Pressure: {weatherData.main.pressure}</span>
          <span>Humidity: {weatherData.main.humidity}%</span>
          <span>
            {weatherData.weather[0].main}: {weatherData.weather[0].description}
          </span>
        </div>
      </div>
      <div>
        <WeatherIcon icon={weatherData.weather[0].icon} />
      </div>
    </div>
  );
}
