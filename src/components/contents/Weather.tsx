import WeatherDataProps from "@/interface/WeatherData";
import Position from "@/interface/Position";

import { useEffect, useState } from "react";

import tempWeatherData from "@/temp/tempWeatherData"; // TODO: Temporary only for development! Delete if no longer needed!

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    setWeatherData(tempWeatherData); // TODO: Delete if no longer needed!
  }, []);

  console.log(weatherData); // TODO: Delete if no longer needed!

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
