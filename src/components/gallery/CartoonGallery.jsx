import React from "react";
import { Link } from "react-router-dom";

const CartoonGallery = () => {
  const images = [
    "/theme/cartoon/img-1.jpg",
    "/theme/cartoon/img-2.jpg",
    "/theme/cartoon/img-3.jpg",
    "/theme/cartoon/img-4.jpg",
    "/theme/cartoon/img-5.jpg",
    "/theme/cartoon/img-6.jpg",
    "/theme/cartoon/img-7.jpg",
    "/theme/cartoon/img-8.jpg",
    "/theme/cartoon/img-9.jpg",
    "/theme/cartoon/img-10.jpg",
    "/theme/cartoon/img-11.jpg",
    "/theme/cartoon/img-12.jpg",
    "/theme/cartoon/img-13.jpg",
    "/theme/cartoon/img-14.jpg",
    "/theme/cartoon/img-15.jpg",
    "/theme/cartoon/img-16.jpg",
    "/theme/cartoon/img-17.jpg",
    "/theme/cartoon/img-18.jpg",
    "/theme/cartoon/img-19.jpg",
    "/theme/cartoon/img-20.jpg",
    "/theme/cartoon/img-21.jpg",
    "/theme/cartoon/img-22.jpg",
    "/theme/cartoon/img-23.jpg",
    "/theme/cartoon/img-24.jpg",
    "/theme/cartoon/img-25.jpg",
    "/theme/cartoon/img-26.jpg",
    "/theme/cartoon/img-27.jpg",
    "/theme/cartoon/img-28.jpg",
    "/theme/cartoon/img-29.jpg",
    "/theme/cartoon/img-30.jpg",
    "/theme/cartoon/img-31.jpg",
    "/theme/cartoon/img-32.jpg",
    "/theme/cartoon/img-33.jpg",
    "/theme/cartoon/img-34.jpg",
    "/theme/cartoon/img-35.jpg",
    "/theme/cartoon/img-36.jpg",
    "/theme/cartoon/img-37.jpg",
    "/theme/cartoon/img-38.jpg",
    "/theme/cartoon/img-39.jpg",
    "/theme/cartoon/img-40.jpg",
    "/theme/cartoon/img-41.jpg",
    "/theme/cartoon/img-42.jpg",
    "/theme/cartoon/img-43.jpg",
    "/theme/cartoon/img-44.jpg",
    "/theme/cartoon/img-45.jpg",
    "/theme/cartoon/img-46.jpg",
    "/theme/cartoon/img-47.jpg",
    "/theme/cartoon/img-48.jpg",
    "/theme/cartoon/img-49.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cartoon Character Themed Cake Gallery
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

export default CartoonGallery;