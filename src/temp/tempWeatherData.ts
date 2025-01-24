import WeatherDataProps from "../interface/WeatherData";

const tempWeatherData: WeatherDataProps = {
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
    pressure: 996,
    humidity: 71,
  },
  wind: {
    speed: 8.23,
    deg: 230,
    gust: 15.95,
  },
  name: "London",
};

export default tempWeatherData;
