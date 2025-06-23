import React from "react";
import { Link } from "react-router-dom";

const JungleGallery = () => {
  const images = [
    "/theme/jungle/img-1.jpg",
    "/theme/jungle/img-2.jpg",
    "/theme/jungle/img-3.jpg",
    "/theme/jungle/img-4.jpg",
    "/theme/jungle/img-5.jpg",
    "/theme/jungle/img-6.jpg",
    "/theme/jungle/img-7.jpg",
    "/theme/jungle/img-8.jpg",
    "/theme/jungle/img-9.jpg",
    "/theme/jungle/img-10.jpg",
    "/theme/jungle/img-11.jpg",
    "/theme/jungle/img-12.jpg",
    "/theme/jungle/img-13.jpg",
    "/theme/jungle/img-14.jpg",
    "/theme/jungle/img-15.jpg",
    "/theme/jungle/img-16.jpg",
    "/theme/jungle/img-17.jpg",
    "/theme/jungle/img-18.jpg",
    "/theme/jungle/img-19.jpg",
    "/theme/jungle/img-20.jpg",
    "/theme/jungle/img-21.jpg",
    "/theme/jungle/img-22.jpg",
    "/theme/jungle/img-23.jpg",
    "/theme/jungle/img-24.jpg",
    "/theme/jungle/img-25.jpg",
    "/theme/jungle/img-26.jpg",
    "/theme/jungle/img-27.jpg",
    "/theme/jungle/img-28.jpg",
    "/theme/jungle/img-29.jpg",
    "/theme/jungle/img-30.jpg",
    "/theme/jungle/img-31.jpg",
    "/theme/jungle/img-32.jpg",
    "/theme/jungle/img-33.jpg",
    "/theme/jungle/img-34.jpg",
    "/theme/jungle/img-35.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Jungle Themed Cake Gallery
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

export default JungleGallery;