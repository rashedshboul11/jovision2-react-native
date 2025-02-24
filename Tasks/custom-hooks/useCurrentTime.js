import { useEffect, useState } from "react";

export default function useCurrentTime() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString()); // update every second
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return time;
}
