import React from "react";
import MapComponent from "./MapComponent";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 mb-8">
      <h1 className="text-3xl font-bold text-center mb-4 text-green-700 mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4 cursor-pointer">
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md lg:w-60 ">
          <h2 className="text-lg font-semibold">Call Us</h2>
          <p>+94 123 456 789</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md lg:w-60">
          <h2 className="text-lg font-semibold">Email Us</h2>
          <p>info@example.com</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-md lg:w-60">
          <h2 className="text-lg font-semibold">Visit Us</h2>
          <p>123 Main Street, City</p>
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default ContactPage;
