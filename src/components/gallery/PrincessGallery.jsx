import React from "react";
import { Link } from "react-router-dom";

const PrincessGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927070/img-1_chdly1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927074/img-2_wilwtz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927076/img-3_pb8pdb.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927080/img-4_flfumu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927081/img-5_mrr8s9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927081/img-6_bo2eno.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927081/img-7_cohoxv.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927082/img-8_st3pva.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927082/img-9_qgokk7.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927070/img-10_vj6pmp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927072/img-11_jxi0hz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927071/img-12_chchlm.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927070/img-13_yxua8i.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927073/img-14_k7l8xg.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927071/img-15_w9swb7.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927072/img-16_cgmiir.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927071/img-17_ft1lud.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927073/img-18_btnryp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927072/img-19_m6l5p5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927073/img-20_fmftwi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927073/img-21_qgv3w2.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927076/img-22_xs9c1c.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927074/img-23_ekjebn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927075/img-24_ndldlk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927074/img-25_icpy0b.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927074/img-26_wc9bvd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927075/img-27_da99um.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927076/img-28_dtwsiu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927078/img-29_mdcwc6.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927079/img-30_kznphi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927076/img-31_a45cte.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927080/img-32_wcus02.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927077/img-33_mz3vz2.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927078/img-34_ts2vkv.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927078/img-35_h6nqrd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927079/img-36_nlvq2k.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927079/img-37_spde3v.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927080/img-38_t0rel0.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927080/img-39_gvxfhb.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927081/img-40_ckygzf.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Princess Themed Cake Gallery
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

export default PrincessGallery;