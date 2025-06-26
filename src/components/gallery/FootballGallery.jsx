import React from "react";
import { Link } from "react-router-dom";

const FootballGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767933/img-1_u8bkqs.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767936/img-2_saw6u7.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767940/img-3_f1itea.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767942/img-4_nwosnr.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767942/img-5_l8esp8.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767942/img-6_e3d2d9.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767942/img-7_ytj1cb.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767943/img-8_vpgmhu.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767943/img-9_duko11.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767934/img-10_wubdn6.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767934/img-11_wgfryk.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767934/img-12_detbfu.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767934/img-13_jwbrip.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767935/img-14_leqrvz.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767935/img-15_dgvui3.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767935/img-16_ngvzbw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767936/img-17_wvx6cq.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767936/img-18_etuc2j.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767936/img-19_rd7xfb.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767937/img-20_cg2dbl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767937/img-21_urwpps.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767937/img-22_jwjrwa.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767938/img-23_jqjout.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767938/img-24_wb1kno.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767938/img-25_nyono5.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767938/img-26_bo4byn.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767939/img-27_eq5gon.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767939/img-28_hr1xrd.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767939/img-29_io7erl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767940/img-30_mrltdf.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767940/img-31_oi9qhm.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767940/img-32_cpnqu2.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767941/img-33_a5gmzi.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767941/img-34_tno2si.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767941/img-35_wyd0bs.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Football Themed Cake Gallery
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

export default FootballGallery;