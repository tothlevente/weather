import { atom } from "jotai";
import UnitProps from "../interface/UnitProps";
import PositionProps from "../interface/PositionProps";

export const weatherDataByCity = atom(async (city: string, unit: UnitProps) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_MAP_API
      }`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

export const weatherDataByPosition = atom(async (position: PositionProps, unit: UnitProps) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${
        position.longitude
      }&units=${unit}&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP_API}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});
