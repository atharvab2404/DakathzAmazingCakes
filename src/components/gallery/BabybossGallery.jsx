import React from "react";
import { Link } from "react-router-dom";

const BabybossGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741172/img-1_m5qg81.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741178/img-2_r1tlbr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741179/img-3_e7fxw5.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741180/img-4_sbdff4.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741180/img-5_ljdav3.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741181/img-6_ausmef.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741181/img-7_qy0a7v.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741182/img-8_y98dmb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741183/img-9_m4vgeh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741172/img-10_mvrgrz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741173/img-11_vsj85l.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741173/img-12_elq9xt.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741174/img-13_ypny3q.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741174/img-14_sw76zc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741175/img-15_qpy7gd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741175/img-16_bdsi2x.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741176/img-17_zmcelu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741176/img-18_fy7lzx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741177/img-19_fy7gdr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741178/img-20_zdgrps.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741179/img-21_og6yy5.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Babyboss Themed Cake Gallery
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

export default BabybossGallery;