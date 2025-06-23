import React from "react";
import { Link } from "react-router-dom";

const TravelGallery = () => {
  const images = [
    "/theme/travel/img-1.jpg",
    "/theme/travel/img-2.jpg",
    "/theme/travel/img-3.jpg",
    "/theme/travel/img-4.jpg",
    "/theme/travel/img-5.jpg",
    "/theme/travel/img-6.jpg",
    "/theme/travel/img-7.jpg",
    "/theme/travel/img-8.jpg",
    "/theme/travel/img-9.jpg",
    "/theme/travel/img-10.jpg",
    "/theme/travel/img-11.jpg",
    "/theme/travel/img-12.jpg",
    "/theme/travel/img-13.jpg",
    "/theme/travel/img-14.jpg",
    "/theme/travel/img-15.jpg",
    "/theme/travel/img-16.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Travel Themed Cake Gallery
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

export default TravelGallery;