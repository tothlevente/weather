import WeatherPage from "./components/layouts/WeatherPage";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Position from "./interface/Position";

import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

export default function App() {
  const [position, setPosition] = useState<Position | null>(null);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="wrapper">
        <Header
          position={position!}
          setPosition={setPosition}
        />
        <div className="container">
          <WeatherPage />
        </div>
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
