"use client";

import React from "react";
import Image from "next/image";
import HeroSection from "@/app/components/Herosection";
interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const sightseeingSpots = [
  {
    direction: "Coimbatore Direction",
    places: [
      "Blossom Park",
      "Tea Museum",
      "Eravikulam National Park",
      "Lakkam Waterfalls",
      "Marayoor Sandal Forest",
    ],
  },
  {
    direction: "Top Station Direction",
    places: [
      "Rose Garden",
      "Photo Point",
      "Elephant Park",
      "Mattupetty Tea Factory",
      "Mattupetty Dam",
      "Mattupetty Boating",
      "Echo Point",
      "Elephant Crossing Zone",
      "Kundala Dam",
      "Top Station",
    ],
  },
  {
    direction: "Thekkady Direction",
    places: [
      "Botanical Garden",
      "Idili Hills View Point",
      "Lockhart Tea Factory",
      "Lockhart Plantation",
      "Gap Road View",
      "Periyakanal Waterfalls",
      "Anayirengal Dam Top View",
      "Anayirengal Dam",
    ],
  },
];

export default function TravellerPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="">
      <HeroSection 
        title="Explore Your Day's With Us" 
        subtitle="Discover the hidden treasures of Kerala's mountains and forests"
      />      
      </div>
     

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-lg md:text-xl text-gray-700">
          Enjoy **sightseeing tours, airport pickup & drop**, and seamless **travel experiences** in Munnar with our fleet of cars, travellers, and buses.
        </p>
      </section>

      {/* Sightseeing Categories */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        {sightseeingSpots.map((spot, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 border-l-4 border-green-500 pl-3 mb-4">
              {spot.direction}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {spot.places.map((place, i) => (
                <li key={i} className="flex items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                  <Image src="/icons/location.svg" alt="Location Icon" width={24} height={24} className="mr-2" />
                  <span className="text-gray-700">{place}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <div className="text-center py-6 bg-gray-200">
        <p className="text-gray-700 font-medium">
          Book your **Traveller Service** now and explore Munnar like never before!
        </p>
      </div>
    </div>
  );
}
