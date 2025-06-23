// src/components/FilterBar.js
import React from "react";

const FilterBar = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center my-4 gap-2">
      <button
        className={`px-4 py-2 rounded-full border ${
          selected === "All"
            ? "bg-pink-600 text-white"
            : "bg-white text-pink-600 border-pink-600"
        }`}
        onClick={() => onSelect("All")}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-4 py-2 rounded-full border ${
            selected === cat
              ? "bg-pink-600 text-white"
              : "bg-white text-pink-600 border-pink-600"
          }`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
