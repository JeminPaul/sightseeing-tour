"use client"
import React, { useState } from 'react';

const TravelCabsPage = () => {
  // State for form inputs
  const [formData, setState] = useState({
    pickup: '',
    destination: '',
    date: '',
    cabType: 'Standard Sedan',
    name: '',
    phone: ''
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setState({
      ...formData,
      [name]: value
    });
  };

  // Handle WhatsApp form submission
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Format the message
    const message = `Hello! I'd like to book a cab:
- Pickup: ${formData.pickup}
- Destination: ${formData.destination}
- Date: ${formData.date}
- Cab Type: ${formData.cabType}
- Name: ${formData.name}
- Phone: ${formData.phone}`;
    
    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp business number - replace with your actual number
    const phoneNumber = "+918848876680"; // Format: country code + number without +
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
  };

  // Cab types with details
  const cabOptions = [
    {
      id: 1,
      name: "Standard Sedan",
      capacity: "Up to 4 passengers",
      luggage: "2 large suitcases",
      features: ["Air Conditioning", "Comfortable Seats", "Music System"],
      idealFor: "Airport transfers, City tours",
      pricePerKm: "₹15/km",
      image: "/images/cabs.jpg"
    },
    {
      id: 2,
      name: "Premium Sedan",
      capacity: "Up to 4 passengers",
      luggage: "2 large suitcases",
      features: ["Leather Seats", "Air Conditioning", "Bottled Water", "WiFi"],
      idealFor: "Business travel, Premium airport transfers",
      pricePerKm: "₹20/km",
      image: "/images/premium.avif"
    },
    {
      id: 3,
      name: "SUV",
      capacity: "Up to 6 passengers",
      luggage: "3 large suitcases",
      features: ["Spacious Cabin", "Air Conditioning", "Music System", "Extra Legroom"],
      idealFor: "Family trips, Group sightseeing",
      pricePerKm: "₹25/km",
      image: "/images/suv.jpg"
    },
    {
      id: 4,
      name: "Tempo Traveller",
      capacity: "Up to 12 passengers",
      luggage: "Multiple suitcases",
      features: ["Spacious Interiors", "Push-back Seats", "Air Conditioning", "Ample Luggage Space"],
      idealFor: "Group travels, Extended tours",
      pricePerKm: "₹40/km",
      image: "/images/travaller.webp"
    }
  ];

  // Popular Routes
  const popularRoutes = [
    {
      from: "Munnar",
      to: "Cochin Airport",
      distance: "110 km",
      duration: "3.5 hours",
     
    },
    {
      from: "Munnar",
      to: "Thekkady",
      distance: "92 km",
      duration: "3 hours",
      
    },
    {
      from: "Munnar",
      to: "Alleppey",
      distance: "175 km",
      duration: "5 hours",
      
    },
    {
      from: "Munnar",
      to: "Kodaikanal",
      distance: "160 km",
      duration: "4.5 hours",
    
    }
  ];

  // Services offered
  const services = [
    {
      title: "Airport Transfers",
      description: "Reliable pickup and drop services to and from all major airports in Kerala",
      icon: "🛬"
    },
    {
      title: "Local Sightseeing",
      description: "Explore Munnar and surrounding attractions with our experienced drivers",
      icon: "🏞️"
    },
    {
      title: "Outstation Trips",
      description: "Multi-day journeys to explore Kerala and neighboring states",
      icon: "🚗"
    },
    {
      title: "Package Tours",
      description: "Pre-planned itineraries covering major attractions with optimized routes",
      icon: "📍"
    },
    {
      title: "Corporate Travel",
      description: "Reliable transportation solutions for business travelers and events",
      icon: "💼"
    },
    {
      title: "Wedding Transport",
      description: "Special arrangements for wedding parties and guests",
      icon: "💍"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-gray-200 py-8 px-4">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden shadow-xl mb-16 max-w-6xl mx-auto">
        <div className="absolute inset-0  opacity-80"></div>
        <img 
          src="/images/travaller.webp" 
          alt="Luxury Cab Services" 
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-orange-400 p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Premium Cab Services in Munnar</h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">Comfortable, reliable, and affordable transportation for all your travel needs</p>
          {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
            Book Now
          </button> */}
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Punctuality Guaranteed</h3>
            <p className="text-gray-600">We value your time. Our drivers always arrive on schedule for pickups and ensure timely arrivals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Safety First</h3>
            <p className="text-gray-600">All our vehicles undergo regular maintenance checks and our drivers are trained in defensive driving.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden charges or surprise fees. We provide clear pricing upfront so you know exactly what to expect.</p>
          </div>
        </div>
      </div>

      {/* Our Cab Fleet */}
      <div className="max-w-6xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">Our Premium Cab Fleet</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Choose from our range of well-maintained vehicles to match your specific travel needs and group size</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cabOptions.map((cab) => (
            <div key={cab.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="h-48">
                <img 
                  src={cab.image} 
                  alt={cab.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-800">{cab.name}</h3>
                <div className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-700">{cab.capacity}</span>
                </div>
                <div className="flex items-center mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">{cab.luggage}</span>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">Features:</p>
                  <ul className="mt-1 space-y-1">
                    {cab.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="text-green-500 mr-1">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-500">Ideal for: <span className="text-gray-700">{cab.idealFor}</span></p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-blue-800">{cab.pricePerKm}</span>
                  {/* <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition">
                    Book Now
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Routes */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-blue-900 text-white rounded-xl overflow-hidden shadow-xl">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Routes & Fares</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularRoutes.map((route, index) => (
                <div key={index} className="bg-blue-800 bg-opacity-50 p-6 rounded-xl hover:bg-opacity-70 transition transform hover:-translate-y-1">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-blue-300 rounded-full mr-2"></div>
                      <h3 className="text-lg font-semibold">{route.from}</h3>
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-blue-500 mx-4"></div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold">{route.to}</h3>
                      <div className="h-3 w-3 bg-yellow-300 rounded-full ml-2"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="text-center">
                      <p className="text-blue-200 text-sm">Distance</p>
                      <p className="font-semibold">{route.distance}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-200 text-sm">Travel Time</p>
                      <p className="font-semibold">{route.duration}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-200 text-sm">Approx. Fare</p>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Process */}
      <div className="max-w-5xl mx-auto mb-16 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Easy Booking Process</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-2xl">
              1
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Choose Your Cab</h3>
            <p className="text-gray-600">Select from our range of cabs based on your needs and group size</p>
          </div>
          
          <div className="hidden md:block w-16 pt-8">
            <div className="border-t-2 border-dashed border-blue-300 w-full"></div>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-2xl">
              2
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Specify Details</h3>
            <p className="text-gray-600">Tell us your pickup location, destination, and travel date/time</p>
          </div>
          
          <div className="hidden md:block w-16 pt-8">
            <div className="border-t-2 border-dashed border-blue-300 w-full"></div>
          </div>
          
          <div className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-2xl">
              3
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Confirm on WhatsApp</h3>
            <p className="text-gray-600">Review your booking details and confirm via WhatsApp message</p>
          </div>
          
          <div className="hidden md:block w-16 pt-8">
            <div className="border-t-2 border-dashed border-blue-300 w-full"></div>
          </div>
          
          <div className="flex flex-col items-center text-center md:w-1/4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 font-bold text-2xl">
              4
            </div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Enjoy Your Ride</h3>
            <p className="text-gray-600">Our driver will arrive at your pickup location on time</p>
          </div>
        </div>
      </div>

      {/* WhatsApp Booking Form */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Book Your Ride Now</h2>
          <p className="text-xl mb-8 text-center">Fill in your details and we'll contact you on WhatsApp</p>
          
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="pickup" 
                value={formData.pickup}
                onChange={handleInputChange}
                placeholder="Pickup Location" 
                className="p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                required
              />
              <input 
                type="text" 
                name="destination" 
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Destination" 
                className="p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="date" 
                name="date" 
                value={formData.date}
                onChange={handleInputChange}
                className="p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                required
              />
              <select 
                name="cabType" 
                value={formData.cabType}
                onChange={handleInputChange}
                className="p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              >
                {cabOptions.map(cab => (
                  <option key={cab.id} value={cab.name}>{cab.name}</option>
                ))}
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name" 
                className="p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                required
              />
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number" 
                className="p-3 rounded bg-white bg-opacity-20 border border-white border-opacity-20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                required
              />
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-full text-lg transition transform hover:scale-105 flex items-center justify-center mx-auto"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
                </svg>
                Book via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TravelCabsPage;