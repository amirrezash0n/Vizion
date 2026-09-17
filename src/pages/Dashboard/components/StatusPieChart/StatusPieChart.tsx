import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { statusData } from "../../../../data/dashboard/statusData";
import ChartCard from "../SalesChart/components/ChartCard";
import {
  CHART_COLORS,
  CHART_FONT,
  CHART_TOOLTIP_STYLE,
} from "../../../../constants/chartColors";

export default function StatusPieChart() {
  return (
    <ChartCard title="وضعیت سفارشات">
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
            {statusData.map((entry) => (
              <Cell key={entry.id} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={CHART_TOOLTIP_STYLE}
            formatter={(value) => [`${value}٪`, "سهم"]}
          />
          <Legend
            wrapperStyle={{
              fontFamily: CHART_FONT.family,
              fontSize: CHART_FONT.size,
              color: CHART_COLORS.gray,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
