import { Download, Eye, Filter, Search } from "lucide-react";
import React from "react";
import StatusBadge from "./StatusBadge";
import { Payout } from "../types/payout.type";

const PayoutHistory = () => {
  const payoutHistory: Payout[] = [
    {
      id: "PY001",
      agency: "Adventure Tours",
      amount: 45000,
      method: "Bank Transfer",
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "PY002",
      agency: "Mountain Explorers",
      amount: 28000,
      method: "UPI",
      status: "pending",
      date: "2024-01-14",
    },
    {
      id: "PY003",
      agency: "Beach Paradise",
      amount: 52000,
      method: "Bank Transfer",
      status: "completed",
      date: "2024-01-13",
    },
  ];
  return (
    <>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Payout History</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search payouts..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Payout ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Agency
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Method
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Description
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {payoutHistory.map((payout) => (
                  <tr key={payout.id} className="border-b border-gray-200">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      {payout.id}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {payout.agency}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      ₹{payout.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {payout.method}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={payout.status} />
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      {payout.date}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">
                      Commission payout
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                          <Download className="w-4 h-4" />
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

export default PayoutHistory;
