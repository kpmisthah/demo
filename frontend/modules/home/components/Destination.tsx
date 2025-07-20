import React from "react";
import { Navigation,Heart,Star } from "lucide-react";
export const Destination = () => {
    const popularDestinations = [
    { 
      name: 'Swiss Alps', 
      country: 'Switzerland', 
      rating: 4.9,
      tours: 156,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Stunning alpine scenery and pristine hiking trails',
      price: 'From $1,200'
    },
    { 
      name: 'Santorini', 
      country: 'Greece', 
      rating: 4.8,
      tours: 298,
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop',
      description: 'Beautiful sunsets and stunning coastline',
      price: 'From $899'
    },
    { 
      name: 'Bali', 
      country: 'Indonesia', 
      rating: 4.7,
      tours: 203,
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop',
      description: 'Tropical paradise with rich culture',
      price: 'From $650'
    },
    { 
      name: 'Tokyo', 
      country: 'Japan', 
      rating: 4.9,
      tours: 341,
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop',
      description: 'Modern city with traditional charm',
      price: 'From $1,100'
    },
  ];
  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Trending Destinations
              </h2>
              <p className="text-gray-600">
                Discover the most popular places right now
              </p>
            </div>
            <button className="mt-4 md:mt-0 text-blue-500 hover:text-blue-600 transition-colors flex items-center space-x-2 font-medium">
              <span>Explore All</span>
              <Navigation className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${destination.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">
                        {destination.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">
                      {destination.name}
                    </h3>
                    <span className="text-blue-600 font-semibold text-sm">
                      {destination.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {destination.country}
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {destination.tours} experiences
                    </span>
                    <button className="text-blue-500 hover:text-blue-600 transition-colors text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
