import { atom } from "jotai";

import Position from "../interface/Position";
import Unit from "../interface/Unit";

/**
 * Fetches weather data for a given city and unit from the OpenWeatherMap API.
 *
 * @param city - The name of the city to fetch weather data for.
 * @param unit - The unit of measurement for the weather data (e.g., metric, imperial).
 * @returns A promise that resolves to the weather data for the specified city.
 * @throws Will log an error message to the console if the fetch operation fails.
 */
export const weatherDataByCity = atom(async (city: string, unit: Unit) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${process.env.VITE_OPEN_WEATHER_MAP_API}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

/**
 * Fetches weather data based on the provided geographical position and unit.
 *
 * @param position - An object containing the latitude and longitude of the desired location.
 * @param unit - The unit of measurement for the weather data (e.g., metric, imperial).
 * @returns A promise that resolves to the weather data for the specified position and unit.
 * @throws Will log an error message to the console if the fetch operation fails.
 */
export const weatherDataByPosition = atom(async (position: Position, unit: Unit) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&units=${unit}&appid=${process.env.VITE_OPEN_WEATHER_MAP_API}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});
