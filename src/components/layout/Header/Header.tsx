import { FaBars } from "react-icons/fa";
import type { HeaderProps } from "../../../types";
import UserInfo from "./components/UserInfo";
import NotificationButton from "./components/NotificationButton";
import DateTimeDisplay from "./components/DateTimeDisplay";
import LogoutButton from "./components/LogoutButton";
import Button from "../../common/Button/Button";

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-balticSea-300 pt-3 pr-3 pl-3 text-white sm:pt-4 sm:pr-4 sm:pl-4 lg:pt-7 lg:pr-5 lg:pl-5">
      <div className="flex items-center gap-2 sm:gap-3">
        <Button
          onClick={onMenuClick}
          variant="ghost"
          size="icon"
          className="lg:hidden"
        >
          <FaBars size={20} />
        </Button>
        <UserInfo />
      </div>

      <div className="flex items-center gap-1 lg:gap-2">
        <NotificationButton />
        <div className="hidden md:block">
          <DateTimeDisplay />
        </div>
        <LogoutButton />
      </div>
    </header>
  );
}
