import React, { useEffect, useState } from 'react';


const Navbar = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Explore Flavours", href: "#flavour" },
    { label: "Explore Themes", href: "#catalogue" },
    { label: "Realistic Cakeart", href: "/themes/cakeart"},
    { label: "Contact", href: "#contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const createSprinkles = (el) => {
    const container = document.createElement("div");
    container.classList.add("sprinkle-container");
    el.appendChild(container);

    for (let i = 0; i < 15; i++) {
      const sprinkle = document.createElement("div");
      sprinkle.classList.add("sprinkle");

      sprinkle.style.backgroundColor = ["#f7c59f", "#ff5e5b", "#d72638", "#3f88c5", "#ff9f1c"][Math.floor(Math.random() * 5)];
      sprinkle.style.left = `${Math.random() * 100 - 50}px`;
      sprinkle.style.top = `-${Math.random() * 20 + 5}px`;
      sprinkle.style.transform = `rotate(${Math.random() * 360}deg)`;

      container.appendChild(sprinkle);

      setTimeout(() => {
        sprinkle.remove();
        if (i === 14) container.remove();
      }, 1000);
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      const trigger = link.querySelector("a");
      const sprinkleTrigger = () => createSprinkles(link);
      trigger.addEventListener("mouseenter", sprinkleTrigger);
      trigger.addEventListener("click", sprinkleTrigger);
    });
    return () => {
      links.forEach((link) => {
        const trigger = link.querySelector("a");
        trigger.removeEventListener("mouseenter", createSprinkles);
        trigger.removeEventListener("click", createSprinkles);
      });
    };
  }, []);

  return (
    <nav className="bg-[#0067ff] shadow-md sticky top-0 z-50 h-22 flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-full relative">
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <img src="https://res.cloudinary.com/dqxsgkxps/image/upload/v1751049428/Picture1_fojme5.png" alt="Brand Logo 1" className="h-24 w-auto" />
            <img src="https://res.cloudinary.com/dqxsgkxps/image/upload/v1751049427/Picture2_fghccs.png" alt="Brand Logo 2" className="h-24 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 top-[52%] space-x-20 text-xl text-white tracking-wide font-medium font-abel ml-20">
            {navItems.map((item, index) => (
              <div key={index} className="relative nav-link group">
                <a
                  href={item.href}
                  className="hover:text-yellow-200 transition duration-200 relative z-10 whitespace-nowrap"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

          {/* Hamburger button for mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 bg-[#0067ff] rounded-lg py-2">
            {navItems.map((item, index) => (
              <div key={index} className="nav-link text-center py-2">
                <a
                  href={item.href}
                  className="text-white font-[Noto Serif] text-lg block hover:text-yellow-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
