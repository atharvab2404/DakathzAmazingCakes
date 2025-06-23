import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
];

const testimonials = [
  {
    name: "Nisha Gowani",
    feedback:
      "Very delicious and good looking cake. Jyoti is a very professional home Baker . She takes note of all the requirements we have. Timely delivery of cake and freshly prepared cake ! Will recommend to order from her",
  },
  {
    name: "Preeti Vijay",
    feedback:
      "I just ordered a cake from Dakathz Amazing Cakes for my son on his 19th birthday.........I wanted a customised bike cake but no cake shops could help us so I got a recommendation from Facebook about Dakathz Amazing Cakes and she was to ready to take the order and delivered the next day...when the cake arrived everyone was surprised and enjoyed the taste. It was a beautifully designed cake with the bike theme i wanted. I was very happy with the service and taste of the marvellous cake Thanks a lot Jyoti for making my son’s birthday special",
  },
  {
    name: "Prachi Thakur",
    feedback:
      "Jyoti is wonderful Baker. She always delivered the yummy cakes just the way I wanted, both in taste and presentation, and not to miss at reasonable price too.",
  },
  {
    name: "Varshit Srivastava",
    feedback:
      "Now that is some creativity!! Thanks a ton Mrs. Jyoti for the wonderful cake on the occasion of my mother's birthday.Uff!! What a taste, what a great idea. I would just love to have those photos pulled over again n again with my mom's smiling face in the background.Loved it, loved it. Thank you is what we can say.Anyone reading this review, just trust DakAthz Amazing Cakes to give you a great surprise.",
  },
];

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const imgTimer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    const testimonialTimer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      clearInterval(imgTimer);
      clearInterval(testimonialTimer);
    };
  }, []);

  return (
    <section id="about" className="py-10 bg-[#EDF7F2] px-4 sm:px-4 md:px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Column: Image + Testimonial */}
        <div className="w-full lg:w-1/2">
          <div className="relative h-52 sm:h-64 md:h-72 rounded-lg overflow-hidden shadow-md mb-4">
            <AnimatePresence>
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt="Our Story"
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>

          <motion.div
            className="bg-pink-100 p-4 rounded-lg text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <p className="italic text-gray-800 mb-2">
                  “{testimonials[testimonialIndex].feedback}”
                </p>
                <p className="text-pink-700 font-semibold text-right">
                  — {testimonials[testimonialIndex].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Column: Story Text */}
        <motion.div
          className="w-full lg:w-1/2 text-gray-700 text-sm leading-relaxed space-y-3"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-2">Our Story</h2>
          <p>
            What began in 2018 as a simple passion for baking at home has now become a name known across Pune — Dakathz Amazing Cakes. 
            Born from love, creativity, and a whisk full of dreams, Dakathz has grown into a beloved home-baking brand
            that has touched hearts and taste buds alike.
          </p>
          <p>
            Over the years, we’ve delivered over <strong>10,000+ cakes</strong>, turning ordinary days into unforgettable memories.
            From themed birthday cakes to towering wedding masterpieces, each creation is crafted with joy and purpose.
          </p>
          <p>
            Our mission is simple — to deliver <strong>freshly baked cakes</strong> that make every celebration even more special.
            And the love from our customers is the sweetest reward we could ask for.
          </p>
          <p>
            Dakathz has even had the honour of baking for <strong>Bollywood celebrities and prominent personalities</strong> — each moment
            adding another layer of joy to our journey.
          </p>
          <p>
            Today, we are proud to call ourselves <strong>cake specialists</strong>. Be it birthdays, retirements, weddings or corporate parties,
            we make custom cakes tailored to your vision. Our <strong>fusion flavours</strong> are a hit — and yes, we even offer multi-flavour 
            cakes so that every bite feels like a surprise!
          </p>
          <p>
            At Dakathz Amazing Cakes, baking isn’t just a business. <strong>It’s a way of spreading joy</strong>. And the biggest smile is the one you give us,
            when you see your cake and say — “This made my day.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
