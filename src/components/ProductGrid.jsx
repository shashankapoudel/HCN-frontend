import React from "react";
import AddToCart from "./AddToCart";
import QuickViewProd from "./QuickViewProd";
import Price from "./Price";
import { Link } from "react-router-dom";

const ProductGrid = ({ title, description, products }) => {
  const truncateText = (text = "", wordLimit = 16) => {
    const words = text.split(/\s+/).filter(Boolean);

    if (words.length <= wordLimit) return text;

    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const optimizeImage = (url, width = 400) => {
    if (!url) return "";

    return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-2 lg:p-4 gap-2">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8 items-stretch">
        {products.map((product) => (
          <div
            key={product._id}
            className="w-full h-full flex flex-col bg-white shadow-md rounded-md overflow-hidden transition-all duration-200 hover:shadow-lg p-3 lg:p-5"
          >
            {/* IMAGE: Same aspect ratio for every product */}
            <Link
              to={`/product/${product._id}`}
              className="block w-full shrink-0"
            >
              <div className="relative bg-[#EBEBEB] w-full aspect-square overflow-hidden group">
                <QuickViewProd product={product} />

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
                    src={optimizeImage(product.images[1], 400)}
                    alt={product.name}
                    loading="lazy"
                    className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                )}
              </div>
            </Link>

            <div className="flex flex-col flex-1 min-w-0 mt-3">
              <div className="min-h-[3.5rem]">
                <h2 className="text-[#111111] font-bold text-base lg:text-lg capitalize leading-7 line-clamp-2">
                  {product.name}
                </h2>
              </div>

              <div className="min-h-[4.5rem] mt-1">
                <p
                  className="text-[#606060] text-base font-edensor leading-6 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: truncateText(product.description, 16),
                  }}
                />
              </div>

              <div className="flex justify-between items-center gap-2 mt-auto pt-3">
                <div className="min-w-0">
                  <Price amount={product.price} />
                </div>

                <div className="shrink-0">
                  <AddToCart product={product} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
