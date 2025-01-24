import Header from "./components/contents/Header";
import { ThemeProvider } from "./components/theme-provider";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <Header />
    </ThemeProvider>
  );
}
