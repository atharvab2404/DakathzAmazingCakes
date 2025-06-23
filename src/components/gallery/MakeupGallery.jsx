import React from "react";
import { Link } from "react-router-dom";

const MakeupGallery = () => {
  const images = [
    "/theme/makeup/img-1.jpg",
    "/theme/makeup/img-2.jpg",
    "/theme/makeup/img-3.jpg",
    "/theme/makeup/img-4.jpg",
    "/theme/makeup/img-5.jpg",
    "/theme/makeup/img-6.jpg",
    "/theme/makeup/img-7.jpg",
    "/theme/makeup/img-8.jpg",
    "/theme/makeup/img-9.jpg",
    "/theme/makeup/img-10.jpg",
    "/theme/makeup/img-11.jpg",
    "/theme/makeup/img-12.jpg",
    "/theme/makeup/img-13.jpg",
    "/theme/makeup/img-14.jpg",
    "/theme/makeup/img-15.jpg",
    "/theme/makeup/img-16.jpg",
    "/theme/makeup/img-17.jpg",
    "/theme/makeup/img-18.jpg",
    "/theme/makeup/img-19.jpg",
    "/theme/makeup/img-20.jpg",
    "/theme/makeup/img-21.jpg"
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