import { STATS } from "../../../../constants/stats";
import StatCard from "./StatCard";

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
      {STATS.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
