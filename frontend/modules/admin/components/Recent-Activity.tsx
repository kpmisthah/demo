import StatusBadge from "./StatusBadge";
import { Booking } from "../types/booking.type";
const RecentActivity = () => {
  const bookings: Booking[] = [
    {
      id: "BK001",
      customer: "John Doe",
      agency: "Adventure Tours",
      destination: "Manali",
      date: "2024-02-15",
      cost: 25000,
      status: "confirmed",
      payment: "paid",
    },
    {
      id: "BK002",
      customer: "Jane Smith",
      agency: "Mountain Explorers",
      destination: "Goa",
      date: "2024-02-20",
      cost: 18000,
      status: "pending",
      payment: "pending",
    },
    {
      id: "BK003",
      customer: "Mike Johnson",
      agency: "Beach Paradise",
      destination: "Kerala",
      date: "2024-02-25",
      cost: 32000,
      status: "confirmed",
      payment: "paid",
    },
  ];
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Booking ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Customer
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Agency
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Destination
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Amount
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(0, 5).map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {booking.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {booking.customer}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {booking.agency}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {booking.destination}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    ₹{booking.cost.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={booking.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentActivity;
