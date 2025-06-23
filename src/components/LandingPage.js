
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlavourSection from './FlavourSection';
import CatalogueSection from './CatalogueSection';
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import Navbar from './Navbar';

const chefImages = [
  '/images/chef1.jpg',
  '/images/chef2.jpg',
  '/images/chef3.jpg',
  '/images/chef4.jpg',
  '/images/chef5.jpg',
  '/images/chef6.jpg',
  '/images/chef7.jpg'
];


const BakeryLandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % chefImages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % chefImages.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + chefImages.length) % chefImages.length);
  };
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}

      <Navbar />
      <HeroSection />
      

      <AboutSection />
      

      <section className="bg-pink-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 gap-8">
        {/* Left: Description */}
        <div className="w-full md:w-1/2">
          <motion.h2
            className="text-3xl font-bold text-pink-600 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Meet the Chef
          </motion.h2>
          <motion.p
            className="text-base text-gray-700 leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Behind every cake is a story, and behind every story is our passionate chef who turns sugar and flour into magic.
            With years of dedication and love for baking, she crafts each cake like a piece of art to bring joy to every celebration.
          </motion.p>
        </div>

        {/* Right: Image Carousel */}
        <div className="w-full md:w-1/2 relative">
          <div className="overflow-hidden rounded-xl shadow-lg h-130 sm:h-[420px] md:h-[500px] w-full relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={chefImages[currentImage]}
                src={chefImages[currentImage]}
                alt={`Chef ${currentImage + 1}`}
                className="object-cover w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-3">
            <button
              onClick={handlePrev}
              className="bg-white/70 hover:bg-white text-pink-600 font-bold p-2 rounded-full shadow"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="bg-white/70 hover:bg-white text-pink-600 font-bold p-2 rounded-full shadow"
            >
              ›
            </button>
          </div>
        </div>
      </section>



      <FlavourSection />

      {/* About Section
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-pink-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <p className="text-xl max-w-3xl mx-auto">
            At Sweet Delights Bakery, we specialize in creating custom cakes for all occasions. From birthdays to weddings, our cakes are crafted with love and the finest ingredients to make your celebrations unforgettable.
          </p>
        </div>
      </section> */}

      <CatalogueSection />

      {/* Contact Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-pink-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Get in Touch
          </motion.h2>
          <p className="text-xl mb-4">Have a custom order or need more information? Reach out to us!</p>
          <p className="text-lg">📞 WhatsApp: <a href="tel:+917030173156" className="text-pink-600">7030173156</a></p>
          <p className="text-lg">📍 Address: Kharadi, Pune, Maharashtra, India</p>
        </div>
      </section>
    </div>
  );
};

export default BakeryLandingPage;


// import React from "react";
// import { motion } from "framer-motion";

// const photos = [
//   "/images/cake1.jpg",
//   "/images/cake2.jpg",
//   "/images/cake3.jpg",
//   "/images/cake4.jpg",
//   "/images/cake5.jpg",
//   "/images/cake6.jpg",
// ];

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
//   hover: { scale: 1.1, rotate: 3, transition: { duration: 0.3 } },
// };

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 md:py-24">
//         <motion.div
//           className="md:w-1/2 text-center md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <motion.h1
//             className="text-5xl md:text-6xl font-extrabold text-pink-700 mb-4 drop-shadow-lg"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             Mom’s Delightful Home Bakery
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl text-pink-600 mb-8 max-w-lg leading-relaxed"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Handmade cakes crafted with love and passion. Perfect for birthdays,
//             anniversaries, corporate events, and more!
//           </motion.p>

//           <motion.a
//             href="tel:+911234567890"
//             className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             Call Us: +91 12345 67890
//           </motion.a>
//         </motion.div>

//         <motion.div
//           className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-3 gap-3"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {photos.map((src, i) => (
//             <motion.div
//               key={i}
//               className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
//               style={{ aspectRatio: "1 / 1" }}
//               variants={itemVariants}
//               whileHover="hover"
//             >
//               <img
//                 src={src}
//                 alt={`Cake ${i + 1}`}
//                 className="object-cover w-full h-full"
//                 loading="lazy"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Additional Info Section */}
//       <motion.section
//         className="bg-pink-50 py-12 text-center max-w-4xl mx-auto px-6 rounded-xl shadow-md"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl font-bold text-pink-700 mb-4">Why Choose Us?</h2>
//         <p className="text-pink-600 max-w-xl mx-auto text-lg leading-relaxed">
//           We specialize in large, customized cakes made fresh to order. Using only
//           the finest ingredients, we guarantee taste and presentation that will wow
//           your guests!
//         </p>
//       </motion.section>
//     </div>
//   );
// };

// export default LandingPage;

