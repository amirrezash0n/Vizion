import { NavLink } from "react-router";
import type { NavItem } from "../../../../types";

interface SidebarLinkProps {
  item: NavItem;
  onNavigate?: () => void;
}

export default function SidebarLink({ item, onNavigate }: SidebarLinkProps) {
  return (
    <NavLink
      to={item.path}
      onClick={onNavigate}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-white-5 text-primary hover:bg-white-10"
            : "text-white/70 hover:text-white hover:bg-white-5"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span className="flex items-center">
            <item.icon
              className={`size-5 transition-colors duration-200 ${
                isActive ? "text-primary" : "text-white/50"
              }`}
            />
          </span>
          <span className="text-sm lg:text-base leading-none">{item.name}</span>
        </>
      )}
    </NavLink>
  );
}
