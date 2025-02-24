"use client";

import React from "react";
import Link from "next/link";
import { VehicleType } from "../types";

interface VehicleCardProps {
  vehicle: VehicleType;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
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

        {/* ✅ Use <a> inside <Link> for Next.js */}
        <Link href={vehicle.route} legacyBehavior>
          <a className="inline-block w-full">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore More
            </button>
          </a>
        </Link>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300" />
    </div>
  );
};

export default VehicleCard;
