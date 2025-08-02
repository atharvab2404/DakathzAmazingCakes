import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";  // Added for dynamic routing
import { useNavigate } from "react-router-dom";

const themes = [
  {
    id: "cakeart",
    name: "Special Realistic CakeArt",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["fondant", "figure", "cakeart", "realistic"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869106/img-1_fqpg8d.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869108/img-2_dk7ohp.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869110/img-3_or5ig6.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869112/img-4_w987sa.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869114/img-5_ivoyl1.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cakeart",
    picfolder: "/theme/special",
  },
  {
    id: "fondantfigure",
    name: "Special Fondant Figurine Cakes",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["fondant", "figure", "cakeart", "realistic"],
    images: ["https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949630/img-1_si3gzr.jpg",
    "https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949643/img-2_jdlegy.jpg",
    "https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949645/img-3_o6lzcr.jpg",
    "https://res.cloudinary.com/dqxsgkxps/image/upload/v1750949647/img-4_qjbkjl.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/fondantfigurine",
    picfolder: "/theme/fondantfigure",
  },
  {
    id: "fondantprops",
    name: "Special Fondant Props Cakes",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["fondant", "figure", "cakeart", "realistic"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767858/img-1_e6096x.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767894/img-2_e3zgbb.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767897/img-3_e3qw5d.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767914/img-4_hm17rp.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%ordering%20Themed%20Cakes",
    galleryPage: "/themes/fondantprops",
    picfolder: "/theme/fondant",
  },
  {
    id: "superhero",
    name: "Superhero Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["superhero", "batman", "spiderman", "marvel", "dc", "hero"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869018/img-1_sbrl8o.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869021/img-2_ihntbk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869023/img-3_ug32no.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/superhero",
    picfolder: "/theme/superhero",
  },
  {
    id: "frozen",
    name: "Frozen Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["pig", "peppa", "peppa pig"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767844/img-1_d9b5gc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767846/img-2_dghxmy.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767848/img-3_mqutev.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/frozen",
    picfolder: "/theme/frozen",
  },
  {
    id: "cartoon",
    name: "Cartoon Charcter Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["elsa", "aana", "frozen", "snow", "snowman", "olaf", "ice", "disney"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741278/img-1_gn5x0a.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741287/img-2_nucynf.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741295/img-3_mo1jt7.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cartoon",
    picfolder: "/theme/cartoon",
  },
  {
    id: "football",
    name: "Football Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["football", "ball", "messi", "ronaldo", "fifa", "sports", "ground", "real madrid", "barcelona"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767933/img-1_u8bkqs.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767936/img-2_saw6u7.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767940/img-3_f1itea.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/football",
    picfolder: "/theme/football",
  },
  {
    id: "princess",
    name: "Princess Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["cricket", "bat", "ball", "dhoni", "kohli", "tendulkar", "csk", "rcb", "stump", "wicket", "pitch"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927070/img-1_chdly1.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927074/img-2_wilwtz.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927076/img-3_pb8pdb.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/princess",
    picfolder: "/theme/princess",
  },
  {
    id: "unicorn",
    name: "Unicorn Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["horse", "unicorn", "imaginary", "cartoon"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927082/img-1_rdkdqe.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927087/img-2_gxfjzk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750927091/img-3_b9zuu9.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/unicorn",
    picfolder: "/theme/unicorn",
  },
  {
    id: "cricket",
    name: "Cricket Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["cute", "beautiful", "butterfly"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749208/img-1_ovdmk2.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749242/img-2_mepn54.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749264/img-3_izalhh.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cricket",
    picfolder: "/theme/cricket",
  },
  {
    id: "alcohol",
    name: "Alcohol Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["kids", "cute", "girls", "doll", "barbie"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741054/img-1_le7fys.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741055/img-2_r7lnof.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741059/img-3_cf1sdp.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/alcohol",
    picfolder: "/theme/alcohol",
  },
  {
    id: "baby",
    name: "Baby Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["tom", "jerry", "cartoon"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741142/img-1_lsvigd.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741148/img-2_wvauit.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741154/img-3_dn7dkr.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/baby",
    picfolder: "/theme/baby",
  },
  {
    id: "barbie",
    name: "Barbie Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741227/img-1_quj9al.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741230/img-2_wmxjov.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741232/img-3_otehoq.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/barbie",
    picfolder: "/theme/barbie",
  },
  {
    id: "cars",
    name: "Cars Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741469/img-1_ofcakw.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741477/img-2_ht93kb.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741485/img-3_tlurx7.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cars",
    picfolder: "/theme/cars",
  },
  {
    id: "jungle",
    name: "Jungle Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750768017/img-1_ugtpwl.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768023/img-2_xm5qpk.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768030/img-3_xk8zps.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/jungle",
    picfolder: "/theme/jungle",
  },
  {
    id: "makeup",
    name: "Makeup Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767993/img-1_sgbets.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767997/img-2_wz8hs9.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767996/img-3_obqb5s.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/makeup",
    picfolder: "/theme/makeup",
  },
  {
    id: "spiderman",
    name: "Spiderman Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869014/img-1_cndlhq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869015/img-2_cqcfiw.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869017/img-3_ti9ywx.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/spiderman",
    picfolder: "/theme/spiderman",
  },
  {
    id: "space",
    name: "Space Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869010/img-1_sqjn9k.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-2_z9ediq.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869012/img-3_manvcf.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/space",
    picfolder: "/theme/space",
  },
  {
    id: "tech",
    name: "Tech Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869027/img-1_n3tacd.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869029/img-2_n4dkj4.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869030/img-3_llopdn.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/tech",
    picfolder: "/theme/tech",
  },
  {
    id: "travel",
    name: "Travel Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869031/img-1_mitcgc.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-2_uhruhu.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869033/img-3_nwunoi.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/travel",
    picfolder: "/theme/travel",
  },
  {
    id: "castle",
    name: "Castle Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741447/img-1_jhu53j.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741499/img-2_azc59x.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741455/img-3_xrcy81.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/castle",
    picfolder: "/theme/castle",
  },
  {
    id: "cocomelon",
    name: "Cocomelon Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741458/img-1_nsj3cp.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741462/img-2_f1tawq.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741463/img-3_jlefbk.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/cocomelon",
    picfolder: "/theme/cocomelon",
  },
  {
    id: "babyboss",
    name: "babyboss Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741172/img-1_m5qg81.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741178/img-2_r1tlbr.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741179/img-3_e7fxw5.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/babyboss",
    picfolder: "/theme/babyboss",
  },
  {
    id: "babyshower",
    name: "babyshower Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741215/img-1_umd6ka.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741222/img-2_iwspzi.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750741222/img-3_xcic35.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/babyshower",
    picfolder: "/theme/babyshower",
  },
  {
    id: "dress",
    name: "Dress Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749286/img-1_jjkhwj.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749311/img-2_chuxgx.jpg",
    "https://res.cloudinary.com/ddrimzuvz/image/upload/v1750749315/img-3_dhl0aa.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/dress",
    picfolder: "/theme/dress",
  },
  {
    id: "gaming",
    name: "Gaming Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767852/img-1_fi7dke.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767855/img-2_tjlrnh.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767856/img-3_hx1l6w.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/gaming",
    picfolder: "/theme/gaming",
  },
  {
    id: "harrypotter",
    name: "Harry Potter Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750768003/img-1_brdyoc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768010/img-2_izx95t.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768011/img-3_ssqkjm.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/harrypotter",
    picfolder: "/theme/harrypotter",
  },
  {
    id: "mermaid",
    name: "Mermaid Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767807/img-1_ra6qgp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-2_x2omfn.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-3_oa2mvl.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/mermaid",
    picfolder: "/theme/mermaid",
  },
  {
    id: "mickey",
    name: "Mickey Mouse Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767809/img-1_uxkb5l.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767811/img-2_l4m5pp.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750767812/img-3_thpgzv.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/mickey",
    picfolder: "/theme/mickey",
  },
  {
    id: "minecraft",
    name: "Minecraft Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750867927/img-1_jteker.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867928/img-2_sqdjt6.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750867929/img-3_wvczkt.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/minecraft",
    picfolder: "/theme/minecraft",
  },
  {
    id: "minions",
    name: "Minions Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/daf2m3vny/image/upload/v1750767999/img-1_vbrioc.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768593/img-2_l7u6ev.jpg",
    "https://res.cloudinary.com/daf2m3vny/image/upload/v1750768002/img-3_cdy38z.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/minions",
    picfolder: "/theme/minions",
  },
  {
    id: "music",
    name: "Music Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869035/img-1_hvqqz3.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869037/img-2_hwvrtv.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869038/img-3_brnlk1.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/music",
    picfolder: "/theme/music",
  },
  {
    id: "pawpatrol",
    name: "Pawpatrol Themed Cake",
    description: "A cake that celebrates your favorite Ocassion in every slice.",
    keywords: ["youtube", "cartoon", "kids"],
    images: ["https://res.cloudinary.com/ddbgsdv61/image/upload/v1750868999/img-1_mbqcdk.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869002/img-2_mz33jo.jpg",
    "https://res.cloudinary.com/ddbgsdv61/image/upload/v1750869002/img-3_cw485m.jpg"],
    whatsappLink: "https://wa.me/917030173156?text=I'm%20interested%20in%20Superhero%20Themed%20Cake",
    galleryPage: "/themes/pawpatrol",
    picfolder: "/theme/pawpatrol",
  },
];


const CatalogueSection = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(themes);
  const navigate = useNavigate();  // <--- define here

  const fuse = new Fuse(themes, {
    keys: ["name", "keywords"],
    includeScore: true,
    threshold: 0.4,
  });

  useEffect(() => {
    const normalized = query.trim().toLowerCase();
    const results = fuse.search(normalized);
    setSuggestions(normalized ? results.map((r) => r.item) : themes);
  }, [query]);

  return (
    <section id="catalogue" className="py-10 bg-pink-50">
      <div className="container mx-auto text-center px-2">
        <motion.h2
          className="text-3xl font-bold text-pink-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Cake Themes
        </motion.h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search for a theme (e.g., princess, batman)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 md:w-1/2 px-3 py-1.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm"
          />
          {suggestions.length === 0 && query && (
            <p className="mt-2 text-xs text-gray-500">No matching themes found.</p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {suggestions.map((theme, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 rounded-md shadow-md min-h-[360px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                {theme.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-60 flex items-center justify-center overflow-hidden rounded-t-md bg-white"
                  >
                    <img
                      src={img}
                      alt={`${theme.name} ${idx + 1}`}
                      className="object-contain h-full"
                    />
                  </div>
                ))}
              </Carousel>
              <h3 className="text-base font-semibold text-pink-600 mt-2">{theme.name}</h3>
              <p className="text-sm mt-1 text-gray-700 line-clamp-3">{theme.description}</p>

              <div className="flex justify-center items-center gap-2 mt-2 flex-nowrap">
                <a
                  href={theme.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs py-[3px] px-[6px] sm:py-1 sm:px-2 rounded-full shadow"
                >
                  Order on WhatsApp
                </a>

                <button
                  onClick={() => {
                    navigate(theme.galleryPage);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-pink-600 hover:bg-pink-700 text-white text-[10px] sm:text-xs py-[3px] px-[6px] sm:py-1 sm:px-2 rounded-full shadow"
                >
                  View Gallery
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogueSection;

