export default function WeatherIcon({
  icon,
  size = "100px",
}: {
  icon: string;
  size?: string;
}) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={icon}
      width={size}
      height={size}
    />
  );
}
