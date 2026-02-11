import React, { useState } from "react";
import data from "../data/data.json";
import BuyNowForm from "../components/BuyNowForm";

const Listing = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-black min-h-screen w-full overflow-x-hidden box-border px-0 sm:px-4 lg:px-10 py-6">
      {Object.keys(data).map((category) => (
        <div key={category} className="mb-10 w-full">
          {/* CATEGORY TITLE */}
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 px-3 sm:px-0">
            {category}
          </h2>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full min-w-0 px-3 sm:px-0">
            {data[category].map((item) => (
              <div
                key={item.id}
                className="bg-zinc-800 rounded-lg p-3 w-full max-w-full overflow-hidden box-border min-w-0"
              >
                {/* IMAGE */}
                <div className="h-[180px] sm:h-[200px] bg-zinc-900 rounded-md overflow-hidden flex items-center justify-center">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.name}
                    className="block w-full h-full object-contain transition-transform duration-300 md:hover:scale-110"
                  />
                </div>

                {/* NAME */}
                <p className="text-white mt-2 text-sm font-medium line-clamp-2">
                  {item.name}
                </p>

                {/* PRICE + RATING */}
                <div className="flex items-center justify-between mt-1 text-sm">
                  <span className="text-cyan-400 font-semibold">
                    ₹{item.price.toLocaleString()}
                  </span>
                  <span className="text-yellow-400">
                    ⭐ {item.rating}
                  </span>
                </div>

                {/* BUY NOW */}
                <button
                  onClick={() => setSelectedProduct(item)}
                  className="mt-3 w-full bg-[#12DAAA] text-black py-2 rounded font-medium hover:opacity-90"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* BUY NOW MODAL */}
      {selectedProduct && (
        <BuyNowForm
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Listing;
