import React from "react";
import { Link } from "react-router-dom";

const JungleGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768017/img-1_ugtpwl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768023/img-2_xm5qpk.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768030/img-3_xk8zps.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768034/img-4_tiy6fl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768034/img-5_sxu7mf.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768035/img-6_gbeynw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768035/img-7_mvx5zl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768037/img-8_rehrlp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768040/img-9_mtqtf7.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768018/img-10_m6yqmv.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768018/img-11_i1fpo1.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768019/img-12_omiio2.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768021/img-13_yopgjh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768022/img-14_ygbizl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768022/img-15_shi8fw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768023/img-16_br6cpl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768024/img-17_ge3bn3.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768024/img-18_kgnbsw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768023/img-19_zt6i0x.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768024/img-20_iyet1y.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768024/img-21_iecvfp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768026/img-22_rx9bz8.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768027/img-23_efkrkh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768027/img-24_hn3y3a.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768027/img-25_worqrw.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768028/img-26_ebx8gv.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768029/img-27_lvi6jf.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768029/img-28_xtvdeh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768029/img-29_ju477s.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768030/img-30_ey8p6l.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768031/img-31_f5cjyx.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768038/img-32_dmzr4a.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768033/img-33_xtbpd5.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768039/img-34_ittkil.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768035/img-35_pk11ye.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Jungle Themed Cake Gallery
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

export default JungleGallery;