// src/components/layout/Header.tsx
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-200">
      {/* سمت راست: عنوان صفحه (میتونی بعداً با useLocation داینامیک کنی) */}
      <h1 className="text-xl font-semibold text-gray-800">پنل مدیریت</h1>

      {/* سمت چپ: آیکون‌های اعلان و پروفایل */}
      <div className="flex items-center gap-4 text-gray-600">
        <button className="relative hover:text-gray-800 transition-colors">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>
        <button className="flex items-center gap-2 hover:text-gray-800 transition-colors">
          <FaUserCircle size={24} />
          <span className="text-sm font-medium">امیررضا</span>
        </button>
      </div>
    </header>
  );
}
