export default interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: [
    {
      description: string;
      icon: string; // You might use this for weather icons
    }
  ];
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}
