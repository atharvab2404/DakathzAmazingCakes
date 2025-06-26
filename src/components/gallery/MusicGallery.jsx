import React from "react";
import { Link } from "react-router-dom";

const MusicGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869035/img-1_hvqqz3.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869037/img-2_hwvrtv.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-3_brnlk1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869039/img-4_hwkvxj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869039/img-5_hmxztu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869039/img-6_ca34e4.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869039/img-7_s6ec0d.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869040/img-8_hmhjol.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869039/img-9_og4q5o.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869035/img-10_yhe9oz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869035/img-11_kccmnj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869036/img-12_ynzwn9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-13_wghhkz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869036/img-14_uebyov.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869036/img-15_huin5o.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869037/img-16_cdmcxz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869037/img-17_gavudn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869037/img-18_pkpapu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869037/img-19_vfbhca.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-20_bsh7hn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-21_u9q1w8.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-22_yas2bp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-23_u5pxt2.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Music Themed Cake Gallery
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

export default MusicGallery;