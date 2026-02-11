import { useLocation } from "react-router-dom";
import data from "../data/data.json";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";

  // 🔥 Flatten all products
  const allProducts = Object.values(data).flat();

  const filteredProducts = allProducts.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen p-6">
      <h2 className="text-white text-2xl mb-6">
        Search results for "<span className="text-[#12DAAA]">{query}</span>"
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-400">No products found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-800 p-3 rounded-lg"
            >
              <div className="h-[200px] bg-zinc-900 rounded overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-white mt-2 text-sm">
                {item.name}
              </p>

              <div className="flex justify-between text-sm mt-1">
                <span className="text-cyan-400">
                  ₹{item.price}
                </span>
                <span className="text-yellow-400">
                  ⭐ {item.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
