import { Check, Edit, Eye, Filter, Plus, Search, X } from "lucide-react";
import React, { useState } from "react";
import StatusBadge from "./StatusBadge";
import { Itinerary } from "../types/itinerary.type";
import { TabOption } from "../types/tab.type";

const itineraries:Itinerary[] = [
    { id: 1, name: 'Manali Adventure 5D/4N', agency: 'Adventure Tours', status: 'approved', createdDate: '2024-01-10' },
    { id: 2, name: 'Goa Beach Relaxation', agency: 'Beach Paradise', status: 'pending', createdDate: '2024-01-12' },
    { id: 3, name: 'Kerala Backwaters', agency: 'Mountain Explorers', status: 'approved', createdDate: '2024-01-08' }
  ];

const ItenaryManagement = () => {
    const [itineraryTab, setItineraryTab] = useState<TabOption>('all');
    return (
    <>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Itinerary Management</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setItineraryTab("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  itineraryTab === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setItineraryTab("pending")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  itineraryTab === "pending"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setItineraryTab("approved")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  itineraryTab === "approved"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Approved
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search itineraries..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              <Plus className="w-4 h-4" />
              <span>Add Itinerary</span>
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Itinerary Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Agency
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Created Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {itineraries
                  .filter(
                    (itinerary) =>
                      itineraryTab === "all" ||
                      itinerary.status === itineraryTab
                  )
                  .map((itinerary) => (
                    <tr key={itinerary.id} className="border-b border-gray-200">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                        {itinerary.name}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {itinerary.agency}
                      </td>
                      <td className="px-4 py-3">
                        <StatusBadge status={itinerary.status} />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {itinerary.createdDate}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                            <Check className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                            <X className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                            <Edit className="w-4 h-4" />
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

export default ItenaryManagement;
