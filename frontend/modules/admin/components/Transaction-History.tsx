import React from "react";
import { Payout } from "../types/payout.type";
import { TabOption } from "../types/tab.type";
const TransactionHistory = () => {

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
  const getStatusColor = (status: TabOption) => {
    switch (status) {
      case "active":
      case "confirmed":
      case "approved":
      case "paid":
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "inactive":
      case "cancelled":
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Transaction History</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Transaction ID
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Agency
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {payoutHistory.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-200">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {transaction.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">Payout</td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {transaction.agency}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    ₹{transaction.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {transaction.date}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {transaction.status}
                    </span>
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

export default TransactionHistory;
