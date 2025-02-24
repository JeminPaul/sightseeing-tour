"use client"; // Ensure this component runs on the client-side

import { useState, useEffect } from "react";
interface HeroSectionProps {
    title: string;
    subtitle: string;
  }

const heroImages = [
  "/images/m-1.jpg",
    "/images/m-3.jpg",  "/images/m-2.jpg"
    ,  "/images/m-4.jpg",  "/images/m-5.jpg",  "/images/m-6.jpg"
    ,  "/images/m-7.jpg",  "/images/m-8.jpg",  "/images/m-9.jpg"
];

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
    const [currentImage, setCurrentImage] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative h-96 md:h-screen md:max-h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
        ></div>
  
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </div>
    );
  };
  
  export default HeroSection;