import React from "react";
import { Link } from "react-router-dom";

const SpidermanGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-1_cndlhq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-2_cqcfiw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869017/img-3_ti9ywx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869017/img-4_qp6a4a.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869017/img-5_z5ydtn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869017/img-6_obk7yd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869018/img-7_eih7wl.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869018/img-8_k8jalu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869018/img-9_mgpzge.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-10_yeweni.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-11_idmsdc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-12_ueuhoz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-13_sbo3wa.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-14_d9d8fd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-15_liu5pt.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-16_a89mkp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-17_pezk1b.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-18_nhjeje.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-19_bwobay.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869016/img-20_uihwws.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869016/img-21_tun9p5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869016/img-22_szeeqr.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869016/img-23_nbuja1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869016/img-24_a70fji.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869016/img-25_wmaand.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869017/img-26_n2o3gh.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Spiderman Themed Cake Gallery
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

export default SpidermanGallery;