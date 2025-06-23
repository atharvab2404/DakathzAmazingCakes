import React from "react";
import { Link } from "react-router-dom";

const MinionsGallery = () => {
  const images = [
    "/theme/minions/img-1.jpg",
    "/theme/minions/img-2.jpg",
    "/theme/minions/img-3.jpg",
    "/theme/minions/img-4.jpg",
    "/theme/minions/img-5.jpg",
    "/theme/minions/img-6.jpg",
    "/theme/minions/img-7.jpg",
    "/theme/minions/img-8.jpg",
    "/theme/minions/img-9.jpg",
    "/theme/minions/img-10.jpg",
    "/theme/minions/img-11.jpg",
    "/theme/minions/img-12.jpg"
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