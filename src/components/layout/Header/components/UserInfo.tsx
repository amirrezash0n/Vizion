import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router";

export default function UserInfo() {
  return (
    <NavLink
      to="/profile"
      className="flex items-center gap-3 lg:gap-5 py-1.5 px-2 lg:px-2.5 h-9 lg:h-10 bg-text-primary rounded-xl cursor-pointer hover:bg-opacity-80 transition-colors"
    >
      <div className="flex items-center gap-2 lg:gap-2.5">
        <img
          className="size-6 lg:size-7 rounded-full object-cover"
          src="./images/panel-Image.jpg"
          alt="پروفایل کاربر"
        />
        <span className="font-morabbaLight text-xs lg:text-sm hidden sm:block">
          امیررضا شورورزی
        </span>
      </div>
      <IoIosArrowBack size={18} className="text-gray-400 hidden sm:block" />
    </NavLink>
  );
}
