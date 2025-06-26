import React from "react";
import { Link } from "react-router-dom";

const TravelGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-1_mitcgc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-2_uhruhu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-3_nwunoi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-4_loitnm.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-5_dkszqa.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-6_pqtsms.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-7_f9siyy.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-8_hhbool.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869034/img-9_zmeb3r.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-10_fsxh5k.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869032/img-11_y3faty.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869032/img-12_fmfquh.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869032/img-13_v8mqe6.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869032/img-14_vkp4ie.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869032/img-15_jy3kot.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869032/img-16_qud1oh.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Travel Themed Cake Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-fr">
        {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-md shadow-lg bg-white flex items-center justify-center aspect-square">
            <img
                src={src}
                alt={`Cake ${idx + 1}`}
                className="object-contain max-h-full"
                loading="lazy"
            />
            </div>
        ))}
       </div>
      <div className="mt-6 text-center">
        <Link to="/" className="text-pink-600 hover:underline">Back to Catalogue</Link>
      </div>
    </div>
  );
};

export default TravelGallery;