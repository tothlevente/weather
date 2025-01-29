import Position from "@/interface/Position";

import { Units } from "@/interface/Units";

const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API;

export async function GetWeatherDataByCity(
  city: string,
  unit: Units = Units.Metric
) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

export async function GetWeatherDataByPosition(
  position: Position,
  unit: Units = Units.Metric
) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&units=${unit}&appid=${apiKey}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
