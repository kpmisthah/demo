import React, { useState, useEffect } from 'react';
import { 
  Menu,
  Home,
  Building2,
  Calendar,
  DollarSign,
  CreditCard,
  Users,
  Map,
  Settings,
  LogOut,
  Bell,
  X
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'agencies', label: 'Agency Details', icon: Building2 },
    { id: 'bookings', label: 'Booking Management', icon: Calendar },
    { id: 'financial', label: 'Financial Management', icon: DollarSign },
    { id: 'payouts', label: 'Payout History', icon: CreditCard },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'itineraries', label: 'Itinerary Management', icon: Map }
  ];

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        ${isMobile ? 'fixed' : 'relative'}
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${isMobile ? 'w-64' : (sidebarOpen ? 'w-64' : 'w-16')}
        bg-white shadow-lg transition-all duration-300 flex flex-col z-50
        ${isMobile ? 'h-full' : 'h-screen'}
      `}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              {(sidebarOpen || isMobile) && (
                <span className="text-lg font-bold text-gray-900">TravelCompanion</span>
              )}
            </div>
            {isMobile && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="space-y-1 px-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-500'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {(sidebarOpen || isMobile) && (
                  <span className="text-sm font-medium truncate">{item.label}</span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex-shrink-0"></div>
            {(sidebarOpen || isMobile) && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">admin@travelcompanion.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900 truncate">
                {sidebarItems.find(item => item.id === activeTab)?.label || 'Dashboard'}
              </h1>
            </div>
            
            {/* Header actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;