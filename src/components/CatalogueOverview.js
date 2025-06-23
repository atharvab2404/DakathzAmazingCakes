// src/components/CatalogueOverview.js
import React from "react";
import { Link } from "react-router-dom";
import cakes from "../data";

const CatalogueOverview = () => {
  // Get unique themes
  const themes = [...new Set(cakes.map((cake) => cake.category))];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {themes.map((theme) => (
        <Link
          key={theme}
          to={`/theme/${encodeURIComponent(theme)}`}
          className="w-64 h-40 rounded-2xl shadow-lg bg-pink-300 hover:bg-pink-400 flex items-center justify-center text-xl font-semibold text-pink-900 cursor-pointer transition"
        >
          {theme}
        </Link>
      ))}
    </div>
  );
};

export default CatalogueOverview;
