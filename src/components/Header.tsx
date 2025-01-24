import { CloudSunIcon } from "lucide-react";

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
      <button onClick={toggleMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </div>
  );
}
