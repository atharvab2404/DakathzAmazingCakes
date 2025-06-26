import React from "react";
import { Link } from "react-router-dom";

const SuperheroGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869018/img-1_sbrl8o.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869021/img-2_ihntbk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-3_ug32no.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869024/img-4_mar4p7.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869026/img-5_mqsvxt.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869026/img-6_oqwcp2.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-7_nsln0n.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-8_tywkyb.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-9_jg38n4.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869019/img-10_lzudag.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869019/img-11_rhb95s.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869019/img-12_ez4ntb.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-13_ayxauq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-14_h4yrym.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-15_q3oymz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-16_z9zgpj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-17_kld1yi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-18_q2yzly.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869020/img-19_blsc6u.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869021/img-20_otkxhs.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869021/img-21_yentk2.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869021/img-22_khfll6.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869021/img-23_dhrlwp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869022/img-24_chohpc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869022/img-25_gstzff.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869022/img-26_nitism.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869022/img-27_wlsrpr.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869022/img-28_yyjs3z.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869022/img-29_psub4v.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-30_imzvkg.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-31_gfx9ui.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-32_hxtol7.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-33_fjykgi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869024/img-34_jvh82i.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-35_lynekd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869024/img-36_wxuy6i.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869024/img-37_zdqy9i.png",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869024/img-38_pwadnf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869024/img-39_sp9sne.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869025/img-40_ted9z2.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869025/img-41_yyglfp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869025/img-42_etc3y1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869025/img-43_y74d52.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869025/img-44_ey7mdu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869025/img-45_af2sub.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869026/img-46_yqey6q.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869026/img-47_xpef4f.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869026/img-48_r57jkq.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Superhero Themed Cake Gallery
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

export default SuperheroGallery;