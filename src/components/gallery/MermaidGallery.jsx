import React from "react";
import { Link } from "react-router-dom";

const MermaidGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767807/img-1_ra6qgp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-2_x2omfn.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-3_oa2mvl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-4_axck5r.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767810/img-5_rq7sn9.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767810/img-6_r7lvzo.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767808/img-7_nyg6i3.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767807/img-8_acom99.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767808/img-9_eswxp5.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767808/img-10_lpcb3e.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767808/img-11_mapifg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767808/img-12_nfwlqi.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-13_trmuga.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Mermaid Themed Cake Gallery
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

export default MermaidGallery;