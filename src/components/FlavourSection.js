import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const regularFlavours = [
  {
    label: "Pineapple",
    bg: "url('/cake_flavours/pineapple-bg.jpg')",
    description: "Made with real pineapple.",
  },
  {
    label: "Fresh Fruit",
    bg: "url('/cake_flavours/fruits-bg.jpg')",
    description: "Made with real seasonal fruits for a light, refreshing experience.",
  },
  {
    label: "Chocolate Truffle",
    bg: "url('/cake_flavours/truffle-bg.jpg')",
    description: "Rich chocolate layers with silky ganache—pure indulgence.",
  },
  {
    label: "Red Velvet",
    bg: "url('/cake_flavours/redvelvet-bg.jpg')",
    description: "A classic favorite with smooth cream cheese frosting.",
  },
  {
    label: "Butterscotch",
    bg: "url('/cake_flavours/butterscotch-bg.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
  {
    label: "Strawberry",
    bg: "url('/cake_flavours/strawberry-bg.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
  {
    label: "Coffee",
    bg: "url('/cake_flavours/coffee-bg.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
  {
    label: "White Forest",
    bg: "url('/cake_flavours/butterscotch-bg.jpg')",
    description: "Caramelized crunch with soft butterscotch cream—balanced and buttery.",
  },
];

const chocolateFusions = [
  {
    label: "Choco-Blueberry",
    bg: "url('/cake_flavours/choco-blueberry.jpg')",
    description: "Dark chocolate & juicy blueberry mix.",
  },
  {
    label: "Choco-Hazelnut",
    bg: "url('/cake_flavours/choco-hazelnut.jpg')",
    description: "Nutella layers with roasted hazelnuts.",
  },
  {
    label: "Chocolate mousse",
    bg: "url('/cake_flavours/choco-mousse.jpg')",
    description: "Nutella layers with roasted hazelnuts.",
  },
  {
    label: "Classic Truffle",
    bg: "url('/cake_flavours/truffle-bg.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
  {
    label: "Chocolate coffee",
    bg: "url('/cake_flavours/choco-coffee.jpg')",
    description: "Nutella layers with roasted hazelnuts.",
  },
  {
    label: "Chocolate Caramel",
    bg: "url('/cake_flavours/choco-caramel.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
  {
    label: "Chocolate Strawberry",
    bg: "url('/cake_flavours/choco-strawberry.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
  {
    label: "Black Forest",
    bg: "url('/cake_flavours/blackforrest-bg.jpg')",
    description: "Intense chocolate with ganache layers.",
  },
];

const premiumFlavours = [
  {
    label: "Rasmalai Cake",
    bg: "url('/images/rasmalai-bg.jpg')",
    description: "Traditional Indian flavor with a twist.",
  },
  {
    label: "Mango Rose Cake",
    bg: "url('/images/mango-rose.jpg')",
    description: "Summer mangoes and rose essence.",
  },
  {
    label: "Gulab Jamun Cake",
    bg: "url('/images/coffee-cake.jpg')",
    description: "Creamy coffee with burnt caramel swirls.",
  },
  {
    label: "Rose Pistachio",
    bg: "url('/images/coffee-cake.jpg')",
    description: "Creamy coffee with burnt caramel swirls.",
  },
  {
    label: "American Buttercream",
    bg: "url('/images/coffee-cake.jpg')",
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
        backgroundImage: "url('/cake_flavours/bg.png')",
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

