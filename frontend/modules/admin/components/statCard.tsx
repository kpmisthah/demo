import { LucideIcon } from "lucide-react";
interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: number;
  color?: string;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  change,
  color = "bg-blue-500",
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {change && (
          <p
            className={`text-sm ${
              change > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {change > 0 ? "+" : ""}
            {change}% from last month
          </p>
        )}
      </div>
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

export default StatCard