import React from "react";
import { Link } from "react-router-dom";

const PrincessGallery = () => {
  const images = [
    "/theme/princess/img-1.jpg",
    "/theme/princess/img-2.jpg",
    "/theme/princess/img-3.jpg",
    "/theme/princess/img-4.jpg",
    "/theme/princess/img-5.jpg",
    "/theme/princess/img-6.jpg",
    "/theme/princess/img-7.jpg",
    "/theme/princess/img-8.jpg",
    "/theme/princess/img-9.jpg",
    "/theme/princess/img-10.jpg",
    "/theme/princess/img-11.jpg",
    "/theme/princess/img-12.jpg",
    "/theme/princess/img-13.jpg",
    "/theme/princess/img-14.jpg",
    "/theme/princess/img-15.jpg",
    "/theme/princess/img-16.jpg",
    "/theme/princess/img-17.jpg",
    "/theme/princess/img-18.jpg",
    "/theme/princess/img-19.jpg",
    "/theme/princess/img-20.jpg",
    "/theme/princess/img-21.jpg",
    "/theme/princess/img-22.jpg",
    "/theme/princess/img-23.jpg",
    "/theme/princess/img-24.jpg",
    "/theme/princess/img-25.jpg",
    "/theme/princess/img-26.jpg",
    "/theme/princess/img-27.jpg",
    "/theme/princess/img-28.jpg",
    "/theme/princess/img-29.jpg",
    "/theme/princess/img-30.jpg",
    "/theme/princess/img-31.jpg",
    "/theme/princess/img-32.jpg",
    "/theme/princess/img-33.jpg",
    "/theme/princess/img-34.jpg",
    "/theme/princess/img-35.jpg",
    "/theme/princess/img-36.jpg",
    "/theme/princess/img-37.jpg",
    "/theme/princess/img-38.jpg",
    "/theme/princess/img-39.jpg",
    "/theme/princess/img-40.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Princess Themed Cake Gallery
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

export default PrincessGallery;