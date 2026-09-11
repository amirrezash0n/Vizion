import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { statusData } from "../../../../data/dashboard/statusData";

export default function StatusPieChart() {
  return (
    <div className="bg-balticSea-300 rounded-xl p-6 border border-white-5">
      <h2 className="font-yekanBold text-lg text-whiteSmoke mb-6">
        وضعیت سفارشات
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={statusData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {statusData.map((entry, index) => (
              <Cell key={index} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#24232B",
              border: "1px solid #3F3E49",
              borderRadius: "12px",
              fontFamily: "Morabba-Medium",
              fontSize: "12px",
              color: "#F6F6F6",
            }}
            formatter={(value) => [`${value}٪`, "سهم"]}
          />
          <Legend
            wrapperStyle={{
              fontFamily: "Morabba-Medium",
              fontSize: "12px",
              color: "#A5A5A5",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
