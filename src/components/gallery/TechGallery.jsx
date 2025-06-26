import React from "react";
import { Link } from "react-router-dom";

const TechGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-1_n3tacd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-2_n4dkj4.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-3_llopdn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-4_mfshap.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-5_uzoaqf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-6_acuv2i.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-7_jykaqi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-8_vswnu5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-9_v9picw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-10_c6wvct.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-11_qqeno3.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869028/img-12_yahghc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869028/img-13_kdilwl.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869028/img-14_wqsav6.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869028/img-15_e73yvo.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869028/img-16_sotsen.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-17_zjyobt.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-18_uyjxfl.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-19_ohitmq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-20_mmbgal.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-21_wfpsso.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-22_svxlqn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-23_rkx75y.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-24_cxuwhw.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Tech Themed Cake Gallery
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

export default TechGallery;