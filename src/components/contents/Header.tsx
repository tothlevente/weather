import { CloudSunIcon } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <CloudSunIcon className="header-icon" />
        <p>Weather</p>
      </div>
      <ModeToggle />
    </div>
  );
}
