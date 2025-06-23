// src/components/ThemePage.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import cakes from "../data";
import CakeCard from "./CakeCard";

const ThemePage = () => {
  const { theme } = useParams();
  const decodedTheme = decodeURIComponent(theme);

  const filteredCakes = cakes.filter((cake) => cake.category === decodedTheme);

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <Link
        to="/"
        className="text-pink-700 underline hover:text-pink-900 mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-pink-700 mb-8 text-center">{decodedTheme}</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {filteredCakes.map((cake, idx) => (
          <CakeCard key={idx} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default ThemePage;
