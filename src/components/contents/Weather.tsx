import WeatherDataProps from "@/interface/WeatherData";
import Position from "@/interface/Position";

import { useEffect, useState } from "react";
import { GetWeatherDataByCity } from "@/api/WeatherApi";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const weatherDataByCity = GetWeatherDataByCity("London");
      setWeatherData(await weatherDataByCity);
    };

    fetchData();
  }, []);

  console.log(weatherData);

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
