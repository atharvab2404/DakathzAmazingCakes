import React from "react";
import { Link } from "react-router-dom";

const SpidermanGallery = () => {
  const images = [
    "/theme/spiderman/img-1.jpg",
    "/theme/spiderman/img-2.jpg",
    "/theme/spiderman/img-3.jpg",
    "/theme/spiderman/img-4.jpg",
    "/theme/spiderman/img-5.jpg",
    "/theme/spiderman/img-6.jpg",
    "/theme/spiderman/img-7.jpg",
    "/theme/spiderman/img-8.jpg",
    "/theme/spiderman/img-9.jpg",
    "/theme/spiderman/img-10.jpg",
    "/theme/spiderman/img-11.jpg",
    "/theme/spiderman/img-12.jpg",
    "/theme/spiderman/img-13.jpg",
    "/theme/spiderman/img-14.jpg",
    "/theme/spiderman/img-15.jpg",
    "/theme/spiderman/img-16.jpg",
    "/theme/spiderman/img-17.jpg",
    "/theme/spiderman/img-18.jpg",
    "/theme/spiderman/img-19.jpg",
    "/theme/spiderman/img-20.jpg",
    "/theme/spiderman/img-21.jpg",
    "/theme/spiderman/img-22.jpg",
    "/theme/spiderman/img-23.jpg",
    "/theme/spiderman/img-24.jpg",
    "/theme/spiderman/img-25.jpg",
    "/theme/spiderman/img-26.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Spiderman Themed Cake Gallery
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

export default SpidermanGallery;