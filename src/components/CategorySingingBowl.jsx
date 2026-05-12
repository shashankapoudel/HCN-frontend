import React, { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";
import AddToCart from "./AddToCart";
import QuickViewProd from "./QuickViewProd";
import Price from "./Price";

const CategorySingingBowl = () => {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter(
    (p) => p.category === "singing-bowls",
  );

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-2 lg:p-4 gap-2">
      <div>
        <h1 className="text-[#111111] text-center font-edensor text-lg">
          Himalayas Healer Collection
        </h1>
        <p className="text-[#606060] text-sm md:text-base text-center">
          We offer specially crafted Himalayan singing bowls and sound healing
          tools for healers, meditators, and spiritual practitioners.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5">
        {filteredProducts.slice(0, 4).map((product) => (
          <div
            key={product._id}
            className="w-full flex flex-col p-3 lg:p-6 bg-white shadow-lg justify-between"
          >
            <div className="relative w-full aspect-square overflow-hidden group">
              <QuickViewProd product={product} />

              <img
                src={product.images[0]}
                alt={product.name}
                loading="lazy"
                className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 cursor-pointer"
              />

              <img
                src={product.images[1]}
                alt={product.name}
                loading="lazy"
                className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <div>
                <h1 className="text-left text-[#111111] font-bold text-base capitalize">
                  {product.name}
                </h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: truncateText(product.description, 15),
                  }}
                  className="text-[#606060] font-edensor text-base"
                ></p>
              </div>

              <div className="flex justify-between items-center">
                <Price amount={product.price} />
                {/* <p className="text-[#bb2821] font-bold">${product.price}</p> */}
                <AddToCart product={product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySingingBowl;
