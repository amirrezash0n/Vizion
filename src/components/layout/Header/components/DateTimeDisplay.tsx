import { FiCalendar } from "react-icons/fi";
import useDateTime from "../../../../hooks/useDateTime";

function DateTimeDisplay() {
  const { time, date } = useDateTime();
  return (
    <div className="ml-1 flex h-9 items-center gap-x-3 rounded-xl bg-text-primary px-2.5 py-2 lg:h-10 lg:gap-x-4 lg:px-3 lg:py-2.5">
      <FiCalendar size={18} className="text-gray-400" />
      <div className="flex items-center gap-3 font-yekanMedium text-xs font-black whitespace-nowrap lg:gap-6 lg:text-sm">
        <span>{time}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

export default DateTimeDisplay;
