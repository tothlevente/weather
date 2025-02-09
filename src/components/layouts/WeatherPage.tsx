import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { GetWeatherDataByCity, GetWeatherDataByPosition } from "@/api/WeatherApi";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import WeatherData from "@/interface/WeatherData";
import Position from "@/interface/Position";
import WeatherIcon from "../WeatherIcon";
import React from "react";

const WeatherPage = ({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
}) => {
  const [city, setCity] = useState("Wellington");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  const fetchWeatherData = async () => {
    setLoading(true);

    try {
      if (position) {
        const data = await GetWeatherDataByPosition(position);
        setWeatherData(data);
        setCity(data.name);
      } else {
        const data = await GetWeatherDataByCity(city);
        setWeatherData(data);
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: err.message,
      });
    } finally {
      setLoading(false);
      setPosition(null);
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
    <div className="mx-auto p-4">
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
      {weatherData && (
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="text-[50px] font-bold">
                <span className="text-[70px]">{weatherData.main.temp}°C</span>
                <div className="grid justify-items-start justify-between items-center">
                  <span>
                    {weatherData.name}, {weatherData.sys.country}
                  </span>
                  <WeatherIcon icon={weatherData.weather[0].icon} />
                </div>
              </div>
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
