import type { SidebarProps } from "../../../types";
import navItems from "../../../constants/navItems";
import SidebarLink from "./components/SidebarLink";
import SidebarTitle from "./components/SidebarTitle";
import SupportCard from "./components/SupportCard";

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <div className="h-screen w-64 lg:w-75 px-4 lg:pr-8.75 pt-4 lg:pt-6.25 flex flex-col text-white bg-balticSea-300">
      <SidebarTitle onMenuClick={onNavigate} />

      <nav className="flex-1 space-y-2 mt-6">
        {navItems.map((item) => (
          <SidebarLink key={item.path} item={item} onNavigate={onNavigate} />
        ))}
      </nav>

      <SupportCard />
    </div>
  );
}
