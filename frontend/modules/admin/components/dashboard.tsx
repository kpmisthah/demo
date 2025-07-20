
import {
  Users,
  Building2,
  Calendar,
  DollarSign,
} from "lucide-react";

import StatCard from "./statCard";
import Chart from "./Chart";
import RecentActivity from "./Recent-Activity";

const AdminDashboard = () => {
  const dashboardStats = {
    totalUsers: 12847,
    totalAgencies: 245,
    totalBookings: 3421,
    totalRevenue: 2845720,
  };

  return (
    <>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value={dashboardStats.totalUsers.toLocaleString()}
            icon={Users}
            change={12.5}
            color="bg-blue-500"
          />
          <StatCard
            title="Total Agencies"
            value={dashboardStats.totalAgencies}
            icon={Building2}
            change={8.2}
            color="bg-purple-500"
          />
          <StatCard
            title="Total Bookings"
            value={dashboardStats.totalBookings.toLocaleString()}
            icon={Calendar}
            change={15.3}
            color="bg-green-500"
          />
          <StatCard
            title="Total Revenue"
            value={`₹${(dashboardStats.totalRevenue / 100000).toFixed(1)}L`}
            icon={DollarSign}
            change={22.1}
            color="bg-yellow-500"
          />
        </div>
        {/* Charts */}
        <Chart />
        {/* Recent Activity */}
        <RecentActivity />
      </div>
    </>
  );

};

export default AdminDashboard;
