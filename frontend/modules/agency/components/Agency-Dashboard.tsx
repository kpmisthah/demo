"use client"
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  CalendarDays, 
  Plus, 
  BarChart3, 
  User, 
  Search,
  Bell,
  Menu,
  X,
  MapPin,
  Clock,
  Eye,
  Edit,
  Trash2,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Camera
} from 'lucide-react';

// Types
interface Package {
  id: string;
  itineraryName: string;
  destination: string;
  duration: string;
  status: 'Active' | 'Inactive' | 'Draft';
  createdAt: string;
}

interface Booking {
  id: string;
  customerName: string;
  destination: string;
  date: string;
  totalCost: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

interface Feedback {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  packageName: string;
  date: string;
}

// Sample Data
const packages: Package[] = [
  {
    id: 'PKG001',
    itineraryName: 'Golden Triangle Adventure',
    destination: 'Delhi - Agra - Jaipur',
    duration: '7 Days',
    status: 'Active',
    createdAt: '2024-01-15'
  },
  {
    id: 'PKG002',
    itineraryName: 'Kerala Backwaters',
    destination: 'Kochi - Alleppey',
    duration: '5 Days',
    status: 'Active',
    createdAt: '2024-01-10'
  },
  {
    id: 'PKG003',
    itineraryName: 'Goa Beach Paradise',
    destination: 'North & South Goa',
    duration: '4 Days',
    status: 'Draft',
    createdAt: '2024-01-08'
  }
];

const bookings: Booking[] = [
  {
    id: 'BK001',
    customerName: 'Rajesh Kumar',
    destination: 'Delhi - Agra - Jaipur',
    date: '2024-02-15',
    totalCost: 45000,
    status: 'Confirmed'
  },
  {
    id: 'BK002',
    customerName: 'Priya Sharma',
    destination: 'Kochi - Alleppey',
    date: '2024-02-20',
    totalCost: 32000,
    status: 'Pending'
  },
  {
    id: 'BK003',
    customerName: 'Amit Patel',
    destination: 'North & South Goa',
    date: '2024-02-25',
    totalCost: 28000,
    status: 'Confirmed'
  }
];

const feedbacks: Feedback[] = [
  {
    id: 'FB001',
    customerName: 'Rajesh Kumar',
    rating: 5,
    comment: 'Amazing experience! The itinerary was perfect.',
    packageName: 'Golden Triangle Adventure',
    date: '2024-01-20'
  },
  {
    id: 'FB002',
    customerName: 'Priya Sharma',
    rating: 4,
    comment: 'Good trip but could improve hotel quality.',
    packageName: 'Kerala Backwaters',
    date: '2024-01-18'
  }
];

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'packages', label: 'Package Management', icon: Package },
    { id: 'bookings', label: 'Booking Management', icon: CalendarDays },
    { id: 'add-package', label: 'Add New Package', icon: Plus },
    { id: 'analytics', label: 'Analytics & Feedback', icon: BarChart3 },
    { id: 'profile', label: 'Agency Profile', icon: User },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-800">TravelPro</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="lg:hidden p-1 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

