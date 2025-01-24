import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WeatherDataProps from "@/interface/WeatherData";
import Position from "@/interface/Position";

import { useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [position, setPosition] = useState<Position | null>(null);

  if (!weatherData) {
    return (
      <div className="throbber-container">
        <div className="throbber"></div>
        <span className="throbber-text">Loading...</span>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
