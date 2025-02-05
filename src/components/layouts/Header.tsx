import { CloudSunIcon } from "lucide-react";
import { ModeToggle } from "../ModeToggle";

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
