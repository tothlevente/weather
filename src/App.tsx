import { useState, useEffect } from "react";

import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "dark-mode" : ""}`}>
      <Header
        isDarkMode={isDarkMode}
        toggleMode={toggleMode}
      />
      <CurrentWeather />
    </div>
  );
}
