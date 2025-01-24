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
        <CloudSunIcon />
        <p>Weather</p>
      </div>
      <button
        className="header-toggle"
        onClick={toggleMode}
      >
        {isDarkMode ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
      </button>
    </div>
  );
}
