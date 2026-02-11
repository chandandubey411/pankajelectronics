import React, { useState } from "react";
import data from "../data/data.json";
import { useParams } from "react-router-dom";
import BuyNowForm from "../components/BuyNowForm";

const Product = () => {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);

  const products = data[decodedCategory] || [];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  if (!products.length) {
    return <p className="text-white p-10">Category not found</p>;
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center py-6 w-full">
        <h1 className="text-white font-[500] text-3xl mb-6">
          {decodedCategory}
        </h1>

        {/* PRICE FILTER */}
        <div className="bg-zinc-900 p-3 rounded-lg mb-6 flex gap-4">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-32 px-2 py-1 rounded bg-black text-white border border-zinc-700"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-32 px-2 py-1 rounded bg-black text-white border border-zinc-700"
          />
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-700 p-3 rounded-lg"
            >
              <div className="h-[200px] overflow-hidden rounded">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-white font-medium mt-2">
                {item.name}
              </p>

              <div className="flex justify-between text-white text-sm">
                <span>₹{item.price}</span>
                <span>⭐ {item.rating}</span>
              </div>

              {/* BUY NOW */}
              <button
                onClick={() => setSelectedProduct(item)}
                className="mt-3 w-full bg-[#12DAAA] text-black py-1 rounded font-medium"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* BUY FORM MODAL */}
      {selectedProduct && (
        <BuyNowForm
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Product;
