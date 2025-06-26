import React from "react";
import { Link } from "react-router-dom";

const FrozenGallery = () => {
  const images = [
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767844/img-1_d9b5gc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-2_dghxmy.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767848/img-3_mqutev.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767850/img-4_vi2ytm.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767850/img-5_rqdk99.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767851/img-6_dfylcr.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767851/img-7_pofxgg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767851/img-8_mgmhf1.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767852/img-9_uys803.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767844/img-10_bykxfl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767844/img-11_hyxphe.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767844/img-12_cd6sha.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767845/img-13_pab1o2.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767845/img-14_zcldsh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767845/img-15_knh1s1.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767845/img-16_wmyrl2.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-17_x9rj1j.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-18_qsy2eg.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-19_hqikxm.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-20_s3idp2.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-21_ifibvm.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-22_adgl8j.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767847/img-23_mfzmad.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767847/img-24_jvvgaf.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767847/img-25_wt6zlq.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767847/img-26_rdxpzr.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767848/img-27_dtkc65.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767848/img-28_eqpv2d.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767848/img-29_nvglms.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767849/img-30_vjjzlp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767849/img-31_luqho1.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767849/img-32_ovxtxk.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767849/img-33_mcrhmq.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767850/img-34_wnrjh1.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Frozen Themed Cake Gallery
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

export default FrozenGallery;