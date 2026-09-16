import { Outlet } from "react-router";
import Header from "./Header/Header";
import SidebarMobile from "./Sidebar/components/SidebarMobile";
import SidebarDesktop from "./Sidebar/components/SidebarDesktop";
import useSidebar from "../../hooks/useSidebar";

export default function Layout() {
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebar();

  return (
    <div className="flex h-screen bg-balticSea-300 text-white">
      {/* Sidebar Desktop */}
      <SidebarDesktop />

      {/* Sidebar Mobile */}
      <SidebarMobile
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header onMenuClick={openSidebar} />
        <main className="mx-4 mt-4 mb-4 flex-1 overflow-y-auto rounded-3xl bg-white p-4 sm:mx-5 sm:mt-5 sm:mb-5 sm:p-5 lg:mx-5 lg:mt-5 lg:mb-5 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
