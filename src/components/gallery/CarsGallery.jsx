import React from "react";
import { Link } from "react-router-dom";

const CarsGallery = () => {
  const images = [
    "/theme/cars/img-1.jpg",
    "/theme/cars/img-2.jpg",
    "/theme/cars/img-3.jpg",
    "/theme/cars/img-4.jpg",
    "/theme/cars/img-5.jpg",
    "/theme/cars/img-6.jpg",
    "/theme/cars/img-7.jpg",
    "/theme/cars/img-8.jpg",
    "/theme/cars/img-9.jpg",
    "/theme/cars/img-10.jpg",
    "/theme/cars/img-11.jpg",
    "/theme/cars/img-12.jpg",
    "/theme/cars/img-13.jpg",
    "/theme/cars/img-14.jpg",
    "/theme/cars/img-15.jpg",
    "/theme/cars/img-16.jpg",
    "/theme/cars/img-17.jpg",
    "/theme/cars/img-18.jpg",
    "/theme/cars/img-19.jpg",
    "/theme/cars/img-20.jpg",
    "/theme/cars/img-21.jpg",
    "/theme/cars/img-22.jpg",
    "/theme/cars/img-23.jpg",
    "/theme/cars/img-24.jpg",
    "/theme/cars/img-25.jpg",
    "/theme/cars/img-26.jpg",
    "/theme/cars/img-27.jpg",
    "/theme/cars/img-28.jpg",
    "/theme/cars/img-29.jpg",
    "/theme/cars/img-30.jpg",
    "/theme/cars/img-31.jpg",
    "/theme/cars/img-32.jpg",
    "/theme/cars/img-33.jpg",
    "/theme/cars/img-34.jpg",
    "/theme/cars/img-35.jpg",
    "/theme/cars/img-36.jpg",
    "/theme/cars/img-37.jpg",
    "/theme/cars/img-38.jpg",
    "/theme/cars/img-39.jpg",
    "/theme/cars/img-40.jpg",
    "/theme/cars/img-41.jpg",
    "/theme/cars/img-42.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cars Themed Cake Gallery
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

export default CarsGallery;