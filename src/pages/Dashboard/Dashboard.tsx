export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">پیشخوان</h1>

      {/* کارت‌های آماری */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">تعداد کاربران</p>
          <p className="text-2xl font-bold">۱,۲۴۵</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">فروش امروز</p>
          <p className="text-2xl font-bold">۱۲,۴۰۰,۰۰۰</p>
        </div>
        {/* دو کارت دیگر هم به همین شکل */}
      </div>

      {/* جدول کاربران یا نمودار */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">آخرین کاربران</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-right p-2">نام</th>
              <th className="text-right p-2">ایمیل</th>
              <th className="text-right p-2">نقش</th>
            </tr>
          </thead>
          <tbody>{/* داده‌های نمونه */}</tbody>
        </table>
      </div>
    </div>
  );
}
