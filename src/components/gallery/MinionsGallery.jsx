import React from "react";
import { Link } from "react-router-dom";

const MinionsGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767999/img-1_vbrioc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768593/img-2_l7u6ev.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768002/img-3_cdy38z.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768001/img-4_o7myjl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768002/img-5_ejpnwi.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768003/img-6_wzmphl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768004/img-7_h9baoh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768004/img-8_q4az0b.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768003/img-9_niwunf.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768592/img-10_arrubm.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768592/img-11_eeb8va.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768594/img-12_fjbqni.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Minions Themed Cake Gallery
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

export default MinionsGallery;