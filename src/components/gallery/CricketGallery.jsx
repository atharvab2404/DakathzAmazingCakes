import React from "react";
import { Link } from "react-router-dom";

const CricketGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749208/img-1_ovdmk2.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749242/img-2_mepn54.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749264/img-3_izalhh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749267/img-4_z1qcgk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749270/img-5_hzbsef.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749274/img-6_xex4ar.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749277/img-7_hzbdkl.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749280/img-8_eoicft.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749283/img-9_ab78qg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749210/img-10_zgyiiq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749213/img-11_oyjxuv.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749216/img-12_rg5axc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749219/img-13_mhemzf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749222/img-14_pqtpxg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749226/img-15_l4sdnc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749229/img-16_xempnl.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749232/img-17_yhma0t.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749235/img-18_txw84z.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749239/img-19_hogljx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749246/img-20_k516za.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749248/img-21_mnohpp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749252/img-22_halbrd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749254/img-23_kdsetk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749258/img-24_qeu4s3.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749261/img-25_tw76a9.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cricket Themed Cake Gallery
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

export default CricketGallery;