// Header Component
const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}) => {
  return (
    <header className="bg-white shadow-sm border-b px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations, packages..."
              className="bg-transparent border-none outline-none text-sm w-64"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-800">Agency Name</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Dashboard Component
const Dashboard = () => {
  const stats = [
    { label: 'Total Packages', value: '24', icon: Package, color: 'bg-blue-500' },
    { label: 'Active Bookings', value: '156', icon: CalendarDays, color: 'bg-green-500' },
    { label: 'Total Revenue', value: '₹12.5L', icon: DollarSign, color: 'bg-purple-500' },
    { label: 'Happy Customers', value: '89', icon: Users, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your agency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Bookings</h3>
          <div className="space-y-4">
            {bookings.slice(0, 3).map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{booking.customerName}</p>
                  <p className="text-sm text-gray-600">{booking.destination}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">₹{booking.totalCost.toLocaleString()}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                    booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Feedback</h3>
          <div className="space-y-4">
            {feedbacks.map((feedback) => (
              <div key={feedback.id} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-gray-800">{feedback.customerName}</p>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">{feedback.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Package Management Component
const PackageManagement = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Inactive': return 'bg-red-100 text-red-700';
      case 'Draft': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Package Management</h1>
          <p className="text-gray-600">Manage your travel packages and itineraries.</p>
        </div>
        <button className="mt-4 sm:mt-0 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Package</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Itinerary Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Destination</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Duration</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Created At</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {packages.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <div className="font-medium text-gray-800">{pkg.itineraryName}</div>
                    <div className="text-sm text-gray-600">{pkg.id}</div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{pkg.destination}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {pkg.duration}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(pkg.status)}`}>
                      {pkg.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{pkg.createdAt}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 className="w-4 h-4 text-red-600" />
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
  );
};

// Booking Management Component
const BookingManagement = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Booking Management</h1>
        <p className="text-gray-600">Track and manage all customer bookings.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Booking ID</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Customer Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Destination</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Cost</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-800">{booking.id}</td>
                  <td className="py-4 px-4 text-gray-600">{booking.customerName}</td>
                  <td className="py-4 px-4 text-gray-600">{booking.destination}</td>
                  <td className="py-4 px-4 text-gray-600">{booking.date}</td>
                  <td className="py-4 px-4 font-medium text-gray-800">₹{booking.totalCost.toLocaleString()}</td>
                  <td className="py-4 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Edit className="w-4 h-4 text-gray-600" />
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
  );
};

// Add Package Component
const AddPackage = () => {
  const [packageData, setPackageData] = useState({
    destination: '',
    duration: '',
    title: '',
    price: '',
    summary: '',
    highlights: '',
    photos: [] as File[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPackageData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setPackageData(prev => ({ ...prev, photos: [...prev.photos, ...files] }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Add New Package</h1>
        <p className="text-gray-600">Create a new travel package for your customers.</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Package Title</label>
              <input
                type="text"
                name="title"
                value={packageData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter package title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                name="destination"
                value={packageData.destination}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter destination"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
              <select
                name="duration"
                value={packageData.duration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select duration</option>
                <option value="3 Days">3 Days</option>
                <option value="4 Days">4 Days</option>
                <option value="5 Days">5 Days</option>
                <option value="7 Days">7 Days</option>
                <option value="10 Days">10 Days</option>
                <option value="14 Days">14 Days</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={packageData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter price"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Itinerary Summary</label>
            <textarea
              name="summary"
              value={packageData.summary}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Describe the overall package summary..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Package Highlights</label>
            <textarea
              name="highlights"
              value={packageData.highlights}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="List key highlights and attractions..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Package Photos</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Upload photos of the destination</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
              >
                <Plus className="w-4 h-4 mr-2" />
                Choose Photos
              </label>
              {packageData.photos.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">{packageData.photos.length} photos selected</p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Publish Package
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Analytics & Feedback Component
const AnalyticsFeedback = () => {
  const analyticsData = {
    totalRevenue: '₹12,45,000',
    totalBookings: 156,
    averageRating: 4.6,
    repeatCustomers: 23
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Analytics & Feedback</h1>
        <p className="text-gray-600">Track your performance and customer feedback.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.totalRevenue}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.totalBookings}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
              <CalendarDays className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Rating</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.averageRating}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Repeat Customers</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.repeatCustomers}</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Feedback</h3>
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div key={feedback.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-800">{feedback.customerName}</h4>
                  <p className="text-sm text-gray-600">{feedback.packageName}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{feedback.date}</span>
                </div>
              </div>
              <p className="text-gray-700">{feedback.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Agency Profile Component
const AgencyProfile = () => {
  const [profileData, setProfileData] = useState({
    agencyName: 'Wanderlust Travels',
    email: 'info@wanderlusttravels.com',
    phone: '+91 98765 43210',
    address: '123 Travel Street, Mumbai, Maharashtra 400001',
    aboutUs: 'We are a premier travel agency specializing in creating unforgettable journeys across India and beyond. With over 10 years of experience, we pride ourselves on delivering exceptional service and creating memories that last a lifetime.',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Profile saved:', profileData);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Agency Profile</h1>
          <p className="text-gray-600">Manage your agency information and settings.</p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Edit className="w-4 h-4" />
          <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Agency Name</label>
            <input
              type="text"
              name="agencyName"
              value={profileData.agencyName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">About Us</label>
          <textarea
            name="aboutUs"
            value={profileData.aboutUs}
            onChange={handleInputChange}
            disabled={!isEditing}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-500"
          />
        </div>

        {isEditing && (
          <div className="flex justify-end space-x-4 mt-6">
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Settings</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Email Notifications</p>
              <p className="text-sm text-gray-600">Receive notifications about bookings and updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium text-gray-800">SMS Notifications</p>
              <p className="text-sm text-gray-600">Get SMS alerts for urgent booking updates</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium text-gray-800">Marketing Updates</p>
              <p className="text-sm text-gray-600">Receive updates about new features and promotions</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const TravelAgencyDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'packages':
        return <PackageManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'add-package':
        return <AddPackage />;
      case 'analytics':
        return <AnalyticsFeedback />;
      case 'profile':
        return <AgencyProfile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content */}
      <div className="lg:ml-64">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="p-4 md:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default TravelAgencyDashboard;