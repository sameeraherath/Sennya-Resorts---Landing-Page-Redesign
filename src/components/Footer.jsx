import { footer } from "framer-motion/client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">@{new Date().getFullYear()} Sennya Resorts</p>
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
