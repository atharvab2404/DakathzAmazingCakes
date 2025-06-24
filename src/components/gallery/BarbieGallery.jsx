import React from "react";
import { Link } from "react-router-dom";

const BarbieGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741227/img-1_quj9al.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741230/img-2_wmxjov.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741232/img-3_otehoq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741232/img-4_o9dho5.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741232/img-5_fpfvdu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741233/img-6_p3s2pb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741233/img-7_kwnevn.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741234/img-8_lrzbjt.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741235/img-9_cayhs9.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741227/img-10_pza7do.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741228/img-11_gbu0gq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741228/img-12_kcuupk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741229/img-13_croyk3.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741230/img-14_mmrblz.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Barbie Themed Cake Gallery
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

export default BarbieGallery;