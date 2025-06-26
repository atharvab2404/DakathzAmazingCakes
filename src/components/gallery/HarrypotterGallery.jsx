import React from "react";
import { Link } from "react-router-dom";

const HarrypotterGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768003/img-1_brdyoc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768010/img-2_izx95t.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768011/img-3_ssqkjm.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768011/img-4_toksiv.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768011/img-5_pym5hw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768013/img-6_zwrhwx.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768019/img-7_s2xhx0.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768016/img-8_potlgu.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768016/img-9_pztglv.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768003/img-10_jzgpvl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768004/img-11_avhd4p.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768005/img-12_as7vge.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768007/img-13_cr44k3.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768008/img-14_ydly9f.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768008/img-15_mtrtev.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768008/img-16_udzrhp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768009/img-17_kolfkw.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Harry Potter Themed Cake Gallery
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

export default HarrypotterGallery;