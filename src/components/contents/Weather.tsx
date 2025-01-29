import ForecastData from "@/interface/ForecastData";
import WeatherData from "@/interface/WeatherData";
import Position from "@/interface/Position";

import { GetForecastDataByCity, GetWeatherDataByCity } from "@/api/WeatherApi";
import { useEffect, useState } from "react";

import tempWeatherData from "@/temp/tempWeatherData"; // TODO: Temporary only for development!
import tempForecastData from "@/temp/tempForecastData"; // TODO: Temporary only for development!

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  const [position, setPosition] = useState<Position | null>(null);
  const [city, setCity] = useState("London");

  useEffect(() => {
    const fetchData = async () => {
      const weatherDataByCity = GetWeatherDataByCity(city);
      const forecastDataByCity = GetForecastDataByCity(city);

      setWeatherData(await weatherDataByCity);
      setForecastData(await forecastDataByCity);
    };

    //fetchData();
    setWeatherData(tempWeatherData); // TODO: Temporary only for development!
    setForecastData(tempForecastData); // TODO: Temporary only for development!
  }, []);

  //console.log(weatherData);
  console.log(forecastData);

  if (!weatherData) {
    return (
      <div className="throbber-container">
        <div className="throbber"></div>
        <span className="throbber-text">Loading...</span>
      </div>
    );
  }

  return <div></div>;
}
