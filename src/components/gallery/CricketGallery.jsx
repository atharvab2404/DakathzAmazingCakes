import React from "react";
import { Link } from "react-router-dom";

const CricketGallery = () => {
  const images = [
    "/theme/cricket/img-1.jpg",
    "/theme/cricket/img-2.jpg",
    "/theme/cricket/img-3.jpg",
    "/theme/cricket/img-4.jpg",
    "/theme/cricket/img-5.jpg",
    "/theme/cricket/img-6.jpg",
    "/theme/cricket/img-7.jpg",
    "/theme/cricket/img-8.jpg",
    "/theme/cricket/img-9.jpg",
    "/theme/cricket/img-10.jpg",
    "/theme/cricket/img-11.jpg",
    "/theme/cricket/img-12.jpg",
    "/theme/cricket/img-13.jpg",
    "/theme/cricket/img-14.jpg",
    "/theme/cricket/img-15.jpg",
    "/theme/cricket/img-16.jpg",
    "/theme/cricket/img-17.jpg",
    "/theme/cricket/img-18.jpg",
    "/theme/cricket/img-19.jpg",
    "/theme/cricket/img-20.jpg",
    "/theme/cricket/img-21.jpg",
    "/theme/cricket/img-22.jpg",
    "/theme/cricket/img-23.jpg",
    "/theme/cricket/img-24.jpg",
    "/theme/cricket/img-25.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cricket Themed Cake Gallery
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

export default CricketGallery;