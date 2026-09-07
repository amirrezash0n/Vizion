import { NavLink } from "react-router";
import navItems from "../../constants/navItems";

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-center">Vizion</h2>
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
