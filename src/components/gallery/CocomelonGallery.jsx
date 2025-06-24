import React from "react";
import { Link } from "react-router-dom";

const CocomelonGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741458/img-1_nsj3cp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741462/img-2_f1tawq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741463/img-3_jlefbk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741464/img-4_dzzjnm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741465/img-5_yciiub.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741466/img-6_fuiqqy.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741467/img-7_noylap.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741467/img-8_bskvtv.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741469/img-9_dc8i09.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741459/img-10_ijih5m.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741499/img-11_dfwcxq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741461/img-12_ftq2jp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741461/img-13_nzj3zl.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741464/img-14_yyuwhf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741461/img-15_ugyebo.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741462/img-16_hfexsd.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cocomelon Themed Cake Gallery
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

export default CocomelonGallery;