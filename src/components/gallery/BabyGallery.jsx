import React from "react";
import { Link } from "react-router-dom";

const BabyGallery = () => {
  const images = [
    "/theme/baby/img-1.jpg",
    "/theme/baby/img-2.jpg",
    "/theme/baby/img-3.jpg",
    "/theme/baby/img-4.jpg",
    "/theme/baby/img-5.jpg",
    "/theme/baby/img-6.jpg",
    "/theme/baby/img-7.jpg",
    "/theme/baby/img-8.jpg",
    "/theme/baby/img-9.jpg",
    "/theme/baby/img-10.jpg",
    "/theme/baby/img-11.jpg",
    "/theme/baby/img-12.jpg",
    "/theme/baby/img-13.jpg",
    "/theme/baby/img-14.jpg",
    "/theme/baby/img-15.jpg",
    "/theme/baby/img-16.jpg",
    "/theme/baby/img-17.jpg",
    "/theme/baby/img-18.jpg",
    "/theme/baby/img-19.jpg",
    "/theme/baby/img-20.jpg",
    "/theme/baby/img-21.jpg",
    "/theme/baby/img-22.jpg",
    "/theme/baby/img-23.jpg",
    "/theme/baby/img-24.jpg",
    "/theme/baby/img-25.jpg",
    "/theme/baby/img-26.jpg",
    "/theme/baby/img-27.jpg",
    "/theme/baby/img-28.jpg",
    "/theme/baby/img-29.jpg",
    "/theme/baby/img-30.jpg",
    "/theme/baby/img-31.jpg",
    "/theme/baby/img-32.jpg",
    "/theme/baby/img-33.jpg",
    "/theme/baby/img-34.jpg",
    "/theme/baby/img-35.jpg",
    "/theme/baby/img-36.jpg",
    "/theme/baby/img-37.jpg",
    "/theme/baby/img-38.jpg",
    "/theme/baby/img-39.jpg",
    "/theme/baby/img-40.jpg",
    "/theme/baby/img-41.jpg",
    "/theme/baby/img-42.jpg",
    "/theme/baby/img-43.jpg",
    "/theme/baby/img-44.jpg",
    "/theme/baby/img-45.jpg",
    "/theme/baby/img-46.jpg",
    "/theme/baby/img-47.jpg",
    "/theme/baby/img-48.jpg",
    "/theme/baby/img-49.jpg",
    "/theme/baby/img-50.jpg",
    "/theme/baby/img-51.jpg",
    "/theme/baby/img-52.jpg",
    "/theme/baby/img-53.jpg",
    "/theme/baby/img-54.jpg",
    "/theme/baby/img-55.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Baby Themed Cake Gallery
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

export default BabyGallery;