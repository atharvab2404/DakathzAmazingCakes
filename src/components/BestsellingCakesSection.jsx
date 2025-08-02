import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bestsellingCategories = [
  {
    name: "Anti-Gravity Cakes",
    images: [
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1754118071/best1_cnd0p8.jpg",
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1754118073/best2_zld26l.jpg",
    ],
  },
  {
    name: "Realistic Cakes",
    images: [
      "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-3_or5ig6.jpg",
      "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869125/img-9_r60vwp.jpg",
      "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-2_dk7ohp.jpg",
    ],
  },
  {
    name: "Fondant Figurines",
    images: [
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949630/img-1_si3gzr.jpg",
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949655/img-5_vyp9we.jpg",
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949663/img-7_cizfzu.jpg",
    ],
  },
  {
    name: "Wedding Cakes",
    images: [
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1754118664/best12_ifad6c.jpg",
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1754118776/best13_zgp5um.jpg",
      "https://res.cloudinary.com/dqxsgkxps/image/upload/v1754118877/best14_swcylt.jpg",
    ],
  },
  {
    name: "Flying Butterfly",
    images: [
      "https://res.cloudinary.com/demo/image/upload/cupcake1.jpg",
      "https://res.cloudinary.com/demo/image/upload/cupcake2.jpg",
    ],
  },
  {
    name: "Premium Collection",
    images: [
      "https://res.cloudinary.com/demo/image/upload/premium1.jpg",
      "https://res.cloudinary.com/demo/image/upload/premium2.jpg",
    ],
  },
];

const BestsellingCakesSection = () => {
  const displayedCategories = bestsellingCategories.slice(0, 4); // ✅ Show only 4
  const [activeIndexes, setActiveIndexes] = useState(
    new Array(displayedCategories.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexes((prev) =>
        prev.map((index, i) => (index + 1) % displayedCategories[i].images.length)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-10 px-4 md:px-10">
      <motion.h2
        className="text-3xl font-bold text-pink-600 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🍰 Bestselling Cakes
      </motion.h2>

      {/* ✅ Larger boxes, 2 per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-center">
        {displayedCategories.map((category, i) => (
          <motion.div
            key={i}
            className="relative w-full sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-lg overflow-hidden shadow-lg bg-white mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-60 sm:h-72 md:h-80 lg:h-96 w-full relative bg-white flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={category.images[activeIndexes[i]]}
                  src={category.images[activeIndexes[i]]}
                  alt={category.name}
                  className="max-h-full max-w-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
            <div className="absolute bottom-0 bg-black/50 text-white text-center w-full py-3 text-lg font-semibold">
              {category.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BestsellingCakesSection;
