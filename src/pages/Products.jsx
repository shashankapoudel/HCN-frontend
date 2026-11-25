import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";

import Price from "../components/Price";
import AddToCart from "../components/AddToCart";

const Products = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  // All categories
  const categories = [
    "singing-bowls",
    "ritual-items",
    "statues",
    "shankha",
    "himalayas-art&paintings",
    "himalayas-hemp",
    "himalayas-crystals",
    "himalayas-healingcollections",
  ];

  // Format category name
  const formatTitle = (category) => {
    return category
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Remove HTML tags from description
  const cleanDescription = (description) => {
    if (!description) return "";

    const doc = new DOMParser().parseFromString(description, "text/html");

    return doc.body.textContent.replace(/\s+/g, " ").trim();
  };

  // Truncate description
  const truncateText = (text, limit) => {
    if (!text) return "";

    const words = text.split(" ");

    return words.length > limit
      ? words.slice(0, limit).join(" ") + "..."
      : text;
  };

  // Filter products for each category
  const categoryProducts = {};

  categories.forEach((category) => {
    if (category === "singing-bowls") {
      // Only Chakra singing bowls
      categoryProducts[category] = products.filter(
        (product) =>
          product.category === "singing-bowls" &&
          product.subcategory === "chakra",
      );
    } else {
      // Products belonging to other categories
      categoryProducts[category] = products.filter(
        (product) => product.category === category,
      );
    }
  });

  return (
    <div className="min-h-screen px-4 lg:px-10 py-8">
      {categories.map((category) => (
        <div key={category} className="mt-8">
          {/* Category Heading */}
          <h2 className="text-2xl font-bold mb-3 text-center">
            {formatTitle(category)}
          </h2>

          {categoryProducts[category].length > 0 ? (
            <>
              {/* Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categoryProducts[category].slice(0, 4).map((product) => (
                  <div
                    key={product._id}
                    className="w-full flex flex-col p-3 lg:p-6 bg-white shadow-lg gap-2 cursor-pointer"
                  >
                    {/* Product Images */}
                    <div
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="relative w-full aspect-square overflow-hidden group"
                    >
                      {product.images?.[0] && (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          loading="lazy"
                          className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                        />
                      )}

                      {product.images?.[1] && (
                        <img
                          src={product.images[1]}
                          alt={product.name}
                          loading="lazy"
                          className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col gap-2">
                      <div>
                        <h3 className="text-left text-[#111111] font-bold text-base capitalize">
                          {product.name}
                        </h3>

                        <p className="text-[#606060] font-edensor text-base">
                          {truncateText(
                            cleanDescription(product.description),
                            20,
                          )}
                        </p>
                      </div>

                      {/* Price and Cart */}
                      <div className="flex justify-between items-center">
                        <Price amount={product.price} />
                        <AddToCart product={product} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* See More */}
              <div className="flex w-full items-end justify-end mt-3">
                <button
                  onClick={() => navigate(`/${category}`)}
                  className="underline hover:text-red-300"
                >
                  See more
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 py-6">
              No products available.
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
