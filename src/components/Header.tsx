import { CloudSunIcon, MoonIcon, SunIcon } from "lucide-react";

export default function Header({
  isDarkMode,
  toggleMode,
}: {
  isDarkMode: boolean;
  toggleMode: () => void;
}) {
  return (
    <div className="header">
      <div className="header-title">
        <CloudSunIcon className="header-icon" />
        <p>Weather</p>
      </div>
      <button
        className="header-toggle"
        onClick={toggleMode}
      >
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  );
}
