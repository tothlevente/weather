import WeatherPage from "./components/weather/WeatherPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Position from "./interface/Position";

import { ThemeProvider } from "./components/theme/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

export default function App() {
  const [position, setPosition] = useState<Position | null>(null);

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="xs:flex xs:flex-col xs:min-h-screen">
        <Header
          position={position!}
          setPosition={setPosition}
        />
        <div className="xs:flex-1">
          <WeatherPage
            position={position!}
            setPosition={setPosition}
          />
        </div>
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
