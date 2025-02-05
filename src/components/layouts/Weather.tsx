import {
  GetForecastDataByCity,
  GetForecastDataByPosition,
  GetWeatherDataByCity,
} from "@/api/WeatherApi";

import { useEffect, useState } from "react";

import ForecastData from "@/interface/ForecastData";
import ShowForecastData from "../ShowForecastData";
import WeatherData from "@/interface/WeatherData";
import ShowWeatherData from "../ShowWeatherData";
import Position from "@/interface/Position";

import tempWeatherData from "@/temp/tempWeatherData"; // TODO: Temporary only for development!
import tempForecastData from "@/temp/tempForecastData"; // TODO: Temporary only for development!

export default function Weather({
  city,
  position,
}: {
  city: string;
  position: Position;
}) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let weatherDataByCity, forecastDataByCity;
      let weatherDataByPosition, forecastDataByPosition;

      if (position) {
        weatherDataByPosition = GetForecastDataByPosition(position);
        forecastDataByPosition = GetForecastDataByPosition(position);

        setWeatherData(await weatherDataByPosition);
        setForecastData(await forecastDataByPosition);
      } else if (city) {
        weatherDataByCity = GetWeatherDataByCity(city);
        forecastDataByCity = GetForecastDataByCity(city);

        setWeatherData(await weatherDataByCity);
        setForecastData(await forecastDataByCity);
      } else {
        console.error(
          "It is not possible to determine the location level based on position or location name!"
        );
      }
    };

    //fetchData(); // TODO: Temporary only for development!
    setWeatherData(tempWeatherData); // TODO: Temporary only for development!
    setForecastData(tempForecastData); // TODO: Temporary only for development!
  }, []);

  if (!weatherData) {
    return (
      <div className="throbber-container">
        <div className="throbber"></div>
        <span className="throbber-text">Loading...</span>
      </div>
    );
  }

  return (
    <div className="show-data">
      <ShowWeatherData data={weatherData} />
      <ShowForecastData data={forecastData!} />
    </div>
  );
}
