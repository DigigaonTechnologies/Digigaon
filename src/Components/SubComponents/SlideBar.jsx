import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../../data.json";


const SlideBar = () => {
  const [current, setCurrent] = useState(0);
  const total = data.OurClients.length;

  // Function to go to next slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goToSlide = (index) => setCurrent(index);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel slides */}
      <div className="relative h-[60vh] md:h-[80vh] shadow-2xl overflow-hidden rounded-lg ">
        <AnimatePresence initial={false}>
          <motion.div
            key={data.OurClients[current].id}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 py-5  "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={data.OurClients[current].logo}
              alt={data.OurClients[current].name}
              className="w-64 md:w-52 mb-5 mx-auto"
            />
            <p className="text-orange-500 font-bold uppercase text-sm mb-1 md:mb-3">
              {data.OurClients[current].industry}
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-2 md:mb-5">
              {data.OurClients[current].name}
            </h3>
            <p className="text-gray-600 text-sm md:hidden block">
              {data.OurClients[current].description.slice(
                0,
                data.OurClients[current].description.length / 2
              )}
              ...
            </p>
            <p className="text-gray-600 text-sm md:block hidden">
              {data.OurClients[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-0 py-2 left-1/2 space-x-3">
        {data.OurClients.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-amber-500 scale-110" : "bg-amber-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <button
        className="absolute top-1/2 left-2 text-[#1C2430] transform -translate-y-1/2  bg-[#1c24305e] hover:bg-amber-500 hover:scale-110 rounded-full p-2 transition"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-2 text-[#1C2430] transform -translate-y-1/2  bg-[#1c24305e] hover:bg-amber-500 hover:scale-110 rounded-full p-2 transition"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default SlideBar;
