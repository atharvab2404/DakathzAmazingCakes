import React from "react";
import { Link } from "react-router-dom";

const UnicornGallery = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927082/img-1_rdkdqe.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927087/img-2_gxfjzk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927091/img-3_b9zuu9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927096/img-4_l4sejd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927100/img-5_sffjam.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927104/img-6_hxkwkx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927105/img-7_sempdz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927106/img-8_pvhmax.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927106/img-9_atav95.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927084/img-10_smyawx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927084/img-11_sxizxj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927083/img-12_pjoxvj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927084/img-13_glzh1j.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927084/img-14_nrhad1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927085/img-15_jv6vtx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927085/img-16_d4rz8h.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927085/img-17_dhf8ns.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927086/img-18_sdf1we.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927086/img-19_cnxikf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927087/img-20_luh4bd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927088/img-21_qrf60u.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927088/img-22_is07tu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927089/img-23_nd8g9j.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927088/img-24_uo40t9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927090/img-25_pd4jol.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927089/img-26_xtjzyq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927090/img-27_ar5vxb.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927090/img-28_ccwuxz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927091/img-29_lpt1jo.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927091/img-30_lo7liq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927093/img-31_hao1qj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927093/img-32_z7rdef.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927092/img-33_xcsxax.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927093/img-34_kcdqsl.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927093/img-35_sa2s4c.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927094/img-36_ywgzfn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927094/img-37_d9382s.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927095/img-38_hhppgf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927095/img-39_xumcqp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927096/img-40_xnj8gd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927096/img-41_tcuq6n.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927096/img-42_alf6e1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927098/img-43_x3cgad.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927097/img-44_yejd8w.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927098/img-45_wifcuy.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927100/img-46_yqq3zx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927098/img-47_a0rlc5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927099/img-48_xtbvm9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927099/img-49_lffyba.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927100/img-50_yhqj82.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927101/img-51_azg3c9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927102/img-52_mnidc4.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927102/img-53_gtgqyi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927102/img-54_ujhjqv.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927102/img-55_g3kofs.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927103/img-56_lvy4tc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927103/img-57_cihcuk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927104/img-58_as6zz5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927104/img-59_yi0117.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927105/img-60_iuvfxd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927105/img-61_ohp4rq.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Unicorn Themed Cake Gallery
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

export default UnicornGallery;