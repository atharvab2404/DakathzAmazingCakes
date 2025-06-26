import React from "react";
import { Link } from "react-router-dom";

const SpaceGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869010/img-1_sqjn9k.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-2_z9ediq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-3_manvcf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-4_l1cf0c.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-5_k0sm2s.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869013/img-6_rk3s8o.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869013/img-7_kaemfx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869013/img-8_he2jhn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869013/img-9_s0edls.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869010/img-10_z6gxph.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869010/img-11_v761ws.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869010/img-12_kzwk9a.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869011/img-13_q1q1rd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869011/img-14_nvpl4j.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869011/img-15_kldewh.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869011/img-16_noohvx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869011/img-17_zdgann.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869011/img-18_o1zbkh.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-19_azcjya.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-20_z6xjsq.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Space Themed Cake Gallery
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

export default SpaceGallery;