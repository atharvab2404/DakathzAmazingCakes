import React from "react";
import { Link } from "react-router-dom";

const MinecraftGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-1_jteker.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867928/img-2_sqdjt6.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867929/img-3_wvczkt.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867929/img-4_h8ycsb.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867929/img-5_i6brn7.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867931/img-6_ft22je.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867929/img-7_kf7rvg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867930/img-8_gxsw4l.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867930/img-9_myuwxn.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-10_jhf4zd.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-11_maoze3.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-12_vbtdjb.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867928/img-13_yzw4zq.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867928/img-14_iqelud.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867928/img-15_vgqjfq.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-16_fjyyei.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-17_cizdpz.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867929/img-18_zpmnpn.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867928/img-19_uflmcv.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Minecraft Themed Cake Gallery
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

export default MinecraftGallery;