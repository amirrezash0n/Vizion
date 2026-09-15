import { useEffect, useState } from "react";

interface DateTime {
  date: string;
  time: string;
}

function useDateTime(): DateTime {
  const [dateTime, setDateTime] = useState<DateTime>({
    date: "",
    time: "",
  });

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      setDateTime({
        date: now.toLocaleDateString("fa-IR", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        time: now.toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    }
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);
  return dateTime;
}

export default useDateTime;
