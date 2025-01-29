import ForecastData from "@/interface/ForecastData";

const tempForecastData: ForecastData = {
  list: [
    {
      dt: 1738162800,
      main: {
        temp: 8.31,
        feels_like: 7.39,
        temp_min: 8.22,
        temp_max: 8.31,
      },
      weather: [
        {
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      wind: {
        speed: 1.82,
      },
      dt_txt: "2025-01-29 15:00:00",
    },
    {
      dt: 1738173600,
      main: {
        temp: 7.96,
        feels_like: 6.57,
        temp_min: 7.26,
        temp_max: 7.96,
      },
      weather: [
        {
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      wind: {
        speed: 2.29,
      },
      dt_txt: "2025-01-29 18:00:00",
    },
    {
      dt: 1738184400,
      main: {
        temp: 7.1,
        feels_like: 4.67,
        temp_min: 6.5,
        temp_max: 7.1,
      },
      weather: [
        {
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      wind: {
        speed: 3.58,
      },
      dt_txt: "2025-01-29 21:00:00",
    },
  ],
};

export default tempForecastData;
