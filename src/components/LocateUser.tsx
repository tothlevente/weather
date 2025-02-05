import { Loader2, LocateFixedIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

import Position from "@/interface/Position";

export function LocateUser({
  position,
  setPosition,
}: {
  position: Position;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
}) {
  const [locationRequested, setLocationRequested] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { toast } = useToast();

  const handleClick = () => {
    setLocationRequested(true);
    setLoading(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: error.message,
          });
          setError(true);
          setLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Geolocation is not supported by this browser.",
      });
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (locationRequested && !position && !error) {
      handleClick();
    }
  }, [locationRequested, position, error]);

  return (
    <Button
      size="icon"
      variant="outline"
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : <LocateFixedIcon />}
    </Button>
  );
}
