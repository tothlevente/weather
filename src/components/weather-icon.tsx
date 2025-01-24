export default function WeatherIcon({ icon }: { icon: string }) {
  const size = "120px";
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={icon}
      width={size}
      height={size}
    />
  );
}
