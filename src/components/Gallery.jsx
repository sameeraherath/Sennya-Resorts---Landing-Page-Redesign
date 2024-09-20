import { section } from "framer-motion/client";
import React from "react";

const images = [
  { src: "/images/Gallery 1.jpg", alt: "Infinity Pool" },
  { src: "/images/Gallery 2.jpg", alt: "Lush Gardens" },
  { src: "/images/Gallery 3.jpg", alt: "Beachfront View" },
  { src: "/images/Gallery 4.jpg", alt: "Spa Retreat " },
  { src: "/images/Gallery 5.jpg", alt: "Sunset Deck" },
  { src: "/images/Gallery 6.jpg", alt: "Private Cabana" },
];

const Gallery = () => {
  return (
    <section className="py-8 px-12 bg-gray-50 ">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-700 ">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
