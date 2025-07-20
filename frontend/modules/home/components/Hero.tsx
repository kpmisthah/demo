import React from "react";
import { Camera,Globe,Calendar,PlayCircle } from "lucide-react";
export const HeroSection = () => {
  return (
    <>
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-green-800 rounded-3xl overflow-hidden h-[500px] md:h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop')`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Floating elements */}
            <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-sm rounded-full p-3 hidden md:block">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-sm rounded-full p-3 hidden md:block">
              <Globe className="w-6 h-6 text-white" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Discover Your Next
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
                    Adventure
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  AI-powered trip planning meets local expertise for
                  unforgettable journeys
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors font-medium flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Plan Trip</span>
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-all font-medium flex items-center space-x-2">
                    <PlayCircle className="w-5 h-5" />
                    <span>Explore Agencies</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
