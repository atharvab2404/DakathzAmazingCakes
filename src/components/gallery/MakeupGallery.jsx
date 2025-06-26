import React from "react";
import { Link } from "react-router-dom";

const MakeupGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767993/img-1_sgbets.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767997/img-2_wz8hs9.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767996/img-3_obqb5s.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767997/img-4_eytoyd.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767997/img-5_gpwuqx.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767997/img-6_cquyhz.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767998/img-7_dghqu8.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767999/img-8_g6nxxc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767998/img-9_b0m4yj.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767993/img-10_byxv0a.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767993/img-11_bagw7j.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767993/img-12_qzirr4.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767994/img-13_x2zi2z.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768000/img-14_fkgwjd.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767995/img-15_m65jwz.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767994/img-16_tqrbhg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767994/img-17_toah1u.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767995/img-18_olithn.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767995/img-19_q02llc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767999/img-20_d48lja.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768001/img-21_dnstsc.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Makeup Themed Cake Gallery
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

export default MakeupGallery;