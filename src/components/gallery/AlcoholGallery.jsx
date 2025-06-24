import React from "react";
import { Link } from "react-router-dom";

const AlcoholGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-1_le7fys.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741055/img-2_r7lnof.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741059/img-3_cf1sdp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741066/img-4_nidtin.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741070/img-5_ktdeh4.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741072/img-6_noxgqp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741071/img-7_hw606x.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741073/img-8_vyalkt.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741073/img-9_baxfav.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-10_crxt0h.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741053/img-11_jqz040.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741053/img-12_tzhxvn.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741053/img-13_zvwxfp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-14_lfgoiu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-15_mune3y.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-16_zsfxhg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-17_xio1nz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741055/img-18_x2uvoj.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-19_zltyu0.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741055/img-20_ht0uxo.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741055/img-21_bi3pz2.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741055/img-22_hx7u6b.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741056/img-23_qm3zxf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741056/img-24_qlvso4.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741057/img-25_ug2v7c.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741058/img-26_b5aoog.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741058/img-27_qlgffw.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741059/img-28_gtoonb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741059/img-29_x3bgnt.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741059/img-30_ywi1ty.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741060/img-31_yy3kxg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741063/img-32_jx4yof.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741060/img-33_dugai7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741061/img-34_ipzxyx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741063/img-35_uxb8bz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741063/img-36_jdrfjn.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741064/img-37_woaurj.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741065/img-38_jkezgb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741065/img-39_l97phc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741066/img-40_cfrmbi.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741067/img-41_jfbmuc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741069/img-42_yc3htj.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741070/img-43_j43yd5.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741070/img-44_ncgoov.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Alcohol Themed Cake Gallery
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

export default AlcoholGallery;