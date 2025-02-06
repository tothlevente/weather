import { CloudSunIcon } from "lucide-react";
import { ModeToggle } from "../ModeToggle";
import { LocateUser } from "../LocateUser";

import Position from "@/interface/Position";

export default function Header({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
}) {
  return (
    <div className="flex justify-between items-center m-5">
      <div className="flex flex-nowrap flex-row justify-center">
        <CloudSunIcon className="dark:text-shui-amber-500" />
        <p className="ml-1 font-bold">Weather</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <LocateUser
          position={position}
          setPosition={setPosition}
        />
        <ModeToggle />
      </div>
    </div>
  );
}
