import React from "react";
import { Link } from "react-router-dom";

const MickeyGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-1_uxkb5l.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-2_l4m5pp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-3_thpgzv.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-4_vdfwor.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-5_jocejz.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-6_xhbzrs.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-7_gpmfko.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-8_fo080r.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767813/img-9_nif8nk.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-10_ws4gly.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767810/img-11_azdnrv.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767810/img-12_hmfkqw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767810/img-13_b6fvrc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-14_pkjrw9.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-15_uj93t0.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-16_rkkcq2.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-17_f3utbi.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-18_eizz71.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-19_vrikeb.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Mickey Mouse Themed Cake Gallery
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

export default MickeyGallery;