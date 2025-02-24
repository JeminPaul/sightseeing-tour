import React from 'react';
import { Car, Clock, Shield, Smile, Shuffle } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const AboutDreamDrive: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Convenience',
      description: 'Easy booking system, readily available vehicles, 24/7 service.',
      icon: Clock
    },
    {
      title: 'Reliability',
      description: 'Professional drivers, well-maintained vehicles, punctual arrival times.',
      icon: Car
    },
    {
      title: 'Flexibility',
      description: 'Service for various locations, diverse vehicle options depending on needs.',
      icon: Shuffle
    },
    {
      title: 'Safety',
      description: 'Licensed drivers, adherence to safety regulations.',
      icon: Shield
    },
    {
      title: 'Customer Service',
      description: 'Responsive support, courteous drivers.',
      icon: Smile
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-md">
          Dream Drive Cabs
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-400 italic">
          Serving Excellence, Mile after Mile, Since 2010
        </p>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg p-8 md:p-10 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
          About Us
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Get where you need to be quickly and safely with our on-demand taxi service, 
          offering a range of vehicle options to suit your needs. Our service includes 
          all types of taxis (Car, Traveller, Jeep, Autorickshaw, Tourist bus), and we 
          also offer various tour packages all over Kerala.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-10 text-center">
        Why Choose Us?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md 
                       border border-white/20 shadow-xl hover:shadow-2xl transition-all 
                       duration-500 hover:-translate-y-2"
          >
            {/* Icon Section */}
            <div className="p-6 flex flex-col items-center text-center">
              <div className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 p-4 mb-4 shadow-lg">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/20 rounded-xl transition-all duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutDreamDrive;
