import { NAV_ITEMS } from "../../../constants/navItems";
import SidebarLink from "./components/SidebarLink";
import SidebarTitle from "./components/SidebarTitle";
import SupportCard from "./components/SupportCard";

export interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <div className="flex h-screen w-64 flex-col bg-balticSea-300 px-4 pt-4 text-white lg:w-75 lg:pt-6.25 lg:pr-8.75">
      <SidebarTitle onMenuClick={onNavigate} />

      <nav className="mt-6 flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <SidebarLink key={item.path} item={item} onNavigate={onNavigate} />
        ))}
      </nav>

      <SupportCard />
    </div>
  );
}
