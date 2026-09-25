
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import AddToCart from "../components/AddToCart";
import QuickViewProd from "../components/QuickViewProd";
import Price from "../components/Price";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const { products } = useContext(ProductContext);


  const [maxPrice, setMaxPrice] = useState(10000);

  const [selectedSizes, setSelectedSizes] = useState([]);

  const handleSizeChange = (size) => {
    setSelectedSizes((previousSizes) => {
      if (previousSizes.includes(size)) {
        return previousSizes.filter((item) => item !== size);
      }

      return [...previousSizes, size];
    });
  };


  const filteredProducts = products.filter((product) => {
    // First check category and subcategory
    const matchesCategory =
      product.category === category && product.subcategory === subcategory;

    if (!matchesCategory) {
      return false;
    }

    const productPrice = Number(product.price) || 0;

    const matchesPrice = productPrice <= maxPrice;

    if (!matchesPrice) {
      return false;
    }

    if (selectedSizes.length === 0) {
      return true;
    }

    const productSize = String(product.size || "").toLowerCase();

    const matchesSize = selectedSizes.some((selectedSize) => {
      if (selectedSize === "small") {
        return productSize.includes("small") || productSize.includes("angel");
      }

      if (selectedSize === "medium") {
        return productSize.includes("medium") || productSize.includes("mini");
      }

      if (selectedSize === "large") {
        return productSize.includes("large") || productSize.includes("master");
      }

      return false;
    });

    return matchesSize;
  });


  const text = [
    {
      category: "handmade",
      text: "Handmade singing bowls come from the Himalayan region and are made using traditional hand-hammered techniques that have been passed down for generations. Skilled artisans heat metal and shape each bowl slowly by hand with repeated hammering until the perfect sound and vibration is achieved. These bowls are usually round in shape and come in different sizes, and each handmade bowl produces its own unique tone and long-lasting sound. Traditionally, singing bowls were used by monks for meditation, prayer, and healing rituals, but today they are widely used in yoga, sound therapy, relaxation, and stress relief. At our factory, we proudly produce handmade singing bowls using skilled artisans who work with great care and hard work until a perfect piece with the best sound quality is achieved.",
    },

    {
      category: "machinemade",
      text: "Machine-made singing bowls are produced using modern technology to create a smooth shape and consistent sound quality. These bowls are made with the help of machines that shape and finish the metal in a faster and more precise way. They usually have a uniform round design and come in different sizes suitable for beginners as well as professional use. Traditionally, singing bowls were used for meditation and healing practices, and today machine-made bowls are also used for yoga, sound therapy, relaxation, and stress relief. We produce machine-made singing bowls in our factory with careful finishing and quality checking to ensure a clear sound and a perfect final product.",
    },

    {
      category: "antique",
      text: "The Old/Antique Singing Bowl comes from the Himalayan regions of Nepal and Tibet and has been used for many generations; it has a round shape with a natural aged look that shows its traditional craftsmanship and history, and comes in different sizes from small handheld bowls to larger ones used for deep sound meditation. In the past, antique singing bowls were used for meditation, rituals, and healing practices, and today they are also used for sound therapy, yoga, and relaxation. We carefully produce old-style singing bowls in our own factory, where skilled artisans work with great patience and hard work until a perfect antique finish and sound is achieved.",
    },

    {
      category: "accessories",
      text: "Machine-made singing bowls are produced using modern technology to create a smooth shape and consistent sound quality. These bowls are made with the help of machines that shape and finish the metal in a faster and more precise way. They usually have a uniform round design and come in different sizes suitable for beginners as well as professional use. Traditionally, singing bowls were used for meditation and healing practices, and today machine-made bowls are also used for yoga, sound therapy, relaxation, and stress relief. We produce machine-made singing bowls in our factory with careful finishing and quality checking to ensure a clear sound and a perfect final product.",
    },

    {
      category: "chakra",
      text: "Chakra Set Singing bowls are specially designed singing bowls associated with the seven chakras of the body and are commonly used for meditation, sound healing, yoga, relaxation, and spiritual practices. These bowls produce soothing and resonant sounds that can help create a peaceful environment during meditation and mindfulness sessions. Each chakra singing bowl is often connected with a specific chakra and may feature corresponding symbols, colors, or designs representing different energy centers. Our chakra singing bowls are carefully crafted with attention to their shape, finish, and sound quality. They are suitable for beginners, meditation practitioners, yoga instructors, sound therapists, and anyone looking to enhance their relaxation and mindfulness practices.",
    },
  ];


  const truncateText = (description, wordLimit) => {
    if (!description) {
      return "";
    }

    const words = description.split(" ");

    if (words.length <= wordLimit) {
      return description;
    }

    return words.slice(0, wordLimit).join(" ") + "...";
  };

  // Find description for current subcategory
  const filteredText = text.find((item) => item.category === subcategory);

  const pageTitle =
    subcategory === "chakra"
      ? "Chakra Set Singing Bowls"
      : `${subcategory.replace("-", " ")} Singing Bowls`;

  const clearFilters = () => {
    setMaxPrice(10000);
    setSelectedSizes([]);
  };

  return (
    <div className="min-h-screen p-5 lg:p-8">

      <div className="p-2 lg:p-4 shadow-lg mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 capitalize text-center">
          {pageTitle}
        </h1>

        <p className="text-justify text-[#606060] font-edensor text-lg tracking-wide">
          {filteredText?.text}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
 

        <aside className="w-full lg:w-60 xl:w-64 flex-shrink-0">
          <div className="bg-white shadow-lg p-5 lg:sticky lg:top-5">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Filters</h2>

              {(selectedSizes.length > 0 || maxPrice < 10000) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#bb2821] hover:underline"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-bold mb-5">Price Range</h3>

     

              <div className="flex justify-between text-sm mb-2">
                <span>$1</span>

                <span>${maxPrice}</span>
              </div>

              <input
                type="range"
                min="1"
                max="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#bb2821] cursor-pointer"
              />


              <div className="flex items-center gap-2 mt-4">
                <div className="border border-gray-300 px-2 py-2 text-sm w-full text-center">
                  $1
                </div>

                <span className="text-sm">To</span>

                <div className="border border-gray-300 px-2 py-2 text-sm w-full text-center">
                  ${maxPrice}
                </div>
              </div>
            </div>


            <div>
              <h3 className="text-lg font-bold mb-4">Sizes</h3>

              <div className="space-y-4">

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes("small")}
                    onChange={() => handleSizeChange("small")}
                    className="mt-1 accent-[#bb2821] cursor-pointer"
                  />

                  <span className="text-sm leading-5">Small (Angel Set)</span>
                </label>


                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes("medium")}
                    onChange={() => handleSizeChange("medium")}
                    className="mt-1 accent-[#bb2821] cursor-pointer"
                  />

                  <span className="text-sm leading-5">Medium (Mini Set)</span>
                </label>

                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes("large")}
                    onChange={() => handleSizeChange("large")}
                    className="mt-1 accent-[#bb2821] cursor-pointer"
                  />

                  <span className="text-sm leading-5">Large (Master Set)</span>
                </label>
              </div>
            </div>
          </div>
        </aside>


        <div className="flex-1">
  

          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600 text-sm">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Product" : "Products"}
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="text-center">
                <p className="text-xl font-semibold mb-3">No Products Found</p>

                <button
                  onClick={clearFilters}
                  className="bg-[#bb2821] text-white px-5 py-2"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  className="w-full flex flex-col p-2 lg:p-4 gap-2 bg-white shadow-lg cursor-pointer"
                >

                  <Link
                    to={`/product/${product._id}`}
                    className="relative w-full aspect-square overflow-hidden group"
                  >
                    <QuickViewProd product={product} />

                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      loading="lazy"
                      className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 cursor-pointer"
                    />
                    {product.images?.[1] && (
                      <img
                        src={product.images[1]}
                        alt={product.name}
                        loading="lazy"
                        className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                      />
                    )}
                  </Link>

                  <div className="flex flex-col gap-2">
                    <div>
                      <h1 className="text-left text-[#111111] font-bold text-base capitalize">
                        {product.name}
                      </h1>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: truncateText(product.description, 16),
                        }}
                        className="text-[#606060] font-edensor text-base"
                      />
                    </div>


                    <div className="flex justify-between items-center">
                      <Price amount={product.price} />

                      <AddToCart product={product} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryPage;
