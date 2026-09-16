import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router";
import useAuthStore from "../../../../store/authStore";

export default function UserInfo() {
  const user = useAuthStore((state) => state.user);
  return (
    <NavLink
      to="/profile"
      className="hover:bg-opacity-80 flex h-9 cursor-pointer items-center gap-3 rounded-xl bg-text-primary px-2 py-1.5 transition-colors lg:h-10 lg:gap-5 lg:px-2.5"
    >
      <div className="flex items-center gap-2 lg:gap-2.5">
        <img
          className="size-6 rounded-full object-cover lg:size-7"
          src={user?.avatar}
          alt={user?.fullName}
        />
        <span className="hidden font-morabbaLight text-xs sm:block lg:text-sm">
          {user?.fullName}
        </span>
      </div>
      <IoIosArrowBack size={18} className="hidden text-gray-400 sm:block" />
    </NavLink>
  );
}
