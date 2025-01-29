import WeatherData from "../interface/WeatherData";

const tempWeatherData: WeatherData = {
  weather: [
    {
      main: "Clouds",
      description: "scattered clouds",
      icon: "03d",
    },
  ],
  main: {
    temp: 10.53,
    feels_like: 9.49,
    temp_min: 9.78,
    temp_max: 11.25,
  },
  wind: {
    speed: 8.23,
  },
  name: "London",
};

export default tempWeatherData;
