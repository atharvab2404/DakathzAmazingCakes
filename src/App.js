import logo from './logo.svg';
import './App.css';


// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';


import LandingPage from "./components/LandingPage";
import CatalogueSection from "./components/CatalogueSection";
import SuperheroGallery from "./components/gallery/SuperheroGallery";
import FondantFigureGallery from "./components/gallery/FondantFigure";
import FondantGallery from "./components/gallery/FondantGallery";
import FrozenGallery from "./components/gallery/FrozenGallery";
import CartoonGallery from "./components/gallery/CartoonGallery";
import FootballGallery from "./components/gallery/FootballGallery";
import PrincessGallery from "./components/gallery/PrincessGallery";
import UnicornGallery from "./components/gallery/UnicornGallery";
import CricketGallery from "./components/gallery/CricketGallery";
import AlcoholGallery from "./components/gallery/AlcoholGallery";
import BabyGallery from "./components/gallery/BabyGallery";
import BarbieGallery from "./components/gallery/BarbieGallery";
import CarsGallery from "./components/gallery/CarsGallery";
import JungleGallery from "./components/gallery/JungleGallery";
import MakeupGallery from "./components/gallery/MakeupGallery";
import SpidermanGallery from "./components/gallery/SpidermanGallery";
import SpaceGallery from "./components/gallery/SpaceGallery";
import TechGallery from "./components/gallery/TechGallery";
import TravelGallery from "./components/gallery/TravelGallery";
import CastleGallery from "./components/gallery/CastleGallery";
import CocomelonGallery from "./components/gallery/CocomelonGallery";
import BabybossGallery from "./components/gallery/BabybossGallery";
import BabyshowerGallery from "./components/gallery/BabyshowerGallery";
import DressGallery from "./components/gallery/DressGallery";
import GamingGallery from "./components/gallery/GamingGallery";
import HarrypotterGallery from "./components/gallery/HarrypotterGallery";
import MermaidGallery from "./components/gallery/MermaidGallery";
import MickeyGallery from "./components/gallery/MickeyGallery";
import MinecraftGallery from "./components/gallery/MinecraftGallery";
import MinionsGallery from "./components/gallery/MinionsGallery";
import MusicGallery from "./components/gallery/MusicGallery";
import PawpatrolGallery from "./components/gallery/PawpatrolGallery";
import CakeArt from "./components/gallery/CakeArt";
import WhatsappFloatingButton from "./components/WhatsappFloatingButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/" element={<CatalogueSection />} />
        <Route path="/themes/superhero" element={<SuperheroGallery />} />
        <Route path="/themes/fondantfigurine" element={<FondantFigureGallery />} />
        <Route path="/themes/fondantprops" element={<FondantGallery />} />
        <Route path="/themes/frozen" element={<FrozenGallery />} />
        <Route path="/themes/cartoon" element={<CartoonGallery />} />
        <Route path="/themes/football" element={<FootballGallery />} />
        <Route path="/themes/princess" element={<PrincessGallery />} />
        <Route path="/themes/unicorn" element={<UnicornGallery />} />
        <Route path="/themes/cricket" element={<CricketGallery />} />
        <Route path="/themes/alcohol" element={<AlcoholGallery />} />
        <Route path="/themes/baby" element={<BabyGallery />} />
        <Route path="/themes/barbie" element={<BarbieGallery />} />
        <Route path="/themes/cars" element={<CarsGallery />} />
        <Route path="/themes/jungle" element={<JungleGallery />} />
        <Route path="/themes/makeup" element={<MakeupGallery />} />
        <Route path="/themes/spiderman" element={<SpidermanGallery />} />
        <Route path="/themes/space" element={<SpaceGallery />} />
        <Route path="/themes/tech" element={<TechGallery />} />
        <Route path="/themes/travel" element={<TravelGallery />} />
        <Route path="/themes/castle" element={<CastleGallery />} />
        <Route path="/themes/cocomelon" element={<CocomelonGallery />} />
        <Route path="/themes/babyboss" element={<BabybossGallery />} />
        <Route path="/themes/babyshower" element={<BabyshowerGallery />} />
        <Route path="/themes/dress" element={<DressGallery />} />
        <Route path="/themes/gaming" element={<GamingGallery />} />
        <Route path="/themes/harrypotter" element={<HarrypotterGallery />} />
        <Route path="/themes/mermaid" element={<MermaidGallery />} />
        <Route path="/themes/mickey" element={<MickeyGallery />} />
        <Route path="/themes/minecraft" element={<MinecraftGallery />} />
        <Route path="/themes/minions" element={<MinionsGallery />} />
        <Route path="/themes/music" element={<MusicGallery />} />
        <Route path="/themes/pawpatrol" element={<PawpatrolGallery />} />
        <Route path="/themes/cakeart" element={<CakeArt />} />
      </Routes>
      <WhatsappFloatingButton /> {/* <-- Always visible */}
    </Router>
  );
}

export default App;

