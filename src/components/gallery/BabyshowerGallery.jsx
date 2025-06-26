import React from "react";
import { Link } from "react-router-dom";

const BabyshowerGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741215/img-1_umd6ka.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741222/img-2_iwspzi.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741222/img-3_xcic35.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741223/img-4_qfk7cd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741223/img-5_rbofgd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741224/img-6_pkfml7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741225/img-7_kpgzvf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741225/img-8_agd2ed.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741226/img-9_jifnm0.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741216/img-10_bk7sde.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741216/img-11_ekealc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741217/img-12_vd5t9l.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741218/img-13_w6inyh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741219/img-14_tukeil.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741219/img-15_mbpiy8.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741220/img-16_aezpjo.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741221/img-17_clwurr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741221/img-18_vhfsyc.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Babyshower Themed Cake Gallery
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

export default BabyshowerGallery;