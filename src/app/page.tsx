"use client";

import React from "react";
import Link from "next/link";
import { VehicleType } from "./types";

const vehicles: VehicleType[] = [
  {
    id: "1",
    name: "Traveller",
    description: "Perfect for group tours with spacious and comfortable seating",
    image: "/images/travaller.webp",
    route: "/vehicles/Travaller",
  },
  {
    id: "2",
    name: "Jeep Safari",
    description: "Experience the thrill of off-road adventures in our comfortable jeeps",
    image: "/images/jeepsafari.jpg",
    route: "/vehicles/jeep", // Ensure this route exists
  },
  {
    id: "3",
    name: "Auto Rickshaw",
    description: "Explore local culture with our traditional auto rickshaw tours",
    image: "/images/auto1.webp",
    route: "/vehicles/auto",
  }
,
  {
    id: "4",
    name: "Bike Tours",
    description: "Feel the freedom of exploring on our well-maintained bikes",
    image: "/images/bike.webp",
    route: "/vehicles/bike",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-600 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Choose Your Adventure
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium italic tracking-wide max-w-2xl mx-auto">
            Discover Kerala's beauty with our diverse fleet of vehicles, each offering a unique way to explore
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
                <p className="text-white/90 text-lg leading-relaxed mb-4">{vehicle.description}</p>

                {/* ✅ Explore More Button */}
                <Link href={vehicle.route} passHref>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Explore More
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
