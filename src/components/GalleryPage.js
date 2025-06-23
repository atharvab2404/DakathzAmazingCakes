import React from "react";
import { useLocation } from "react-router-dom";

const GalleryPage = () => {
  const location = useLocation();
  const { picfolder } = location.state || {};

  if (!picfolder) {
    return <div>No folder specified!</div>;
  }

  // Assuming you always have 5 images inside each folder. You can change this logic.
  const images = Array.from({ length: 5 }, (_, i) => `/${picfolder}/image${i + 1}.jpg`);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="border rounded overflow-hidden">
            <img src={img} alt={`img-${idx}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;