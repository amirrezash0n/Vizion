// src/components/dashboard/SalesChart/SalesChart.tsx
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { salesData } from "../../../../data/dashboard/salesData";

export default function SalesChart() {
  return (
    <div className="bg-balticSea-300 rounded-xl p-6 border border-white-5">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-yekanBold text-lg text-whiteSmoke">فروش هفتگی</h2>
        <span className="font-morabbaMedium text-xs text-dawn">
          ۷ روز گذشته
        </span>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={salesData}>
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FD295C" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#FD295C" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#3F3E49" />
          <XAxis
            dataKey="day"
            stroke="#A5A5A5"
            style={{ fontFamily: "Morabba-Medium", fontSize: "12px" }}
          />
          <YAxis
            stroke="#A5A5A5"
            style={{ fontFamily: "Morabba-Medium", fontSize: "12px" }}
            tickFormatter={(value) => `${value / 1000000}م`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#24232B",
              border: "1px solid #3F3E49",
              borderRadius: "12px",
              fontFamily: "Morabba-Medium",
              fontSize: "12px",
              color: "#F6F6F6",
            }}
            formatter={(value) => [
              `${Number(value).toLocaleString("fa-IR")} تومان`,
              "فروش",
            ]}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#FD295C"
            strokeWidth={2}
            fill="url(#salesGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
