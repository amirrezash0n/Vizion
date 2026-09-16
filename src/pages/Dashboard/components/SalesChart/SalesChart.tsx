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
import {
  CHART_COLORS,
  CHART_FONT,
  CHART_TOOLTIP_STYLE,
} from "../../../../constants/chartColors";
import ChartCard from "./components/ChartCard";

export default function SalesChart() {
  return (
    <ChartCard title="فروش هفتگی" subtitle="۷ روز گذشته">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={salesData}
          margin={{ top: 10, right: 10, left: -40, bottom: 0 }}
        >
          <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor={CHART_COLORS.success}
                stopOpacity={0.4}
              />
              <stop
                offset="100%"
                stopColor={CHART_COLORS.success}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.border} />
          <XAxis
            dataKey="day"
            stroke={CHART_COLORS.gray}
            style={{ fontFamily: CHART_FONT.family, fontSize: CHART_FONT.size }}
          />
          <YAxis
            stroke={CHART_COLORS.gray}
            style={{ fontFamily: CHART_FONT.family, fontSize: CHART_FONT.size }}
            tickFormatter={(value) => `${value / 1000000}م`}
            ticks={[0, 1000000, 2000000, 3000000]}
          />
          <Tooltip
            contentStyle={CHART_TOOLTIP_STYLE}
            formatter={(value) => [
              `${Number(value).toLocaleString("fa-IR")} تومان`,
              "فروش",
            ]}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke={CHART_COLORS.success}
            strokeWidth={2}
            fill="url(#salesGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
