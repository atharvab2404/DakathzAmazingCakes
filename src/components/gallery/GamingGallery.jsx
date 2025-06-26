import React from "react";
import { Link } from "react-router-dom";

const GamingGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767852/img-1_fi7dke.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767855/img-2_tjlrnh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767856/img-3_hx1l6w.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767856/img-4_uwarsc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767856/img-5_r8i1cy.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767857/img-6_bgvjwp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767857/img-7_vln9kg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767857/img-8_f4ier3.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767858/img-9_ouixld.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767852/img-10_go8o4b.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767852/img-11_cgk3ql.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767853/img-12_icmsdp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767853/img-13_xpsajc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767853/img-14_k8ibuq.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767854/img-15_khptwc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767854/img-16_hairkg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767854/img-17_w0e1px.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767854/img-18_hhm1bk.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767855/img-19_sgdebj.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767855/img-20_neqt1n.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767856/img-21_qhflfx.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Gaming Themed Cake Gallery
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

export default GamingGallery;