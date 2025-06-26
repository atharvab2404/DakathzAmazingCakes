import React from "react";
import { Link } from "react-router-dom";

const PawpatrolGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750868999/img-1_mbqcdk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869002/img-2_mz33jo.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869002/img-3_cw485m.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869003/img-4_p24xmp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869003/img-5_grddam.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869003/img-6_k3fzci.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869003/img-7_fd6fff.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869003/img-8_kim0k2.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869004/img-9_escst5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750868999/img-10_k8nj07.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750868999/img-11_lvxlmh.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750868999/img-12_e79xbf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869000/img-13_wmcwtb.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869000/img-14_ip13dd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869000/img-15_ultcno.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869001/img-16_f2qrct.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869001/img-17_gciu60.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869001/img-18_k1u30b.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869001/img-19_kcnyte.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Pawpatrol Themed Cake Gallery
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

export default PawpatrolGallery;