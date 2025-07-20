import { ResponsiveContainer,LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Line,PieChart,Pie,Cell } from "recharts";

const Chart = () => {
    const revenueData = [
    { month: 'Jan', revenue: 125000, bookings: 280 },
    { month: 'Feb', revenue: 145000, bookings: 320 },
    { month: 'Mar', revenue: 165000, bookings: 380 },
    { month: 'Apr', revenue: 185000, bookings: 420 },
    { month: 'May', revenue: 205000, bookings: 480 },
    { month: 'Jun', revenue: 225000, bookings: 520 }
  ];

   const bookingStatusData = [
    { name: 'Confirmed', value: 45, color: '#3B82F6' },
    { name: 'Pending', value: 30, color: '#F59E0B' },
    { name: 'Cancelled', value: 25, color: '#EF4444' }
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`₹${value}`, "Revenue"]} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">
            Booking Status Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bookingStatusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {bookingStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center mt-4 space-x-4">
            {bookingStatusData.map((entry, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2`}
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-sm">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chart;
