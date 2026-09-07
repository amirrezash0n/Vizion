import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router";

function UserInfo() {
  return (
    <NavLink
      to="/profile"
      className="flex items-center gap-5 py-1.5 px-2.5 h-10 bg-text-primary rounded-xl cursor-pointer hover:bg-opacity-80 transition-colors"
    >
      <div className="flex items-center gap-2.5">
        <img
          className="size-7 rounded-full object-cover"
          src="./images/panel-Image.jpg"
          alt="پروفایل کاربر"
        />
        <span className="font-morabbaLight text-sm">امیررضا شورورزی</span>
      </div>
      <IoIosArrowBack size={20} className="text-gray-400" />
    </NavLink>
  );
}

export default UserInfo;
