import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import runasalogo from "../assets/runasilogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.startsWith("#")) {
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // 🔥 Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Container */}
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={runasalogo}
              alt="Runasa Wellness Logo"
              className="w-10 h-10 sm:w-14 sm:h-14"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg  md:text-3xl font-bold bg-linear-to-r from-[#6E5B9A] to-[#B29CE4] bg-clip-text text-transparent">
                Runasi Wellness Center
              </span>
              <span className="text-[10px] sm:text-xs md:text-sm text-gray-500 italic -mt-1">
                Reconnect with Nature. Reclaim your health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className="text-gray-700 hover:text-[#6E5B9A] font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E5B9A] group-hover:w-full transition-all duration-200"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-[#6E5B9A] font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6E5B9A] group-hover:w-full transition-all duration-200"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          ref={menuRef}
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t">
            {navItems.map((item) =>
              item.path.startsWith("#") ? (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className="block py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-[#6E5B9A] rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-[#6E5B9A] rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
