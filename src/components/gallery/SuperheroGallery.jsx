import React from "react";
import { Link } from "react-router-dom";

const SuperheroGallery = () => {
  const images = [
    "/theme/superhero/img-1.jpg",
    "/theme/superhero/img-2.jpg",
    "/theme/superhero/img-3.jpg",
    "/theme/superhero/img-4.jpg",
    "/theme/superhero/img-5.jpg",
    "/theme/superhero/img-6.jpg",
    "/theme/superhero/img-7.jpg",
    "/theme/superhero/img-8.jpg",
    "/theme/superhero/img-9.jpg",
    "/theme/superhero/img-10.jpg",
    "/theme/superhero/img-11.jpg",
    "/theme/superhero/img-12.jpg",
    "/theme/superhero/img-13.jpg",
    "/theme/superhero/img-14.jpg",
    "/theme/superhero/img-15.jpg",
    "/theme/superhero/img-16.jpg",
    "/theme/superhero/img-17.jpg",
    "/theme/superhero/img-18.jpg",
    "/theme/superhero/img-19.jpg",
    "/theme/superhero/img-20.jpg",
    "/theme/superhero/img-21.jpg",
    "/theme/superhero/img-22.jpg",
    "/theme/superhero/img-23.jpg",
    "/theme/superhero/img-24.jpg",
    "/theme/superhero/img-25.jpg",
    "/theme/superhero/img-26.jpg",
    "/theme/superhero/img-27.jpg",
    "/theme/superhero/img-28.jpg",
    "/theme/superhero/img-29.jpg",
    "/theme/superhero/img-30.jpg",
    "/theme/superhero/img-31.jpg",
    "/theme/superhero/img-32.jpg",
    "/theme/superhero/img-33.jpg",
    "/theme/superhero/img-34.jpg",
    "/theme/superhero/img-35.jpg",
    "/theme/superhero/img-36.jpg",
    "/theme/superhero/img-37.jpg",
    "/theme/superhero/img-38.jpg",
    "/theme/superhero/img-39.jpg",
    "/theme/superhero/img-40.jpg",
    "/theme/superhero/img-41.jpg",
    "/theme/superhero/img-42.jpg",
    "/theme/superhero/img-43.jpg",
    "/theme/superhero/img-44.jpg",
    "/theme/superhero/img-45.jpg",
    "/theme/superhero/img-46.jpg",
    "/theme/superhero/img-47.jpg",
    "/theme/superhero/img-48.jpg",
    "/theme/superhero/img-49.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Superhero Themed Cake Gallery
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

export default SuperheroGallery;