import React from "react";
import { Link } from "react-router-dom";

const CastleGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741447/img-1_jhu53j.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741499/img-2_azc59x.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741455/img-3_xrcy81.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741462/img-4_mdgybp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741455/img-5_eoctrm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741455/img-6_awm0kx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741463/img-7_wu2xbx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741460/img-8_mxhh9m.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741457/img-9_jg75t7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741444/img-10_ckfexo.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741447/img-11_gbtfee.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741448/img-12_r9uv5y.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741446/img-13_sfdkvd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741448/img-14_snqpzq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741448/img-15_t4ulps.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741447/img-16_p1deli.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741448/img-17_uhkkco.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741448/img-18_riqowh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741452/img-19_bmwagm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741453/img-20_z1wvgn.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741453/img-21_afbjj6.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741463/img-22_akn1fd.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Castle Themed Cake Gallery
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

export default CastleGallery;