import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";  // Added for dynamic routing
import { useNavigate } from "react-router-dom";

const themes = [
  {
    id: "cakeart",
    name: "Special Realistic CakeArt",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["fondant", "figure", "cakeart", "realistic"],
    images: ["/theme/special/img-1.jpg", "/theme/special/img-2.jpg", "/theme/special/img-3.jpg", "/theme/special/img-4.jpg", "/theme/special/img-5.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cakeart",
    picfolder: "/theme/special",
  },
  {
    id: "fondantfigure",
    name: "Special Fondant Figurine Cakes",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["fondant", "figure", "cakeart", "realistic"],
    images: ["/theme/fondantfigure/img-1.jpg", "/theme/fondantfigure/img-2.jpg", "/theme/fondantfigure/img-3.jpg", "/theme/fondantfigure/img-4.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/fondantfigurine",
    picfolder: "/theme/fondantfigure",
  },
  {
    id: "fondantprops",
    name: "Special Fondant Props Cakes",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["fondant", "figure", "cakeart", "realistic"],
    images: ["/theme/fondant/img-1.jpg", "/theme/fondant/img-2.jpg", "/theme/fondant/img-3.jpg", "/theme/fondant/img-4.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/fondantprops",
    picfolder: "/theme/fondant",
  },
  {
    id: "superhero",
    name: "Superhero Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["superhero", "batman", "spiderman", "marvel", "dc", "hero"],
    images: ["/theme/superhero/img-1.jpg", "/theme/superhero/img-2.jpg", "/theme/superhero/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/superhero",
    picfolder: "/theme/superhero",
  },
  {
    id: "frozen",
    name: "Frozen Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["pig", "peppa", "peppa pig"],
    images: ["/theme/frozen/img-1.jpg", "/theme/frozen/img-2.jpg", "/theme/frozen/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/frozen",
    picfolder: "/theme/frozen",
  },
  {
    id: "cartoon",
    name: "Cartoon Charcter Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["elsa", "aana", "frozen", "snow", "snowman", "olaf", "ice", "disney"],
    images: ["/theme/cartoon/img-1.jpg", "/theme/cartoon/img-2.jpg", "/theme/cartoon/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cartoon",
    picfolder: "/theme/cartoon",
  },
  {
    id: "football",
    name: "Football Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["football", "ball", "messi", "ronaldo", "fifa", "sports", "ground", "real madrid", "barcelona"],
    images: ["/theme/football/img-1.jpg", "/theme/football/img-2.jpg", "/theme/football/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/football",
    picfolder: "/theme/football",
  },
  {
    id: "princess",
    name: "Princess Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["cricket", "bat", "ball", "dhoni", "kohli", "tendulkar", "csk", "rcb", "stump", "wicket", "pitch"],
    images: ["/theme/princess/img-1.jpg", "/theme/princess/img-2.jpg", "/theme/princess/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/princess",
    picfolder: "/theme/princess",
  },
  {
    id: "unicorn",
    name: "Unicorn Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["horse", "unicorn", "imaginary", "cartoon"],
    images: ["/theme/unicorn/img-1.jpg", "/theme/unicorn/img-2.jpg", "/theme/unicorn/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/unicorn",
    picfolder: "/theme/unicorn",
  },
  {
    id: "cricket",
    name: "Cricket Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["cute", "beautiful", "butterfly"],
    images: ["/theme/cricket/img-1.jpg", "/theme/cricket/img-2.jpg", "/theme/cricket/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cricket",
    picfolder: "/theme/cricket",
  },
  {
    id: "alcohol",
    name: "Alcohol Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["kids", "cute", "girls", "doll", "barbie"],
    images: ["/theme/alcohol/img-1.jpg", "/theme/alcohol/img-2.jpg", "/theme/alcohol/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/alcohol",
    picfolder: "/theme/alcohol",
  },
  {
    id: "baby",
    name: "Baby Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["tom", "jerry", "cartoon"],
    images: ["/theme/baby/img-1.jpg", "/theme/baby/img-2.jpg", "/theme/baby/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/baby",
    picfolder: "/theme/baby",
  },
  {
    id: "barbie",
    name: "Barbie Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/barbie/img-1.jpg", "/theme/barbie/img-2.jpg", "/theme/barbie/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/barbie",
    picfolder: "/theme/barbie",
  },
  {
    id: "cars",
    name: "Cars Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/cars/img-1.jpg", "/theme/cars/img-2.jpg", "/theme/cars/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cars",
    picfolder: "/theme/cars",
  },
  {
    id: "jungle",
    name: "Jungle Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/jungle/img-1.jpg", "/theme/jungle/img-2.jpg", "/theme/jungle/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/jungle",
    picfolder: "/theme/jungle",
  },
  {
    id: "makeup",
    name: "Makeup Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/makeup/img-1.jpg", "/theme/makeup/img-2.jpg", "/theme/makeup/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/makeup",
    picfolder: "/theme/makeup",
  },
  {
    id: "spiderman",
    name: "Spiderman Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/spiderman/img-1.jpg", "/theme/spiderman/img-2.jpg", "/theme/spiderman/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/spiderman",
    picfolder: "/theme/spiderman",
  },
  {
    id: "space",
    name: "Space Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/space/img-1.jpg", "/theme/space/img-2.jpg", "/theme/space/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/space",
    picfolder: "/theme/space",
  },
  {
    id: "tech",
    name: "Tech Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/tech/img-1.jpg", "/theme/tech/img-2.jpg", "/theme/tech/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/tech",
    picfolder: "/theme/tech",
  },
  {
    id: "travel",
    name: "Travel Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/travel/img-1.jpg", "/theme/travel/img-2.jpg", "/theme/travel/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/travel",
    picfolder: "/theme/travel",
  },
  {
    id: "castle",
    name: "Castle Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/castle/img-1.jpg", "/theme/castle/img-2.jpg", "/theme/castle/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/castle",
    picfolder: "/theme/castle",
  },
  {
    id: "cocomelon",
    name: "Cocomelon Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/cocomelon/img-1.jpg", "/theme/cocomelon/img-2.jpg", "/theme/cocomelon/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cocomelon",
    picfolder: "/theme/cocomelon",
  },
  {
    id: "babyboss",
    name: "babyboss Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/babyboss/img-1.jpg", "/theme/babyboss/img-2.jpg", "/theme/babyboss/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/babyboss",
    picfolder: "/theme/babyboss",
  },
  {
    id: "babyshower",
    name: "babyshower Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/babyshower/img-1.jpg", "/theme/babyshower/img-2.jpg", "/theme/babyshower/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/babyshower",
    picfolder: "/theme/babyshower",
  },
  {
    id: "dress",
    name: "Dress Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/dress/img-1.jpg", "/theme/dress/img-2.jpg", "/theme/dress/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/dress",
    picfolder: "/theme/dress",
  },
  {
    id: "gaming",
    name: "Gaming Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/gaming/img-1.jpg", "/theme/gaming/img-2.jpg", "/theme/gaming/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/gaming",
    picfolder: "/theme/gaming",
  },
  {
    id: "harrypotter",
    name: "Harry Potter Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/harrypotter/img-1.jpg", "/theme/harrypotter/img-2.jpg", "/theme/harrypotter/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/harrypotter",
    picfolder: "/theme/harrypotter",
  },
  {
    id: "mermaid",
    name: "Mermaid Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/mermaid/img-1.jpg", "/theme/mermaid/img-2.jpg", "/theme/mermaid/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/mermaid",
    picfolder: "/theme/mermaid",
  },
  {
    id: "mickey",
    name: "Mickey Mouse Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/mickey/img-1.jpg", "/theme/mickey/img-2.jpg", "/theme/mickey/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/mickey",
    picfolder: "/theme/mickey",
  },
  {
    id: "minecraft",
    name: "Minecraft Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/minecraft/img-1.jpg", "/theme/minecraft/img-2.jpg", "/theme/minecraft/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/minecraft",
    picfolder: "/theme/minecraft",
  },
  {
    id: "minions",
    name: "Minions Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/minions/img-1.jpg", "/theme/minions/img-2.jpg", "/theme/minions/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/minions",
    picfolder: "/theme/minions",
  },
  {
    id: "music",
    name: "Music Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/music/img-1.jpg", "/theme/music/img-2.jpg", "/theme/music/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/music",
    picfolder: "/theme/music",
  },
  {
    id: "pawpatrol",
    name: "Pawpatrol Themed Cake",
    description: "A cake that celebrates your favorite superheroes in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["/theme/pawpatrol/img-1.jpg", "/theme/pawpatrol/img-2.jpg", "/theme/pawpatrol/img-3.jpg"],
    whatsappLink: "https://wa.me/919999999999?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/pawpatrol",
    picfolder: "/theme/pawpatrol",
  },
];


const CatalogueSection = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(themes);
  const navigate = useNavigate();  // <--- define here

  const fuse = new Fuse(themes, {
    keys: ["name", "keywords"],
    includeScore: true,
    threshold: 0.4,
  });

  useEffect(() => {
    const normalized = query.trim().toLowerCase();
    const results = fuse.search(normalized);
    setSuggestions(normalized ? results.map((r) => r.item) : themes);
  }, [query]);

  return (
    <section id="catalogue" className="py-10 bg-pink-50">
      <div className="container mx-auto text-center px-2">
        <motion.h2
          className="text-3xl font-bold text-pink-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Cake Themes
        </motion.h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a theme (e.g., princess, batman)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 md:w-1/2 px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
          {suggestions.length === 0 && query && (
            <p className="mt-2 text-xs text-gray-500">No matching themes found.</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {suggestions.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 rounded-md shadow-md min-h-[360px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                {theme.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-60 flex items-center justify-center overflow-hidden rounded-t-md bg-white"
                  >
                    <img
                      src={img}
                      alt={`${theme.name} ${idx + 1}`}
                      className="object-contain h-full"
                    />
                  </div>
                ))}
              </Carousel>
              <h3 className="text-base font-semibold text-pink-600 mt-2">{theme.name}</h3>
              <p className="text-sm mt-1 text-gray-700 line-clamp-3">{theme.description}</p>

              <div className="flex justify-center items-center gap-2 mt-2 flex-nowrap">
                <a
                  href={theme.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs py-[3px] px-[6px] sm:py-1 sm:px-2 rounded-full shadow"
                >
                  Order on WhatsApp
                </a>

                <button
                  onClick={() => {
                    navigate(theme.galleryPage);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-[10px] sm:text-xs py-[3px] px-[6px] sm:py-1 sm:px-2 rounded-full shadow"
                >
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;

