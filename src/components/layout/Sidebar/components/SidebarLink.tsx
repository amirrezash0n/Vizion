import { NavLink } from "react-router";

interface NavItem {
  path: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SidebarLinkProps {
  item: NavItem;
}
export default function SidebarLink({ item }: SidebarLinkProps) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-white-5 text-primary hover:bg-white-10"
            : "text-white/70 hover:text-white hover:bg-white-5"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span>
            <item.icon
              className={`size-5 transition-colors duration-200 ${
                isActive ? "text-primary" : "text-white/50"
              }`}
            />
          </span>
          <span>{item.name}</span>
        </>
      )}
    </NavLink>
  );
}
