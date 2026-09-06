import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-md">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4">
          <Header />
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
