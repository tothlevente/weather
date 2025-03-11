import { LocateUser } from "../weather/LocateUser";
import { ModeToggle } from "../theme/ModeToggle";
import { CloudSunIcon } from "lucide-react";

import Position from "@/interface/Position";

interface Props {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
}

export default function Header({ position, setPosition }: Props) {
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
