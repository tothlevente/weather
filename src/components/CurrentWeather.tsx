import { useState, useEffect } from "react";

import WeatherDataProps from "../interface/WeatherDataProps";
import tempWeatherData from "../data/tempWeatherData";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       "https://api.openweathermap.org/data/2.5/weather?q=Budapest&units=metric&appid="
    //     );
    //     const data = await response.json();
    //     console.log("data");
    //     console.log(data);
    //     setWeatherData(data);
    //   } catch (error) {
    //     console.error("Error fetching weather data:", error);
    //   }
    // };
    // fetchData();

    setWeatherData(tempWeatherData);
  }, []);

  if (!weatherData) {
    return (
      <div className="loading-container">
        <div className="throbber"></div>
        <span className="loading-text">Loading...</span>
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
          <span>Temperature (maximum): {weatherData.main.temp_max}°C</span>
          <span>Temperature (minimum): {weatherData.main.temp_min}°C</span>
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
