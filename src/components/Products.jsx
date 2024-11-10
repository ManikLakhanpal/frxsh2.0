import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef([]);

  const handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, // Trigger when 10% of the target is visible
    });

    ref.current.forEach((div) => {
      if (div) {
        observer.observe(div);
      }
    });

    return () => {
      ref.current.forEach((div) => {
        if (div) {
          observer.unobserve(div);
        }
      });
    };
  }, []);

  return (
    <div
      id="products"
      className="bg-black min-h-screen flex flex-col items-center mt-[7rem] justify-center"
    >
      <motion.h1
        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
        whileHover={{ color: "#FFD700", transition: { duration: 0.3 } }}
      >
        Products
      </motion.h1>
      <div className="flex flex-row max-h-[60vh] w-[90vw] gap-10 mt-7 flex-wrap items-center justify-center">
        <div className="relative max-h-[60vh] w-[30%] bg-white shadow-lg rounded-lg overflow-hidden group">
          {/* Image */}
          <img
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/men/mensaparel.webp"
            alt="Mens"
            className="w-full h-full object-cover"
          />

          {/* Overlay Info (appears on hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3
              className="text-white text-xl font-semibold rounded-md p-3 bg-zinc-600"
              onClick={() => (window.location.href = "/shop/men")}
            >
              Mens
            </h3>
            <p className="text-white text-sm mt-2 px-4 text-center"></p>
          </div>
        </div>
        <div className="relative max-h-[60vh] w-[30%] bg-white shadow-lg rounded-lg overflow-hidden group">
          {/* Image */}
          <img
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/woman.jpg"
            alt="Mens"
            className="w-full h-full object-cover"
          />

          {/* Overlay Info (appears on hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3
              className="text-white text-xl font-semibold rounded-md p-3 bg-zinc-600"
              onClick={() => (window.location.href = "/shop/women")}
            >
              Womens
            </h3>
            <p className="text-white text-sm mt-2 px-4 text-center"></p>
          </div>
        </div>
        <div className="relative max-h-[60vh] w-[30%] bg-white shadow-lg rounded-lg overflow-hidden group">
          {/* Image */}
          <img
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneakers2.jpg"
            alt="Mens"
            className="w-full h-full object-cover"
          />

          {/* Overlay Info (appears on hover) */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3
              className="text-white text-xl font-semibold rounded-md p-3 bg-zinc-600"
              onClick={() => (window.location.href = "/shop/shoes")}
            >
              Sneakers
            </h3>
            <p className="text-white text-sm mt-2 px-4 text-center"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
