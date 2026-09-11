import PageHeader from "../../components/common/PageHeader/PageHeader";
import RecentOrders from "./components/DashboardTables/RecentOrders";
import RecentTickets from "./components/DashboardTables/RecentTickets";
import SalesChart from "./components/SalesChart/SalesChart";
import StatsCard from "./components/StatsCardOverview/StatsCard";
import StatusPieChart from "./components/StatusPieChart/StatusPieChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader />
      <StatsCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <StatusPieChart />
        </div>
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
      </div>

      <RecentOrders />
      <RecentTickets />
    </div>
  );
}
