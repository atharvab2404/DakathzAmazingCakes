import React from "react";
import { Link } from "react-router-dom";

const CartoonGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741278/img-1_gn5x0a.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741287/img-2_nucynf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741295/img-3_mo1jt7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741303/img-4_c7acfi.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741314/img-5_bfsyut.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741440/img-6_hb7yo7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741442/img-7_szvgx5.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741443/img-8_v7bdyu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741442/img-9_k3riai.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741279/img-10_fftc8t.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741280/img-11_jiajmz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741280/img-12_j4v1td.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741281/img-13_ik4azv.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741282/img-14_csug61.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741283/img-15_jn3dsw.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741283/img-16_hzoqzw.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741284/img-17_vexcqu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741285/img-18_wc0dlf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741286/img-19_dddomp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741288/img-20_sjmmbk.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741288/img-21_e7vbea.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741289/img-22_u0ijex.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741289/img-23_gmdlxi.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741290/img-24_pawfda.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741291/img-25_qwlvpt.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741292/img-26_daozcm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741293/img-27_ycrf0p.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741293/img-28_rwemzb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741295/img-29_pwuxng.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741295/img-30_hvb9ur.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741296/img-31_blqzqz.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741297/img-32_epz8sm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741298/img-33_lnjldq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741298/img-34_w2xhqx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741299/img-35_k3s6jg.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741300/img-36_w0r7ea.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741301/img-37_pb2a1t.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741301/img-38_cwkid7.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741302/img-39_ghg11f.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741304/img-40_zxp81a.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741304/img-41_iifwlf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741305/img-42_j2q4ku.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741306/img-43_z4vgay.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741307/img-44_qqluis.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741307/img-45_k5yf7a.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741308/img-46_mdk172.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741309/img-47_b3ym71.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741309/img-48_t2ktrm.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741314/img-49_vgt2c3.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741315/img-50_ipljm2.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741370/img-51_bhplot.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741435/img-52_vy876c.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741435/img-53_myp1ki.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741442/img-54_g4uywt.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741435/img-55_n3l8ub.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741445/img-56_y8tktr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741436/img-57_wguauu.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741436/img-58_ynyk1p.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741440/img-59_dqcaf1.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Cartoon Character Themed Cake Gallery
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

export default CartoonGallery;