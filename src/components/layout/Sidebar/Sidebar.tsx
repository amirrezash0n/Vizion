import navItems from "../../../constants/navItems";
import SupportCard from "./components/SupportCard";
import SidebarLink from "./components/SidebarLink";
import SidebarTitle from "./components/SidebarTitle";

export default function Sidebar() {
  return (
    <div className="h-screen w-75 px-8.75 pt-6.25 flex flex-col text-white">
      <SidebarTitle />
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          return <SidebarLink key={item.path} item={item} />;
        })}
      </nav>
      <SupportCard />
    </div>
  );
}
