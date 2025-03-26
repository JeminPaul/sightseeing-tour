"use client";

import React, { useState } from 'react';

// Define TypeScript interfaces
interface BikeIconProps {
  size?: number;
  className?: string;
}

interface Bike {
  id: number;
  name: string;
  type: string;
  pricePerHour: number;
  available: boolean;
  icon: React.FC<BikeIconProps>;
}

// Custom SVG icon components
const CityBikeIcon: React.FC<BikeIconProps> = ({ size = 32, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
  </svg>
);

const MountainBikeIcon: React.FC<BikeIconProps> = ({ size = 32, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 18 L12 12 L16 18" />
    <path d="M2 22 L22 22" />
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M6 15 L10 8 L14 15" />
  </svg>
);

const RoadBikeIcon: React.FC<BikeIconProps> = ({ size = 32, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M15 5h4l-4 8h4"/>
    <path d="M5 17.5h13.5"/>
    <path d="M12 17.5V9l-3 5.5"/>
  </svg>
);

const ElectricBikeIcon: React.FC<BikeIconProps> = ({ size = 32, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
    <path d="M10 7l-3 5h4l-2 4"/>
  </svg>
);

const BikePage: React.FC = () => {
  const [selectedBike, setSelectedBike] = useState<Bike | null>(null);
  const [rentDuration, setRentDuration] = useState<number>(1);
  
  const bikes: Bike[] = [
    { 
      id: 1, 
      name: 'City Cruiser', 
      type: 'Urban', 
      pricePerHour: 650, 
      available: true,
      icon: CityBikeIcon
    },
    { 
      id: 2, 
      name: 'Mountain Explorer', 
      type: 'Off-road', 
      pricePerHour: 1000, 
      available: true,
      icon: MountainBikeIcon
    },
    { 
      id: 3, 
      name: 'Road Runner', 
      type: 'Racing', 
      pricePerHour: 1250, 
      available: false,
      icon: RoadBikeIcon
    },
    { 
      id: 4, 
      name: 'Electric Glide', 
      type: 'E-Bike', 
      pricePerHour: 1650, 
      available: true,
      icon: ElectricBikeIcon
    },
  ];

  const handleBikeSelect = (bike: Bike): void => {
    setSelectedBike(bike);
  };

  const handleRentDurationChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRentDuration(parseInt(e.target.value));
  };

  const handleRentBike = (): void => {
    if (selectedBike) {
      alert(`Successfully rented ${selectedBike.name} for ${rentDuration} hour${rentDuration > 1 ? 's' : ''}!`);
      setSelectedBike(null);
      setRentDuration(1);
    }
  };

  const calculateTotalPrice = (): number => {
    if (!selectedBike) return 0;
    return selectedBike.pricePerHour * rentDuration;
  };

  // Format number with Indian number formatting (e.g., 1,00,000)
  const formatIndianPrice = (price: number): string => {
    return price.toLocaleString('en-IN');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-600">Dream Drive Rental Bikes</h1>
        <p className="text-gray-600 mt-2">Explore the city on two wheels!</p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Bikes</h2>
          <div className="space-y-4">
            {bikes.map(bike => (
              <div 
                key={bike.id} 
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  !bike.available ? 'opacity-50 bg-gray-100' : 
                  selectedBike && selectedBike.id === bike.id ? 'border-blue-500 bg-blue-50' : 'hover:border-blue-300'
                }`}
                onClick={() => bike.available && handleBikeSelect(bike)}
              >
                <div className="flex items-center">
                  <div className="mr-4 bg-blue-100 p-3 rounded-lg">
                    <bike.icon size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{bike.name}</h3>
                    <p className="text-sm text-gray-600">{bike.type}</p>
                    <p className="text-sm font-semibold">₹{formatIndianPrice(bike.pricePerHour)}/hour</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${bike.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {bike.available ? 'Available' : 'Currently Rented'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Rental Details</h2>
          <div className="bg-gray-50 border rounded-lg p-6">
            {selectedBike ? (
              <div>
                <div className="mb-4 flex items-center">
                  <div className="mr-4 bg-blue-100 p-3 rounded-lg">
                    <selectedBike.icon size={32} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{selectedBike.name}</h3>
                    <p className="text-gray-600">{selectedBike.type}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Rental Duration (hours)</label>
                  <select 
                    value={rentDuration}
                    onChange={handleRentDurationChange}
                    className="block w-full p-2 border rounded"
                  >
                    {[1, 2, 3, 4, 8, 24].map(hours => (
                      <option key={hours} value={hours}>{hours} hour{hours > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between font-medium">
                    <span>Rate:</span>
                    <span>₹{formatIndianPrice(selectedBike.pricePerHour)}/hour</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Duration:</span>
                    <span>{rentDuration} hour{rentDuration > 1 ? 's' : ''}</span>
                  </div>
                  <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{formatIndianPrice(calculateTotalPrice())}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleRentBike}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
                >
                  Rent Now
                </button>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>Select a bike to see rental details</p>
              </div>
            )}
          </div>
          
          <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 mb-2">Rental Information</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Helmet and lock included with every rental</li>
              <li>• ID and credit card required for rental</li>
              <li>• Late returns charged at 1.5x hourly rate</li>
              <li>• Free cancellation up to 1 hour before pickup</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikePage;