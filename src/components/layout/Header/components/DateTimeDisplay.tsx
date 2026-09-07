import { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";

function DateTimeDisplay() {
  const [dateTime, setDateTime] = useState({
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

  return (
    <div className="flex items-center gap-x-4 py-2.5 px-3 ml-1 h-10 bg-text-primary rounded-xl">
      <FiCalendar size={20} className="text-gray-400" />
      <div className="flex items-center gap-6 font-yekanMedium font-black whitespace-nowrap">
        <span>{dateTime.time}</span>
        <span>{dateTime.date}</span>
      </div>
    </div>
  );
}

export default DateTimeDisplay;
