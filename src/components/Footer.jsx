import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import runasalogo from "../assets/runasilogo.jpg";

export default function Footer() {
  // Data configuration for easy updates
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      id: "address",
      icon: MapPin,
      content: (
        <>
          <p>Runasi Holistic Wellness Center</p>
          <p>Nagarjuna Diagnostic Center</p>
          <p>Opposite St. Patrick's High School</p>
          <p>Sebastian Road Secunderabad 500003</p>
        </>
      ),
      // href: "https://maps.google.com/?q=Runasa+Holistic+Wellness+Center+Secunderabad", // Optional: Link to G-Maps
    },
    {
      id: "phone",
      icon: Phone,
      content: <p>+91 94929 70759</p>,
      href: "tel:+919492970759",
    },
    {
      id: "email",
      icon: Mail,
      content: <p>lerunaberino@gmail.com</p>,
      href: "mailto:lerunaberino@gmail.com",
    },
  ];

  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* --- Left: Branding & About --- */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={runasalogo}
                alt="Runasi Wellness Logo"
                className="w-12 h-12 rounded-full border-2 border-gray-700 shadow-lg"
              />
              <div>
                <span className="font-serif text-2xl font-bold bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">
                  Runasi Wellness Center
                </span>
                <p className="text-xs text-gray-400 italic tracking-wide">
                  Reconnect with Nature. Reclaim your health.
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Your trusted partner in holistic healing and wellness—where
              ancient wisdom meets modern therapeutic care. We provide
              personalized pathways to physical and mental rejuvenation.
            </p>
          </div>

          {/* --- Right: Contact Info --- */}
          {/* Mobile: Aligns Left | Desktop: Aligns Right */}
          <div className="flex flex-col gap-4 sm:items-start md:items-end lg:items-end-safe text-left">
            <h4 className="font-serif text-lg font-semibold text-gray-200 mb-1 mr-24 lg:text-left">
              Contact Information
            </h4>

            <div className="space-y-4">
              {contactLinks.map(({ id, icon: Icon, content, href }) => (
                <a
                  key={id}
                  href={href}
                  target={id === "address" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`group flex gap-3 items-start transition-colors duration-200 ${
                    href ? "hover:text-[#B29CE4]" : "cursor-default"
                  }`}
                >
                  {/* Icon */}
                  <Icon className="w-5 h-5 text-[#B29CE4] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />

                  {/* Text */}
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {content}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="border-t border-gray-700/50 mt-4 pt-3 text-center space-y-1">
          <p className="text-gray-500 text-xs md:text-base">
            &copy; {currentYear} Runasi Wellness Center. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/in/narasimha-g-0667b4243/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center"
          >
            <span
              style={{ fontFamily: "Comfortaa, sans-serif" }}
              className="font-bold text-sm md:text-sm lg:text-base bg-linear-to-r from-indigo-400 via-pink-500 to-amber-300 bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-125 bg-size-[200%_auto] hover:bg-position[100%_center] cursor-pointer"
            >
              Designed & Developed by Narasimha Gonela
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
