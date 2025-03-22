import React from "react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-emerald-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-10xl mx-auto px-4">
        {/* Main header with responsive nav */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-4">
          {/* Logo */}
          <a
            href="/description"
            className="flex items-center space-x-2 mb-4 sm:mb-0"
          >
            <img
              src="/images/Dream Drive.png"
              alt="SightSee Travels Logo"
              className="w-24 h-14 sm:w-32 md:w-36 lg:w-40 object-contain"
            />

          </a>

          {/* Navigation - Always visible, optimized for mobile */}
          <nav className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="/"
              className="text-white hover:text-blue-200 transition-colors font-medium text-lg px-3 py-1"
            >
              Home
            </a>
            <a
              href="/contacct"
              className="text-white hover:text-blue-200 transition-colors font-medium text-lg px-3 py-1"
            >
              Contact
            </a>
            <a
              href="tel:+91 8848876680"
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
            >
              <Phone size={18} className="mr-2" />
              <span>Call Now</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
