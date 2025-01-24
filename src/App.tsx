import { useState } from "react";

import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
      />
      <CurrentWeather />
    </div>
  );
}
