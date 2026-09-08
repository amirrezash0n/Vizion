// src/pages/Dashboard/Dashboard.tsx
import PageHeader from "../../components/common/PageHeader";
import StatsCard from "./components/StatsCardOverview/StatsCard";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <PageHeader />
      <StatsCard />
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
