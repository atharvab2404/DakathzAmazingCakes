import React from "react";
import { Link } from "react-router-dom";

const CakeArt = () => {
  const images = [
    "/theme/special/img-1.jpg",
    "/theme/special/img-2.jpg",
    "/theme/special/img-3.jpg",
    "/theme/special/img-4.jpg",
    "/theme/special/img-5.jpg",
    "/theme/special/img-6.jpg",
    "/theme/special/img-7.jpg",
    "/theme/special/img-8.jpg",
    "/theme/special/img-9.jpg",
    "/theme/special/img-10.jpg",
    "/theme/special/img-11.jpg",
    "/theme/special/img-12.jpg",
    "/theme/special/img-13.jpg",
    "/theme/special/img-14.jpg",
    "/theme/special/img-15.jpg",
    "/theme/special/img-16.jpg",
    "/theme/special/img-17.jpg",
    "/theme/special/img-18.jpg",
    "/theme/special/img-19.jpg",
    "/theme/special/img-20.jpg",
    "/theme/special/img-21.jpg",
    "/theme/special/img-22.jpg",
    "/theme/special/img-23.jpg",
    "/theme/special/img-24.jpg",
    "/theme/special/img-25.jpg",
    "/theme/special/img-26.jpg",
    "/theme/special/img-27.jpg",
    "/theme/special/img-28.jpg",
    "/theme/special/img-29.jpg",
    "/theme/special/img-30.jpg",
    "/theme/special/img-31.jpg",
    "/theme/special/img-32.jpg",
    "/theme/special/img-33.jpg",
    "/theme/special/img-34.jpg",
    "/theme/special/img-35.jpg",
    "/theme/special/img-36.jpg",
    "/theme/special/img-37.jpg",
    "/theme/special/img-38.jpg",
    "/theme/special/img-39.jpg",
    "/theme/special/img-40.jpg",
    "/theme/special/img-41.jpg",
    "/theme/special/img-42.jpg",
    "/theme/special/img-43.jpg",
    "/theme/special/img-44.jpg",
    "/theme/special/img-45.jpg",
    "/theme/special/img-46.jpg",
    "/theme/special/img-47.jpg",
    "/theme/special/img-48.jpg",
    "/theme/special/img-49.jpg",
    "/theme/special/img-50.jpg",
    "/theme/special/img-51.jpg",
    "/theme/special/img-52.jpg",
    "/theme/special/img-53.jpg",
    "/theme/special/img-54.jpg",
    "/theme/special/img-55.jpg",
    "/theme/special/img-56.jpg",
    "/theme/special/img-57.jpg",
    "/theme/special/img-58.jpg",
    "/theme/special/img-59.jpg",
    "/theme/special/img-60.jpg",
    "/theme/special/img-61.jpg",
    "/theme/special/img-62.jpg",
    "/theme/special/img-63.jpg",
    "/theme/special/img-64.jpg",
    "/theme/special/img-65.jpg",
    "/theme/special/img-66.jpg",
    "/theme/special/img-67.jpg",
    "/theme/special/img-68.jpg",
    "/theme/special/img-69.jpg",
    "/theme/special/img-70.jpg",
    "/theme/special/img-71.jpg",
    "/theme/special/img-72.jpg",
    "/theme/special/img-73.jpg",
    "/theme/special/img-74.jpg",
    "/theme/special/img-75.jpg",
    "/theme/special/img-76.jpg",
    "/theme/special/img-77.jpg",
    "/theme/special/img-78.jpg",
    "/theme/special/img-79.jpg",
    "/theme/special/img-80.jpg",
    "/theme/special/img-81.jpg",
    "/theme/special/img-82.jpg",
    "/theme/special/img-83.jpg",
    "/theme/special/img-84.jpg",
    "/theme/special/img-85.jpg",
    "/theme/special/img-86.jpg",
    "/theme/special/img-87.jpg",
    "/theme/special/img-88.jpg",
    "/theme/special/img-89.jpg",
    "/theme/special/img-90.jpg",
    "/theme/special/img-91.jpg",
    "/theme/special/img-92.jpg",
    "/theme/special/img-93.jpg",
    "/theme/special/img-94.jpg",
    "/theme/special/img-95.jpg",
    "/theme/special/img-96.jpg",
    "/theme/special/img-97.jpg",
    "/theme/special/img-98.jpg",
    "/theme/special/img-99.jpg",
    "/theme/special/img-100.jpg",
    "/theme/special/img-101.jpg",
    "/theme/special/img-102.jpg",
    "/theme/special/img-103.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Special Realistic Cake Art Gallery
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

export default CakeArt;