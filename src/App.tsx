import Weather from "./components/layouts/Weather";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Position from "./interface/Position";

import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";

export default function App() {
  const [position, setPosition] = useState<Position | null>(null);
  const [city, setCity] = useState("London");

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
          <Weather
            position={position!}
            city={city}
          />
        </div>
        <Toaster />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
