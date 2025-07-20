import React from "react";
import { Search,MapPin,Calendar,Shield } from "lucide-react";
export const Features = () => {
      const features = [
        { 
          icon: <Search className="w-6 h-6" />, 
          title: 'AI-Powered Search', 
          desc: 'Find perfect destinations with intelligent recommendations',
          color: 'bg-blue-100 text-blue-600'
        },
        { 
          icon: <MapPin className="w-6 h-6" />, 
          title: 'Local Experts', 
          desc: 'Connect with verified local guides and insiders',
          color: 'bg-green-100 text-green-600'
        },
        { 
          icon: <Calendar className="w-6 h-6" />, 
          title: 'Smart Planning', 
          desc: 'AI creates optimized itineraries in minutes',
          color: 'bg-purple-100 text-purple-600'
        },
        { 
          icon: <Shield className="w-6 h-6" />, 
          title: 'Safe Travel', 
          desc: '24/7 support and travel insurance included',
          color: 'bg-orange-100 text-orange-600'
        },
      ];
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose TravelCompanion?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with local expertise to create
              unforgettable travel experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
