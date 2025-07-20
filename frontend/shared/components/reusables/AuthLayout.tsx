import { Plane, MapPin, Users, Calendar } from 'lucide-react';
import { AuthLayoutProps } from "../../types/auth.type";

const FloatingIcons = () => (
<div className="absolute inset-0 overflow-hidden pointer-events-none">
    <Plane className="absolute top-20 left-10 text-blue-200 w-8 h-8 animate-pulse" />
    <MapPin className="absolute top-40 right-20 text-green-200 w-6 h-6 animate-bounce" />
    <Users className="absolute bottom-40 left-20 text-purple-200 w-7 h-7 animate-pulse" />
    <Calendar className="absolute bottom-20 right-10 text-orange-200 w-6 h-6 animate-bounce" />
    </div>
    );

export const AuthLayout:React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4 relative">
    <FloatingIcons />
    <div className="w-full max-w-md relative z-10">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full">
            <Plane className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Wayfare</h1>
        <p className="text-gray-600">Your journey begins here</p>
      </div>
      {children}
    </div>
  </div>
);