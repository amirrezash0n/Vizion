import { FiCalendar } from "react-icons/fi";
import useDateTime from "../../../../hooks/useDateTime";

function DateTimeDisplay() {
  const { time, date } = useDateTime();
  return (
    <div className="flex items-center gap-x-3 lg:gap-x-4 py-2 lg:py-2.5 px-2.5 lg:px-3 ml-1 h-9 lg:h-10 bg-text-primary rounded-xl">
      <FiCalendar size={18} className="text-gray-400" />
      <div className="flex items-center gap-3 lg:gap-6 font-yekanMedium font-black whitespace-nowrap text-xs lg:text-sm">
        <span>{time}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default DateTimeDisplay;
