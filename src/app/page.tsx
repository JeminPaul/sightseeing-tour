"use client";
import React, { useEffect, useState } from "react";

// Define the VehicleType inline
type VehicleType = {
  id: string;
  name: string;
  description: string;
  image: string;
  route: string;
};

const vehicles: VehicleType[] = [
  {
    id: "1",
    name: "Cab's Tours",
    description: "Feel the freedom of exploring on our well-maintained bikes",
    image: "/images/cabs.jpg",
    route: "/vehicles/cabs",
  },
  {
    id: "2",
    name: "Traveller",
    description:
      "Perfect for group tours with spacious and comfortable seating",
    image: "/images/travaller.webp",
    route: "/vehicles/Travaller",
  },
  {
    id: "3",
    name: "Jeep Safari",
    description:
      "Experience the thrill of off-road adventures in our comfortable jeeps",
    image: "/images/jeepsafari.jpg",
    route: "/vehicles/jeep",
  },
  {
    id: "4",
    name: "Auto Rickshaw",
    description:
      "Explore local culture with our traditional auto rickshaw tours",
    image: "/images/auto1.webp",
    route: "/vehicles/auto",
  },
  {
    id: "5",
    name: "Bike Tours",
    description: "Feel the freedom of exploring on our well-maintained bikes",
    image: "/images/bike.webp",
    route: "/vehicles/Bike",
  },
];

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Trigger the initial animation after component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const scrollPercentRounded = Math.min(
        100,
        Math.round(scrollPercent * 100)
      );
      setScrollProgress(scrollPercentRounded);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Progress Animations
  const scrollProgressAnimation = `
    @keyframes scrollPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
  `;

  return (
    <main className="min-h-screen bg-white text-black relative overflow-x-hidden">
      <style jsx>{`
        ${scrollProgressAnimation}
      `}</style>

      {/* Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-green-500 z-50"
        style={{
          width: `${scrollProgress}%`,
          transition: "width 0.2s ease-out",
          animation: scrollProgress > 0 ? "scrollPulse 1s infinite" : "none",
        }}
      />

      {/* Loading Animation Overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="text-black text-4xl font-bold flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-green-600 inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          DREAM DRIVE
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 tracking-tight relative inline-block">
            <span
              className="relative z-10"
              style={{
                textShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)",
              }}
            >
              DREAM DRIVE CAB'S
            </span>
            <span className="absolute -inset-1 bg-green-200 blur-lg opacity-50 z-0"></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 font-semibold tracking-wide max-w-2xl mx-auto mt-6 transition-all duration-700 delay-300">
            Discover Kerala's beauty with our diverse fleet of vehicles, each
            offering a unique way to explore
          </p>

          {/* Hero CTA Button */}
          <div className="mt-10 transition-all duration-700 delay-500 transform hover:scale-105">
            <a href="#vehicles" className="inline-block">
              <button className="px-10 py-4 bg-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Explore Vehicles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </span>
              </button>
            </a>
          </div>
        </div>

        {/* Rest of the code remains the same as previous artifact */}
        {/* Vehicle Stats Banner, Vehicles Grid, Floating Action Button */}
        {/* ... */}

        {/* Vehicle Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className={`relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-lg transition-all duration-700 transform cursor-pointer group ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              } ${
                activeVehicle === vehicle.id
                  ? "scale-105 border-green-500"
                  : "hover:scale-102"
              }`}
              style={{ transitionDelay: `${700 + index * 100}ms` }}
              onMouseEnter={() => setActiveVehicle(vehicle.id)}
              onMouseLeave={() => setActiveVehicle(null)}
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    activeVehicle === vehicle.id
                      ? "scale-110 brightness-90"
                      : "scale-100"
                  }`}
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <h3
                  className={`text-2xl font-bold text-black mb-3 tracking-wide transition-all duration-300 ${
                    activeVehicle === vehicle.id
                      ? "text-green-600 transform translate-y-0"
                      : "transform translate-y-0"
                  }`}
                >
                  {vehicle.name}
                </h3>

                <p
                  className={`text-gray-700 text-lg leading-relaxed mb-6 transition-all duration-500 ${
                    activeVehicle === vehicle.id ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {vehicle.description}
                </p>

                {/* Explore More Button */}
                <a href={vehicle.route} className="block">
                  <button
                    className={`w-full px-6 py-3 bg-green-600 text-white font-bold rounded-full transform transition-all duration-500 shadow-xl flex items-center justify-center space-x-2 group relative overflow-hidden ${
                      activeVehicle === vehicle.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-90"
                    }`}
                  >
                    <span className="text-lg relative z-10">Learn More</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
