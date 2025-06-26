import React from "react";
import { Link } from "react-router-dom";

const CakeArt = () => {
  const images = [
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-1_fqpg8d.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-2_dk7ohp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-3_or5ig6.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869112/img-4_w987sa.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869114/img-5_ivoyl1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869117/img-6_s8sbqk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869119/img-7_swrtir.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869122/img-8_qquofo.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869125/img-9_r60vwp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-10_sq2jpx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-11_et1n3y.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-12_hpxp0i.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869107/img-13_esglz3.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869107/img-14_ar3jxx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869107/img-15_xc2uxc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869107/img-16_iuvhqs.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869107/img-17_pmtehx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-18_i5pvhp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-19_kfel5y.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-20_xifl2s.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-21_jf0e1w.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-22_nq0ypu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869109/img-23_xoczeu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869109/img-24_h0qv1m.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869109/img-25_fpws2x.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869109/img-26_io1p8r.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869109/img-27_wpdiy5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869109/img-28_mvvtbu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-29_zgjxux.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-30_lx8daj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-31_blwgtk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-32_ufewrv.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869111/img-33_s47iju.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869111/img-34_ew4zrc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869111/img-35_z4gr35.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869111/img-36_pgi9hi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869111/img-37_h3xpnt.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869112/img-38_hgolrf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869112/img-39_yfaawg.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869112/img-40_d3hfj5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869112/img-41_b0dvep.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869113/img-42_gnwbxd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869113/img-43_meke0k.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869113/img-44_bver0i.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869113/img-45_kwbjns.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869114/img-46_gld4an.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869114/img-47_biroih.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869114/img-48_hlggaw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869114/img-49_ketl3d.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869115/img-50_ci9yuz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869115/img-51_y3buim.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869115/img-52_fqii5o.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869115/img-53_vwc0tw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869116/img-54_iiib9a.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869116/img-55_zqk6sc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869116/img-56_brqitj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869116/img-57_gk6bbe.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869117/img-58_ynqahl.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869117/img-59_wynhrj.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869117/img-60_w437p5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869117/img-61_y7peyx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869118/img-62_xfqjsf.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869118/img-63_m0uysn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869118/img-64_b6yitw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869118/img-65_hndl6x.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869119/img-66_ditvsc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869119/img-67_v8wglt.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869119/img-68_msrori.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869119/img-69_qurjlp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869120/img-70_eefdzn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869120/img-71_sijvyl.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869121/img-72_gshwce.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869120/img-73_xmz8ax.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869121/img-74_iwo9kp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869121/img-75_a4urud.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869121/img-76_yhpatd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869121/img-77_mwoew9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869122/img-78_ycbvyr.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869122/img-79_cuutmm.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869122/img-80_xfrqpy.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869122/img-81_j27oqw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869123/img-82_vm5ufm.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869123/img-83_wpqxfi.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869123/img-84_b5rabx.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869123/img-85_h3puy4.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869124/img-86_nm4egp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869124/img-87_sxkctc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869124/img-88_qdhbr9.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869124/img-89_juv9op.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869125/img-90_wujzuu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869125/img-91_cvehu5.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869125/img-92_lmgcxm.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869125/img-93_kdtq9h.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869126/img-94_px0crd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869126/img-95_widw85.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869126/img-96_qyutxn.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869126/img-97_kqef98.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869127/img-98_kvs4wy.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869127/img-99_iazbor.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-100_aktmqs.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-101_qaohio.jpg"
  ];

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        Special Realistic Cake Art Gallery
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

export default CakeArt;