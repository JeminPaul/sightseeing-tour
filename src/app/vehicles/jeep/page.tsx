// pages/jeep-safari.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import HeroSection from "@/app/components/Herosection";

interface AttractionPoint {
  name: string;
  description: string;
  imageUrl: string;
}

interface SafariPackage {
  name: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  attractions: AttractionPoint[];
}

const JeepSafari: React.FC = () => {
  const safariPackages: SafariPackage[] = [
    {
      name: "ponmudi",
      title: "Ponmudi Jeep Safari",
      description:
        "Experience the breathtaking beauty of Ponmudi hills with our specially designed jeep safari package. Explore scenic viewpoints, stunning waterfalls, and unique attractions nestled in the lush Western Ghats.",
      price: "₹5,000 per jeep",
      duration: "half Day (3-4 hours)",
      attractions: [
        {
          name: "Waterfall",
          description:
            "Experience the majestic Meenmutty waterfall cascading from a height of 300 feet through three separate tiers.",
          imageUrl: "/images/chunayam1.webp",
        },
        {
          name: "Dam",
          description:
            "Visit the scenic Peppara Dam surrounded by tropical forest and offering panoramic views of the reservoir.",
          imageUrl: "/images/ponmudidam.webp",
        },
        {
          name: "Hanging Bridge",
          description:
            "Walk across the thrilling suspension bridge spanning the river, offering a unique perspective of the valley below.",
          imageUrl: "/images/hangingbridge.webp",
        },
        {
          name: "Echo Point",
          description:
            "Experience the fascinating acoustic phenomenon at Echo Point where your voice returns to you from the hills.",
          imageUrl: "/images/echopoint.webp",
        },
        {
          name: "Hilltop Viewpoint",
          description:
            "Reach the summit viewpoint offering a spectacular 360-degree view of the Western Ghats and valleys below.",
          imageUrl: "/images/nadukani1.jpg",
        },
      ],
    },
    {
      name: "anakulam",
      title: "Anakulam Jeep Safari",
      description:
        "Discover the hidden gems of Anakulam with our off-road jeep adventure. This safari takes you through dense forests, pristine waterfalls, and amazing viewpoints that showcase Kerala's natural beauty.",
      price: "₹7500 per jeep",
      duration: "Half Day (4-5 hours)",
      attractions: [
        {
          name: "Waterfall",
          description:
            "Visit the secluded Anakulam waterfall, a pristine cascade hidden in the forest that offers a refreshing natural shower.",
          imageUrl: "/images/33waterfall1.webp",
        },
        {
          name: "Viewpoint",
          description:
            "Stop at the primary viewpoint offering expansive views of the valley and surrounding mountain ranges.",
          imageUrl: "/images/kottapara.webp",
        },
        {
          name: "Hanging Bridge",
          description:
            "Cross the traditional hanging bridge made by local tribes, connecting two hills over a deep gorge.",
          imageUrl: "/images/hang.jpg",
        },
        {
          name: "Tiger Cave",
          description:
            "Explore the mysterious Tiger Cave, a natural rock formation with ancient tribal markings and legends.",
          imageUrl: "/images/headerimg.jpg",
        },
        {
          name: "Anakulam Viewpoint",
          description:
            "End your journey at the Anakulam viewpoint offering breathtaking views of the lake and surrounding landscapes.",
          imageUrl: "/images/Anakulam3.webp",
        },
      ],
    },
  ];

  return (
    <div className="w-full overflow-x-hidden font-sans bg-gray-50">
      <Head>
        <title>Jeep Safari Adventures | Ponmudi & Anakulam</title>
        <meta
          name="description"
          content="Explore the stunning landscapes of Kerala with our Jeep Safari packages"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div
        className="relative h-96 md:h-screen md:max-h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/jeep-safari-hero.jpg')" }}
      >
        <HeroSection
          title="Kerala Jeep Safari Adventures"
          subtitle="Discover the hidden treasures of Kerala's mountains and forests"
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our Premium Jeep Safari Packages
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience the thrill of exploring Kerala's untamed wilderness in
            our comfortable 4x4 jeeps. Our experienced drivers and guides will
            take you to breathtaking locations off the beaten path.
          </p>
        </section>

        {/* Safari Packages */}
        {safariPackages.map((pkg) => (
          <section
            key={pkg.name}
            id={pkg.name}
            className="mb-16 pt-6 border-t border-gray-200"
          >
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
                {pkg.title}
              </h2>
              <div className="flex flex-col md:flex-row md:gap-6 text-gray-600 mb-4">
                <span className="mb-1 md:mb-0">⏱️ {pkg.duration}</span>
                <span>💰 {pkg.price}</span>
              </div>
              <p className="text-gray-700 mb-6">{pkg.description}</p>
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              Attractions
            </h3>
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {pkg.attractions.map((point, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={point.imageUrl}
                      alt={point.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      {point.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Booking Section */}
        <section className="bg-blue-50 rounded-lg p-6 md:p-8 text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Book Your Adventure
          </h2>
          <p className="text-gray-700 mb-6">
            Contact us to book your jeep safari adventure:
          </p>
          <div className="mb-6 space-y-2">
            <p className="text-gray-700">📞 Phone: +91 9947792751</p>
            <p className="text-gray-700">
              ✉️ Email: dreamdrivecabs@gmail.com
            </p>
          </div>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
            Book Now
          </button>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Kerala Jeep Adventures. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default JeepSafari;
