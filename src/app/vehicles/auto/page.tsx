"use client"
import React, { useState, useRef } from 'react';

const MunnarAutoRickshaw = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    duration: '4',
    passengers: '1',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  // WhatsApp phone number - replace with your actual business number
  const whatsappNumber = "9947792751"; // Format: country code + number without +
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const message = `
*New Auto Rickshaw Booking*
--------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Duration:* ${formData.duration} hours
*Passengers:* ${formData.passengers}
--------------------
Thank you for booking with Munnar Auto Adventures!
    `.trim();
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Update submission state
    setIsSubmitted(true);
  };
  
  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const popularSpots = [
    { name: "Tea Gardens", description: "Explore lush green tea plantations", duration: "2 hours", price: "₹600" },
    { name: "Mattupetty Dam", description: "Scenic dam with boating options", duration: "3 hours", price: "₹800" },
    { name: "Echo Point", description: "Experience natural echo phenomenon", duration: "2 hours", price: "₹600" },
    { name: "Top Station", description: "Highest point with panoramic views", duration: "4 hours", price: "₹1200" },
    { name: "Eravikulam National Park", description: "Home to Nilgiri Tahr", duration: "5 hours", price: "₹1500" },
  ];
  
  const packages = [
    { name: "Basic Tour", duration: "4 hours", spots: "3 spots", price: "₹1200" },
    { name: "Standard Tour", duration: "6 hours", spots: "5 spots", price: "₹1800" },
    { name: "Full Day Tour", duration: "8 hours", spots: "7 spots", price: "₹2400" },
  ];
  
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Dream Drive Auto Adventures</h1>
            <p className="mt-4 text-xl">Explore the scenic beauty of Munnar in authentic auto rickshaws</p>
            <button 
              onClick={scrollToBooking}
              className="mt-8 rounded-full bg-yellow-500 px-6 py-3 text-lg font-semibold text-gray-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-white" style={{clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)"}}></div>
      </div>
      
      {/* Features */}
      <div className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Auto Rickshaw Tours?</h2>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Authentic Experience</h3>
              <p className="mt-2 text-gray-600">Travel like a local in traditional auto rickshaws for a genuine Munnar experience</p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Local Knowledge</h3>
              <p className="mt-2 text-gray-600">Our drivers are local experts who know hidden gems and will share fascinating insights</p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-600">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Affordable Rates</h3>
              <p className="mt-2 text-gray-600">Enjoy the best of Munnar with budget-friendly tour packages</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popular Spots */}
      <div className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Popular Sightseeing Spots</h2>
            <p className="mt-4 text-lg text-gray-600">Discover Munnar's breathtaking locations with our auto tours</p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularSpots.map((spot, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md hover:bg-green-50">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{spot.name}</h3>
                  <p className="mt-1 text-gray-600">{spot.description}</p>
                  <div className="mt-4 flex justify-between">
                    <span className="text-sm text-gray-500">{spot.duration}</span>
                    <span className="font-medium text-green-600">{spot.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Packages */}
      <div className="bg-green-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Tour Packages</h2>
            <p className="mt-4 text-lg text-gray-600">Choose the perfect package for your Munnar adventure</p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {packages.map((pkg, index) => (
              <div key={index} className="overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl border-t-4 border-yellow-500">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="ml-2 text-gray-600">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="ml-2 text-gray-600">{pkg.spots}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <button 
                    onClick={() => {
                      scrollToBooking();
                      setFormData(prev => ({...prev, duration: pkg.duration.split(' ')[0]}));
                    }}
                    className="mt-6 w-full rounded-lg bg-green-600 py-2 font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Booking Form */}
      <div id="booking" ref={bookingRef} className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-green-700 to-green-600 p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white">Book Your Auto Rickshaw Tour</h2>
            
            {isSubmitted ? (
              <div className="mt-6 rounded-lg bg-white p-6">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">Booking Sent to WhatsApp!</h3>
                  <p className="mt-2 text-gray-600">Your booking details have been sent to our WhatsApp. We'll confirm your tour details shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                  >
                    Book Another Tour
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-white">Tour Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="duration" className="block text-sm font-medium text-white">Duration (hours)</label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                    >
                      <option value="4">4 hours</option>
                      <option value="6">6 hours</option>
                      <option value="8">8 hours</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium text-white">Passengers</label>
                    <select
                      id="passengers"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500"
                    >
                      <option value="1">1 passenger</option>
                      <option value="2">2 passengers</option>
                      <option value="3">3 passengers</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-gray-900 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
                >
                  Book via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Testimonials */}
      <div className="bg-green-50 py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition-all border-r-4 border-yellow-400">
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Rahul Sharma</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">"The auto rickshaw tour was the highlight of our Munnar trip! Our driver knew all the best spots and took us to places we would never have found on our own."</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition-all border-r-4 border-yellow-400">
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Priya Patel</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">"Such a fun experience! The auto rickshaw gave us a real local feel, and the driver was knowledgeable and friendly. Perfect for exploring the tea gardens!"</p>
            </div>
            
            <div className="rounded-lg bg-white p-6 shadow hover:shadow-lg transition-all border-r-4 border-yellow-400">
              <div className="flex items-center">
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Michael Chen</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-gray-600">"Great value for money! We saw all the main attractions in Munnar in one day. The auto rickshaw was comfortable and our driver was excellent."</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Information */}
      <div className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-2 text-green-700">Experience Munnar like a local</p>
            <div className="mt-4 flex space-x-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-2">+91 9947792751</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="ml-2">info@munnarauto.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Contact Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a 
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default MunnarAutoRickshaw;