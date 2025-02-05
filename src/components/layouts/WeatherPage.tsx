import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { GetWeatherDataByCity, GetWeatherDataByPosition } from "@/api/WeatherApi";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

import WeatherData from "@/interface/WeatherData";
import Position from "@/interface/Position";

const WeatherPage = ({ position }: { position: Position }) => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      if (position) {
        const data = await GetWeatherDataByPosition(position);
        setWeatherData(data);
      } else {
        const data = await GetWeatherDataByCity(city);
        setWeatherData(data);
      }
    } catch (err: any) {
      console.error("Error fetching weather data:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, [position]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="container mx-auto p-4">
      <form
        onSubmit={handleSubmit}
        className="mb-4 flex gap-2"
      >
        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Weather"}
        </Button>
      </form>
      {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
      {weatherData && (
        <Card>
          <CardHeader>
            <CardTitle>
              {weatherData.name}, {weatherData.sys.country}
            </CardTitle>
            <CardDescription>{weatherData.weather[0].description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Temperature: {weatherData.main.temp}°C</p>
            <p>Feels Like: {weatherData.main.feels_like}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Pressure: {weatherData.main.pressure} hPa</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WeatherPage;
