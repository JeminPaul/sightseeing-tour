"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <Image src="/images/Dream Drive.png" alt="Logo" width={150} height={50} />
            <p className="mt-4 text-gray-300 text-sm">
              Discover Munnar like never before with our premium **traveller and sightseeing services**. Book your adventure today!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-400 transition">Home</Link></li>
              <li><Link href="/description" className="hover:text-green-400 transition">About Us</Link></li>
              <li><Link href="/" className="hover:text-green-400 transition">Services</Link></li>
              <li><Link href="/contacct" className="hover:text-green-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center"><Phone className="w-5 h-5 mr-2 text-green-400" /> +91 9947792751</li>
              <li className="flex items-center"><Mail className="w-5 h-5 mr-2 text-green-400" /> dreamdrivecabs@gmail.com</li>
              {/* <li className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-green-400" /> Munnar, Kerala, India</li> */}
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="https://facebook.com" className="hover:text-blue-500 transition"><Facebook className="w-6 h-6" /></Link>
          <Link href="https://instagram.com" className="hover:text-pink-500 transition"><Instagram className="w-6 h-6" /></Link>
          <Link href="https://twitter.com" className="hover:text-blue-400 transition"><Twitter className="w-6 h-6" /></Link>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} All Rights Reserved | Munnar Traveller Services
        </div>
      </div>
    </footer>
  );
}
