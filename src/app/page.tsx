"use client";

import React from "react";
import Link from "next/link";
import { VehicleType } from "./types";

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
    route: "/vehicles/jeep", // Ensure this route exists
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
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-600 to-teal-600 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            DREAM DRIVE CAB'S
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-semibold tracking-wide max-w-2xl mx-auto">
            Discover Kerala's beauty with our diverse fleet of vehicles, each
            offering a unique way to explore
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                  {vehicle.name}
                </h3>
                <p className="text-white/90 text-lg leading-relaxed mb-4">
                  {vehicle.description}
                </p>

                {/* ✅ Explore More Button */}
                <Link href={vehicle.route} passHref>
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20 flex items-center justify-center space-x-2 group relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-all duration-300 animate-pulse"></div>
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
                </Link>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </main>
  );
}
