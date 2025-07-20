import React from "react";
  type TabOption =
    | "active"
    | "confirmed"
    | "paid"
    | "approved"
    | "completed"
    | "pending"
    | "inactive"
    | "cancelled"
    | "rejected"
    | "all";
    

interface Props {
  status: TabOption | boolean;
}
  const getStatusColor = (status:any) => {
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
      case "false":
          return "bg-red-100 text-red-800";
      case "true":
          return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

const StatusBadge: React.FC<Props> = ({ status }) => (
  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
    {status}
  </span>
);
export default StatusBadge;
