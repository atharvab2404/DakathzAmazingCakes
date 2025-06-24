import React from "react";
import { Link } from "react-router-dom";

const BabyGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741142/img-1_lsvigd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741148/img-2_wvauit.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741154/img-3_dn7dkr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741160/img-4_dhttgn.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741166/img-5_ny2dxo.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741169/img-6_cmksta.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741170/img-7_iexa5w.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741171/img-8_yjvfw5.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741171/img-9_b6k1oa.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741143/img-10_euppfz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741143/img-11_jb72wh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741144/img-12_wqpeco.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741145/img-13_dccaat.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741145/img-14_snryyg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741146/img-15_fpq8uz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741147/img-16_km90xy.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741147/img-17_o20gry.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741147/img-18_nhbyt1.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741148/img-19_ckb5iq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741149/img-20_csszlq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741150/img-21_mijjuy.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741150/img-22_r5xak4.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741151/img-23_zicyin.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741151/img-24_nyotnm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741152/img-25_ihioys.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741152/img-26_gxytyx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741153/img-27_ut61fg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741153/img-28_olof3b.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741154/img-29_ro3beu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741155/img-30_gq1lkd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741155/img-31_utpxmk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741156/img-32_ocue4n.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741156/img-33_d2nnnx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741157/img-34_fbhx67.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741158/img-35_bsxgey.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741158/img-36_igt0co.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741159/img-37_g5ugxr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741159/img-38_bdhrhw.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741160/img-39_vm85pk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741161/img-40_abbijd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741161/img-41_bmse49.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741162/img-42_xk9wmq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741162/img-43_tsv70v.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741163/img-44_petcun.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741164/img-45_uuktrh.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741164/img-46_t8rrqe.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741165/img-47_naxgln.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741165/img-48_ayh1jp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741166/img-49_br88q3.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741167/img-50_uoacr4.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741167/img-51_nulg7s.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741168/img-52_i1ydr8.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741168/img-54_ubrjdl.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741169/img-55_dwaist.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Baby Themed Cake Gallery
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

export default BabyGallery;