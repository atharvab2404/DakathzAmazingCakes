// src/components/CakeCard.js
import React from "react";

const CakeCard = ({ cake }) => {
  const whatsappNumber = "+919999999999";
  const message = `Hi! I’m interested in the "${cake.name}" (${cake.category}) cake.`;

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-xs m-2">
      <img
        src={process.env.PUBLIC_URL + "/" + cake.image}
        alt={cake.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{cake.name}</h3>
        <p className="text-sm text-gray-600">{cake.category}</p>
        <p className="text-sm text-gray-800 font-medium">Weight: {cake.weight}</p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 px-4 py-2 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default CakeCard;
