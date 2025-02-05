import { CloudSunIcon } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { LocateUser } from "../LocateUser";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex flex-nowrap flex-row justify-center">
        <CloudSunIcon />
        <p className="ml-1 font-bold">Weather</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <LocateUser />
        <ModeToggle />
      </div>
    </div>
  );
}
