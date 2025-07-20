"use client"
import React, { useState } from 'react';
import AdminDashboard from './dashboard';
import UserManagement from './user-management/User-Management';
import PayoutHistory from './Payout-History';
import Layout from './layout';
import AgencyManagement from './agency-management/Agency-Management';
import FinancialManagement from './Financial-Management';
import BookingManagement from './Booking-Management';
import ItenaryManagement from './Itenary-Management';

// ... import other admin screens

const AdminApp = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <AdminDashboard/>;
      case 'users':
        return <UserManagement />;
      case 'payouts':
        return <PayoutHistory />;
      case 'agencies':
       return <AgencyManagement /> 
      case 'financial':
        return <FinancialManagement />
      case 'users':
       return <UserManagement /> 
      case 'bookings':
        return <BookingManagement /> 
      case 'itineraries':
        return <ItenaryManagement />     
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

export default AdminApp;
