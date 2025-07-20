import React from "react";
import { MapPin,Clock,Calendar,Award } from "lucide-react";
export const AiPlanner = () => {
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-purple-300/30" />
                <div className="relative z-10">
                  <div className="w-40 h-64 bg-white rounded-3xl shadow-2xl mx-auto relative">
                    <div className="absolute inset-3 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
                      <div className="p-4 text-white">
                        <div className="flex items-center space-x-2 mb-4">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">
                            AI Planner
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white/20 rounded-lg p-2">
                            <div className="text-xs">Day 1: Arrival</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-2">
                            <div className="text-xs">Day 2: City Tour</div>
                          </div>
                          <div className="bg-white/20 rounded-lg p-2">
                            <div className="text-xs">Day 3: Adventure</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Smart Trip Planning with AI
                </h2>
                <p className="text-gray-600 mb-6">
                  If You are planning for a short trip,Let our AI create the
                  perfect itinerary based on your preferences, budget, and
                  travel style. Get personalized recommendations that match your
                  interests perfectly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Instant Planning
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Get a complete itinerary in under 60 seconds
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Personalized Recommendations
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Tailored to your interests and travel style
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Local Insights
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Hidden gems and insider tips from locals
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Try AI Planner</span>
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
