import { Link, NavLink } from "react-router";
import navItems from "../../constants/navItems";

export default function Sidebar() {
  return (
    <div className="h-screen w-75 pr-8.75 p-4 flex flex-col">
      <Link
        to="/"
        className="text-text-22 mb-6.25 font-morabbaBold font-extrabold text-center text-primary"
      >
        Vizion
      </Link>
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-blue-600" : "hover:bg-gray-700"}`
              }
            >
              <span>
                <item.icon className="size-5" />
              </span>
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
