import React from "react";
import { Link } from "react-router-dom";

const CarsGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741469/img-1_ofcakw.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741477/img-2_ht93kb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741485/img-3_tlurx7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741493/img-4_xjz3ik.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741494/img-5_r6ar7v.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741495/img-6_ycbuqx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741495/img-7_aw6mmu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741496/img-8_tbuuoz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741497/img-9_gtdr71.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741470/img-10_ckdwti.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741471/img-11_g8eggp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741471/img-12_blbesu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741471/img-13_rnpj6f.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741472/img-14_bvrg7i.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741473/img-15_ost1ww.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741475/img-16_cgth1z.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741475/img-17_bftl1u.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741477/img-18_oiekat.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741476/img-19_udkqen.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741477/img-20_vpcute.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741478/img-21_idtyht.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741479/img-22_guwj0s.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741480/img-23_kkrj2u.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741480/img-24_linb5i.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741481/img-25_ilbbcr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741482/img-26_vv7c2b.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741484/img-27_eimaks.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741485/img-28_abhcfk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741486/img-29_fftb8u.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741485/img-30_c70jwp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741487/img-31_z1mbdl.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741487/img-32_lvkydf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741488/img-33_cobrwe.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741489/img-34_ifj0ja.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741489/img-35_aenwxc.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741490/img-36_dv7d17.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741491/img-37_yqv3yr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741491/img-38_gd5owh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741492/img-39_cw8icn.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cars Themed Cake Gallery
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

export default CarsGallery;