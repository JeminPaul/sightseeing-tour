"use client";

import React from "react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!firstName || !lastName || !email || !phone || !message) {
      console.error("Please fill out all fields.");
      return;
    }

    const whatsappMessage = `*New Inquiry*\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;
    const whatsappNumber = "1234567890";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 py-6 px-6 text-white text-center">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-green-100 mt-1">We'd love to hear from you!</p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">Our Contact Information</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center space-x-3 bg-green-100 p-4 rounded-lg shadow-md">
                    <MapPin className="w-6 h-6 text-green-600" />
                    <p className="text-gray-700 font-medium">Anachal, Munnar, Kerala, India</p>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-100 p-4 rounded-lg shadow-md">
                    <Mail className="w-6 h-6 text-green-600" />
                    <p className="text-gray-700 font-medium">dreamdrivecabs@gmail.com.com</p>
                  </div>
                  <div className="flex items-center space-x-3 bg-green-100 p-4 rounded-lg shadow-md">
                    <Phone className="w-6 h-6 text-green-600" />
                    <p className="text-gray-700 font-medium">+91 8848876680</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" name="firstName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" name="lastName" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" name="phone" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Message</label>
                  <textarea name="message" rows={4} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}