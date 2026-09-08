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
        <main className="flex-1 overflow-y-auto p-4 sm:p-5 lg:p-6 mt-4 sm:mt-5 lg:mt-5 mb-4 sm:mb-5 lg:mb-5 mx-4 sm:mx-5 lg:mx-5 bg-white rounded-3xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
