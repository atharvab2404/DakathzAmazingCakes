import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const regularFlavours = [
  {
    label: "Pineapple",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/pineapple-bg_l5m5n1.jpg')",
    description: "Made with real pineapple.",
  },
  {
    label: "Fresh Fruit",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776003/fruits-bg_qswrwk.jpg')",
    description: "Made with real seasonal fruits for a light, refreshing experience.",
  },
  {
    label: "Chocolate Truffle",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776004/truffle-bg_duobzx.jpg')",
    description: "Rich chocolate layers with silky ganache—pure indulgence.",
  },
  {
    label: "Red Velvet",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776003/redvelvet-bg_rirpro.jpg')",
    description: "A classic favorite with smooth cream cheese frosting.",
  },
  {
    label: "Butterscotch",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776001/blackforrest-bg_uflstc.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
  {
    label: "Strawberry",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776003/strawberry-bg_tnueyi.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
  {
    label: "Coffee",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/coffee-bg_iqw0df.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
  {
    label: "White Forest",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/choco-hazelnut_evv93k.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
];

const chocolateFusions = [
  {
    label: "Choco-Blueberry",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776001/choco-blueberry_pmm9kj.jpg')",
    description: "Dark chocolate & juicy blueberry mix.",
  },
  {
    label: "Choco-Hazelnut",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/chocohazelnut-bg_wznodm.jpg')",
    description: "Nutella layers with roasted hazelnuts.",
  },
  {
    label: "Chocolate mousse",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776003/choco-mousse_dklhrh.jpg')",
    description: "Nutella layers with roasted hazelnuts.",
  },
  {
    label: "Classic Truffle",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776004/truffle-bg_duobzx.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
  {
    label: "Chocolate coffee",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/choco-coffee_w18swc.jpg')",
    description: "Nutella layers with roasted hazelnuts.",
  },
  {
    label: "Chocolate Caramel",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/choco-caramel_qhgbpv.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
  {
    label: "Chocolate Strawberry",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776002/choco-strawberry_g71q7w.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
  {
    label: "Black Forest",
    bg: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776001/blackforrest-bg_uflstc.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
];

const premiumFlavours = [
  {
    label: "Rasmalai Cake",
    bg: "url('https://res.cloudinary.com/dqxsgkxps/image/upload/v1754119026/cat1_lgy9fi.jpg')",
    description: "Traditional Indian flavor with a twist.",
  },
  {
    label: "Mango Rose Cake",
    bg: "url('https://res.cloudinary.com/dqxsgkxps/image/upload/v1754119026/cat2_puvcbo.jpg')",
    description: "Summer mangoes and rose essence.",
  },
  {
    label: "Gulab Jamun Cake",
    bg: "url('https://res.cloudinary.com/dqxsgkxps/image/upload/v1754119026/cat3_zkwvvd.jpg')",
    description: "Creamy coffee with burnt caramel swirls.",
  },
  {
    label: "Rose Pistachio",
    bg: "url('https://res.cloudinary.com/dqxsgkxps/image/upload/v1754119025/cat4_uuz0dk.jpg')",
    description: "Creamy coffee with burnt caramel swirls.",
  },
  {
    label: "American Buttercream",
    bg: "url('https://res.cloudinary.com/dqxsgkxps/image/upload/v1754119024/cat5_qlu3fy.jpg')",
    description: "Creamy coffee with burnt caramel swirls.",
  },
  {
    label: "Rabdi Jalebi Cake",
    bg: "url('https://res.cloudinary.com/dqxsgkxps/image/upload/v1754119182/cat6_fdd9wh.jpg')",
    description: "Creamy coffee with burnt caramel swirls.",
  },
];


const FlavourGrid = ({ flavours, activeIndex, hoveredIndex, setHoveredIndex }) => {
  return (
    <div>

      {/* Flavour Grid Section */}
      <div className="flex justify-center gap-2 flex-wrap">
        {flavours.map((flavour, idx) => {
          const isActive = hoveredIndex === idx || activeIndex === idx;
          return (
            <motion.div
              key={idx}
              className="relative w-[48%] sm:w-[170px] h-[90px] rounded-lg bg-cover bg-center text-white shadow-md overflow-hidden cursor-pointer"
              style={{ backgroundImage: flavour.bg }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
              <div className="relative z-10 p-1 flex items-center justify-center h-full text-xs font-semibold text-center">
                {flavour.label}
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="popup"
                    className="absolute bottom-0 left-0 w-full bg-white text-black text-[10px] font-medium p-1 rounded-b-lg shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {flavour.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const FlavourSection = () => {
  const [activeRegular, setActiveRegular] = useState(0);
  const [activeChoco, setActiveChoco] = useState(0);
  const [activePremium, setActivePremium] = useState(0);
  const [hoveredRegular, setHoveredRegular] = useState(null);
  const [hoveredChoco, setHoveredChoco] = useState(null);
  const [hoveredPremium, setHoveredPremium] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegular((prev) => (prev + 1) % regularFlavours.length);
      setActiveChoco((prev) => (prev + 1) % chocolateFusions.length);
      setActivePremium((prev) => (prev + 1) % premiumFlavours.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="flavour"
      className="bg-cover bg-center bg-no-repeat py-6 px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dqedwovc4/image/upload/v1750776000/bg_c58anm.png')",
      }}
    >

      {/* Intro Text Block */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-2 px-3 py-2 rounded-lg bg-white/60 backdrop-blur-md shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2
          className="text-2xl md:text-3xl font-bold text-pink-600 mb-2 flex justify-center items-center gap-2"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          <motion.span
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🍰
          </motion.span>
          Our Flavour Promise
        </h2>
        <p
          className="text-sm md:text-base text-gray-800 leading-relaxed"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Indulge in our lovingly handcrafted cakes, available in an array of irresistible flavours.
          Each one is made with care and creativity to bring out its unique charm.
          At <strong>Dakathz Amazing Cakes</strong>, we guarantee every bite is full of delight!
        </p>
      </motion.div>
      <div className="rounded-xl p-6 max-w-[98%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Regular Flavours */}
          <div className="bg-pink-50 p-3 md:p-4 rounded-lg shadow-inner min-h-[200px]">
            <h3 className="text-center text-sm font-bold text-pink-500 mb-2">🍓 Regular</h3>
            <FlavourGrid
              flavours={regularFlavours}
              activeIndex={activeRegular}
              hoveredIndex={hoveredRegular}
              setHoveredIndex={setHoveredRegular}
            />
          </div>

          {/* Chocolate Fusions */}
          <div className="bg-yellow-50 p-5 min-h-[300px] rounded-lg shadow-inner">
            <h3 className="text-center text-sm font-bold text-yellow-700 mb-2">🍫 Chocolate Fusions</h3>
            <FlavourGrid
              flavours={chocolateFusions}
              activeIndex={activeChoco}
              hoveredIndex={hoveredChoco}
              setHoveredIndex={setHoveredChoco}
            />
          </div>

          {/* Premium Flavours */}
          <div className="bg-purple-50 p-5 min-h-[300px] rounded-lg shadow-inner">
            <h3 className="text-center text-sm font-bold text-purple-600 mb-2">🌟 Premium</h3>
            <FlavourGrid
              flavours={premiumFlavours}
              activeIndex={activePremium}
              hoveredIndex={hoveredPremium}
              setHoveredIndex={setHoveredPremium}
            />
          </div>
        </div>
        {/* WhatsApp Order Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/919876543210?text=Hi%20Dakathz%20Amazing%20Cakes!%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Order on Whatsapp now
          </a>
          <a
            href="/themes"  // change this path to your themes section URL
            className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition"
          >
            Explore our cake themes
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlavourSection;

