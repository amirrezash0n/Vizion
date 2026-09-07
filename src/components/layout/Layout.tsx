import { useState } from "react";
import { Outlet } from "react-router";
import Header from "./Header/Header";
import SidebarMobile from "./Sidebar/components/SidebarMobile";
import SidebarDesktop from "./Sidebar/components/SidebarDesktop";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);

  return (
    <div className="flex h-screen text-white bg-balticSea-300">
      {/* Sidebar Desktop */}
      <SidebarDesktop />

      {/* Sidebar Mobile */}
      <SidebarMobile
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={openSidebar} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
