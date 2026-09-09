// src/pages/Dashboard/Dashboard.tsx
import PageHeader from "../../components/common/PageHeader";
import RecentOrders from "./components/RecentOrders/RecentOrders";
import StatsCard from "./components/StatsCardOverview/StatsCard";

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <PageHeader />
      <StatsCard />
      <RecentOrders />
    </div>
  );
}
