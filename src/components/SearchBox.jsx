import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../config/api";

const SearchBox = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 Debounced search
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        fetchProducts();
      } else {
        setProducts([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/product/search?query=${search}`);

      const data = await res.json();

      setProducts(data.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center rounded-lg overflow-hidden p-2 gap-3 bg-[#F7F7F7] border">
        <FiSearch className="text-[#606060]" />

        <label htmlFor="search" className="sr-only">
          Search
        </label>

        <input
          id="search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-1 bg-[#F7F7F7] outline-none"
          placeholder="Search products..."
        />
      </div>

      {search && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-2 z-50 max-h-96 overflow-y-auto">
          {loading ? (
            <p className="p-4 text-gray-500">Searching...</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div
                key={product._id}
                onClick={() => {
                  navigate(`/product/${product._id}`);
                  setSearch("");
                  setProducts([]);
                }}
                className="flex items-center gap-3 p-3 hover:bg-gray-100 cursor-pointer border-b"
              >
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-14 h-14 object-cover rounded"
                />

                <div>
                  <h1 className="font-semibold text-sm">{product.name}</h1>

                  <p className="text-[#bb2821] text-sm">${product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="p-4 text-gray-500">No products found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
