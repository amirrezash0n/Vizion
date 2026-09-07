// src/pages/Dashboard/Dashboard.tsx
import { FaUsers, FaShoppingCart, FaDollarSign, FaEye } from "react-icons/fa";

export default function Dashboard() {
  // داده‌های ساختگی برای کارت‌ها
  const stats = [
    { title: "کاربران", value: "۱,۲۴۵", icon: FaUsers, color: "bg-blue-500" },
    {
      title: "فروش امروز",
      value: "۱۲,۴۰۰,۰۰۰",
      icon: FaDollarSign,
      color: "bg-green-500",
    },
    {
      title: "سفارش‌ها",
      value: "۳۴۲",
      icon: FaShoppingCart,
      color: "bg-orange-500",
    },
    { title: "بازدیدها", value: "۸,۷۹۰", icon: FaEye, color: "bg-purple-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">داشبورد</h1>

      {/* کارت‌های آماری */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                <stat.icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* جدول نمونه */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          آخرین کاربران
        </h2>
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-2 font-medium text-gray-500">نام</th>
              <th className="pb-2 font-medium text-gray-500">ایمیل</th>
              <th className="pb-2 font-medium text-gray-500">نقش</th>
              <th className="pb-2 font-medium text-gray-500">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="py-3">امیررضا شورورزی</td>
              <td className="py-3">amir@example.com</td>
              <td className="py-3">مدیر</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full">
                  فعال
                </span>
              </td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="py-3">علی محمدی</td>
              <td className="py-3">ali@example.com</td>
              <td className="py-3">کاربر</td>
              <td className="py-3">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-600 rounded-full">
                  در انتظار
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
