import { FaBell, FaUserCircle } from "react-icons/fa";
import { useLocation } from "react-router";
import pageTitles from "../../constants/pageTitles";
import Button from "../common/Button";

export default function Header() {
  const location = useLocation();
  const pageTitle = pageTitles[location.pathname];
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-200">
      <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>

      <div className="flex items-center gap-4 text-gray-600">
        <Button className="relative hover:text-gray-800 transition-colors">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </Button>
        <Button className="flex items-center gap-2 hover:text-gray-800 transition-colors">
          <FaUserCircle size={24} />
          <span className="text-sm font-medium">امیررضا</span>
        </Button>
      </div>
    </header>
  );
}
