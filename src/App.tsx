import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";
import Weather from "./components/contents/Weather";

import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="wrapper">
        <Header />
        <div className="container">
          <Weather />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
