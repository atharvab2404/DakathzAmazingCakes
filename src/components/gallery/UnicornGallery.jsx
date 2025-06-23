import React from "react";
import { Link } from "react-router-dom";

const UnicornGallery = () => {
  const images = [
    "/theme/unicorn/img-1.jpg",
    "/theme/unicorn/img-2.jpg",
    "/theme/unicorn/img-3.jpg",
    "/theme/unicorn/img-4.jpg",
    "/theme/unicorn/img-5.jpg",
    "/theme/unicorn/img-6.jpg",
    "/theme/unicorn/img-7.jpg",
    "/theme/unicorn/img-8.jpg",
    "/theme/unicorn/img-9.jpg",
    "/theme/unicorn/img-10.jpg",
    "/theme/unicorn/img-11.jpg",
    "/theme/unicorn/img-12.jpg",
    "/theme/unicorn/img-13.jpg",
    "/theme/unicorn/img-14.jpg",
    "/theme/unicorn/img-15.jpg",
    "/theme/unicorn/img-16.jpg",
    "/theme/unicorn/img-17.jpg",
    "/theme/unicorn/img-18.jpg",
    "/theme/unicorn/img-19.jpg",
    "/theme/unicorn/img-20.jpg",
    "/theme/unicorn/img-21.jpg",
    "/theme/unicorn/img-22.jpg",
    "/theme/unicorn/img-23.jpg",
    "/theme/unicorn/img-24.jpg",
    "/theme/unicorn/img-25.jpg",
    "/theme/unicorn/img-26.jpg",
    "/theme/unicorn/img-27.jpg",
    "/theme/unicorn/img-28.jpg",
    "/theme/unicorn/img-29.jpg",
    "/theme/unicorn/img-30.jpg",
    "/theme/unicorn/img-31.jpg",
    "/theme/unicorn/img-32.jpg",
    "/theme/unicorn/img-33.jpg",
    "/theme/unicorn/img-34.jpg",
    "/theme/unicorn/img-35.jpg",
    "/theme/unicorn/img-36.jpg",
    "/theme/unicorn/img-37.jpg",
    "/theme/unicorn/img-38.jpg",
    "/theme/unicorn/img-39.jpg",
    "/theme/unicorn/img-40.jpg",
    "/theme/unicorn/img-41.jpg",
    "/theme/unicorn/img-42.jpg",
    "/theme/unicorn/img-43.jpg",
    "/theme/unicorn/img-44.jpg",
    "/theme/unicorn/img-45.jpg",
    "/theme/unicorn/img-46.jpg",
    "/theme/unicorn/img-47.jpg",
    "/theme/unicorn/img-48.jpg",
    "/theme/unicorn/img-49.jpg",
    "/theme/unicorn/img-50.jpg",
    "/theme/unicorn/img-51.jpg",
    "/theme/unicorn/img-52.jpg",
    "/theme/unicorn/img-53.jpg",
    "/theme/unicorn/img-54.jpg",
    "/theme/unicorn/img-55.jpg",
    "/theme/unicorn/img-56.jpg",
    "/theme/unicorn/img-57.jpg",
    "/theme/unicorn/img-58.jpg",
    "/theme/unicorn/img-59.jpg",
    "/theme/unicorn/img-60.jpg",
    "/theme/unicorn/img-61.jpg",
    "/theme/unicorn/img-62.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Unicorn Themed Cake Gallery
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

export default UnicornGallery;