import { useState, useEffect } from "react";

import WeatherDataProps from "../interface/WeatherDataProps";

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch(
      //     "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=YOUR_API_KEY"
      //   );
      //   const data = await response.json();
      //   setWeatherData(data);
      // } catch (error) {
      //   console.error("Error fetching weather data:", error);
      // }
    };

    fetchData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-container">
      <h1>Weather in {weatherData.name}</h1>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Feels like: {weatherData.main.feels_like}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>
        {weatherData.weather[0].main}: {weatherData.weather[0].description}
      </p>
    </div>
  );
}
