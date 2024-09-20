import React from "react";
import { inView, motion } from "framer-motion";

const features = [
  {
    title: "Infinity Pool",
    description:
      "Relax in our luxurious infinity pool with breathtaking views.",
  },
  {
    title: "Tasty Food",
    description: "Enjoy a variety of delicious and healthy food options.",
  },
  {
    title: "Spa",
    description: "Relax and unwind in our spa with a range of treatments.",
  },
  {
    title: "Free Wi-Fi",
    description:
      "Stay connected with complimentary Wi-Fi throughout the resort.",
  },
];

const Features = () => {
  return (
    <section className="py-16 mx-4 md:mx-8 lg:mx-16 cursor-pointer ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-green-700 py-8">
          Our Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="mb-4"></div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
