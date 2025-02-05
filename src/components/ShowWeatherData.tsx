import WeatherData from "@/interface/WeatherData";

export default function ShowWeatherData({ data }: { data: WeatherData }) {
  console.log(data);

  return <div></div>;
}
