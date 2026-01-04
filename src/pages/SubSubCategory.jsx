import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import AddToCart from "../components/AddToCart";
import QuickViewProd from "../components/QuickViewProd";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    p => p.category === category && p.subcategory === subcategory
  );

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length <= wordLimit
      ? text
      : words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {subcategory.replace("-", " ")}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl">No Products Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product._id}
              className="w-full flex flex-col p-6 bg-white shadow-lg justify-between"
            >
              {/* Image Wrapper */}
              <div
                onClick={() => navigate(`/product/${product._id}`)}
                className="relative w-full aspect-square overflow-hidden group cursor-pointer"
              >
                <QuickViewProd product={product} />

                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="object-cover w-full h-full absolute inset-0 
                             transition-opacity duration-300 group-hover:opacity-0"
                />

                <img
                  src={product.images[1]}
                  alt={product.name}
                  loading="lazy"
                  className="object-cover w-full h-full absolute inset-0 
                             opacity-0 transition-opacity duration-300 
                             group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 mt-4">
                <div>
                  <h1 className="text-[#111111] font-bold text-base capitalize">
                    {product.name}
                  </h1>
                  <p className="text-[#606060] text-sm">
                    {truncateText(product.description, 15)}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#bb2821] font-bold">${product.price}</p>
                  <AddToCart product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubcategoryPage;
