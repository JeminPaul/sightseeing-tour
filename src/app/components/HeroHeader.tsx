// export const HeroHeader = () => {
//     return (
//       <header className="relative min-h-[80vh] text-white">
//         {/* Video/Image Background */}
//         <div className="absolute inset-0 w-full h-full overflow-hidden">
//           <img 
//             src="/api/placeholder/1920/1080" 
//             alt="Scenic background" 
//             className="w-full h-full object-cover"
//           />
//           {/* Overlay for better text visibility */}
//           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//         </div>
  
//         {/* Navigation */}
//         <div className="relative z-10">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="flex flex-col sm:flex-row justify-between items-center py-4">
//               <a href="/Description" className="flex items-center space-x-2 mb-4 sm:mb-0">
//                 <span className="text-2xl font-bold">SightSee</span>
//                 <span className="text-blue-200">Travels</span>
//               </a>
  
//               <nav className="flex flex-wrap justify-center items-center gap-4">
//                 <a href="/" className="text-white hover:text-blue-200 transition-colors font-medium text-lg px-3 py-1">
//                   Home
//                 </a>
//                 <a href="/contact" className="text-white hover:text-blue-200 transition-colors font-medium text-lg px-3 py-1">
//                   Contact
//                 </a>
//                 <a href="tel:+1234567890" className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors">
//                   {/* <Phone size={18} className="mr-2" /> */}
//                   <span>Call Now</span>
//                 </a>
//               </nav>
//             </div>
  
//             {/* Hero Content */}
//             <div className="text-center py-20 md:py-32">
//               <h1 className="text-4xl md:text-6xl font-bold mb-6">
//                 Explore the World Your Way
//               </h1>
//               <p className="text-xl md:text-2xl mb-8 text-gray-200">
//                 Choose from our fleet of comfortable vehicles for your perfect adventure
//               </p>
//               <a 
//                 href="#vehicles" 
//                 className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
//               >
//                 View Our Vehicles
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   };