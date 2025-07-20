import { Eye, Filter, MoreHorizontal, Search } from "lucide-react";
import React from "react";
import StatusBadge from "./StatusBadge";
import { Booking } from "../types/booking.type";

const BookingManagement = () => {
      const bookings:Booking[] = [
    { id: 'BK001', customer: 'John Doe', agency: 'Adventure Tours', destination: 'Manali', date: '2024-02-15', cost: 25000, status: 'confirmed', payment: 'paid' },
    { id: 'BK002', customer: 'Jane Smith', agency: 'Mountain Explorers', destination: 'Goa', date: '2024-02-20', cost: 18000, status: 'pending', payment: 'pending' },
    { id: 'BK003', customer: 'Mike Johnson', agency: 'Beach Paradise', destination: 'Kerala', date: '2024-02-25', cost: 32000, status: 'confirmed', payment: 'paid' }
  ];
  return (
    <>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Booking Management</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Booking ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Agency
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Destination
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Cost
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Payment
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
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
                      {booking.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      ₹{booking.cost.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={booking.payment} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingManagement;
