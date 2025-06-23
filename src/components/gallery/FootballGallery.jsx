import React from "react";
import { Link } from "react-router-dom";

const FootballGallery = () => {
  const images = [
    "/theme/football/img-1.jpg",
    "/theme/football/img-2.jpg",
    "/theme/football/img-3.jpg",
    "/theme/football/img-4.jpg",
    "/theme/football/img-5.jpg",
    "/theme/football/img-6.jpg",
    "/theme/football/img-7.jpg",
    "/theme/football/img-8.jpg",
    "/theme/football/img-9.jpg",
    "/theme/football/img-10.jpg",
    "/theme/football/img-11.jpg",
    "/theme/football/img-12.jpg",
    "/theme/football/img-13.jpg",
    "/theme/football/img-14.jpg",
    "/theme/football/img-15.jpg",
    "/theme/football/img-16.jpg",
    "/theme/football/img-17.jpg",
    "/theme/football/img-18.jpg",
    "/theme/football/img-19.jpg",
    "/theme/football/img-20.jpg",
    "/theme/football/img-21.jpg",
    "/theme/football/img-22.jpg",
    "/theme/football/img-23.jpg",
    "/theme/football/img-24.jpg",
    "/theme/football/img-25.jpg",
    "/theme/football/img-26.jpg",
    "/theme/football/img-27.jpg",
    "/theme/football/img-28.jpg",
    "/theme/football/img-29.jpg",
    "/theme/football/img-30.jpg",
    "/theme/football/img-31.jpg",
    "/theme/football/img-32.jpg",
    "/theme/football/img-33.jpg",
    "/theme/football/img-34.jpg",
    "/theme/football/img-35.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Football Themed Cake Gallery
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

export default FootballGallery;