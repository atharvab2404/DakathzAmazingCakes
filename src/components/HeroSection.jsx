import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://res.cloudinary.com/dqedwovc4/video/upload/v1750775644/hero-video1_kekak4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-sm z-10"></div>

      {/* Logo + Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 space-y-6 -mt-12">
        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dqedwovc4/image/upload/v1750775744/logo_tvghxw.png"  // Replace with your actual logo path
          alt="Mom's Bakery Logo"
          className="w-64 sm:w-72 md:w-140 lg:w-102 object-contain" // Increase width here
        />

        {/* Text */}
        
        <h1 className="text-white text-base sm:text-lg md:text-2xl font-barlow font-medium tracking-wide">
          Pure Vegetarian | Freshly Baked | Unique Flavours | Fully Customisable | Made with Love
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
