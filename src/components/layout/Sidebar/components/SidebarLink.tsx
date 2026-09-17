import { NavLink } from "react-router";
import type { NavItem } from "../../../../types/index.types";

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
        `flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 lg:px-4 lg:py-3 ${
          isActive
            ? "hover:bg-white-10 bg-white-5 text-primary"
            : "text-white/70 hover:bg-white-5 hover:text-white"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <item.icon
            className={`size-5 transition-colors duration-200 ${
              isActive ? "text-primary" : "text-white/50"
            }`}
          />
          <span className="text-sm leading-none lg:text-base">{item.name}</span>
        </>
      )}
    </NavLink>
  );
}
