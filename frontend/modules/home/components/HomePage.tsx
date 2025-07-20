"use client"
import React, { useEffect, useState } from 'react';
import { Header } from '@/shared/components/layout/Header';
import { Footer } from '@/shared/components/layout/Footer';
import { HeroSection } from './Hero';
import { Destination } from './Destination';
import { AiPlanner } from './AiPlanner';
import { Features } from './Features';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/modules/auth/services/auth.api';
import { useAuthStore } from '@/store/Auth';

const HomePage: React.FC = () => {
  const { setAuthUser, clearAuth } = useAuthStore();
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const userData = await checkAuth();
        setAuthUser(userData); 
      } catch (err) {
        clearAuth();
      }
    };

    verifyUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
        <Header />
      {/* Hero Section */}
      <HeroSection />
      {/* Popular Destinations */}
      <Destination />

      {/* AI Trip Planner */}
      <AiPlanner />

      {/* Features */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;