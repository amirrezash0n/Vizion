import PageHeader from "../../components/common/PageHeader/PageHeader";
import RecentOrders from "./components/DashboardTables/RecentOrders";
import RecentTickets from "./components/DashboardTables/RecentTickets";
import StatsCard from "./components/StatsCardOverview/StatsCard";

export default function Dashboard() {
  return (
    <>
      <PageHeader />
      <StatsCard />
      <div className="flex flex-col gap-y-5">
        <RecentOrders />
        <RecentTickets />
      </div>
    </>
  );
}
