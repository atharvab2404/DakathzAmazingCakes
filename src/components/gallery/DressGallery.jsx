import React from "react";
import { Link } from "react-router-dom";

const DressGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749286/img-1_jjkhwj.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749311/img-2_chuxgx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749315/img-3_dhl0aa.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749318/img-4_xknmhu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749321/img-5_hunptc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749324/img-6_xkcgnj.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749327/img-7_mtwajv.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749330/img-8_cc4x1c.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749333/img-9_vsftvh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749289/img-10_wbx3vc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749292/img-11_kugqvx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749295/img-12_b5atoo.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749299/img-13_x2wfrc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749302/img-14_bsx7wy.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749305/img-15_rnf15e.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749308/img-16_bvzxpe.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Dress Themed Cake Gallery
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

export default DressGallery;