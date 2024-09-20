import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-green-700 cursor-pointer">
              Sennya Resorts
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                to="/"
                className="text-gray-800 hover:text-green-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
              >
                Home
              </a>
              <a
                to="/features"
                className="text-gray-800 hover:text-green-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
              >
                Features
              </a>
              <a
                to="/gallery"
                className="text-gray-800 hover:text-green-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
              >
                Gallery
              </a>
              <a
                to="/contact"
                className="text-gray-800 hover:text-green-700 px-3 py-2 rounded-md text-lg font-medium cursor-pointer"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            to="/"
            className="text-gray-800 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            to="/features"
            className="text-gray-800 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Features
          </a>
          <a
            to="/gallery"
            className="text-gray-800 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Gallery
          </a>
          <a
            to="/booking"
            className="text-gray-800 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Booking
          </a>
          <a
            to="/contact"
            className="text-gray-800 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
