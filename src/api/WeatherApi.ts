import Position from "@/interface/Position";

import { Units } from "@/interface/Units";

/**
 * The API key for accessing the OpenWeatherMap API.
 * This key is retrieved from the environment variables.
 *
 * @constant {string} apiKey - The OpenWeatherMap API key.
 */
const apiKey = import.meta.env.VITE_OPEN_WEATHER_MAP_API;

/**
 * Fetches weather data for a specified city.
 *
 * @param city - The name of the city to fetch weather data for.
 * @param unit - The unit of measurement for the weather data (default is Metric).
 * @returns A promise that resolves to the weather data for the specified city.
 * @throws Will log an error message if the fetch operation fails.
 */
export async function GetWeatherDataByCity(
  city: string,
  unit: Units = Units.Metric
) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

/**
 * Fetches weather data for a given geographical position.
 *
 * @param position - The geographical position (latitude and longitude).
 * @param unit - The unit of measurement for temperature (default is Metric).
 * @returns The weather data as a JSON object.
 * @throws Will log an error message if the fetch operation fails.
 */
export async function GetWeatherDataByPosition(
  position: Position,
  unit: Units = Units.Metric
) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&units=${unit}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

/**
 * Fetches the weather forecast data for a given city.
 *
 * @param city - The name of the city to fetch the forecast for.
 * @param unit - The unit of measurement for the forecast data (default is Metric).
 * @returns A promise that resolves to the forecast data.
 * @throws Will log an error message if the fetch operation fails.
 */
export async function GetForecastDataByCity(
  city: string,
  unit: Units = Units.Metric
) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
}

/**
 * Fetches the weather forecast data for a given geographical position.
 *
 * @param position - The geographical position (latitude and longitude).
 * @param unit - The unit of measurement for temperature (default is Metric).
 * @returns The weather forecast data as a JSON object.
 * @throws Will log an error message if the fetch operation fails.
 */
export async function GetForecastDataByPosition(
  position: Position,
  unit: Units = Units.Metric
) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&units=${unit}&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}
