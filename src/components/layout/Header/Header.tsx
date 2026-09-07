import UserInfo from "./components/UserInfo";
import NotificationButton from "./components/NotificationButton";
import DateTimeDisplay from "./components/DateTimeDisplay";
import LogoutButton from "./components/LogoutButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-white bg-balticSea-300 pt-7 pl-5">
      <UserInfo />
      <div className="flex items-center gap-1">
        <NotificationButton />
        <DateTimeDisplay />
        <LogoutButton />
      </div>
    </header>
  );
}
