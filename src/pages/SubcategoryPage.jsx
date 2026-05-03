import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import AddToCart from "../components/AddToCart";
import QuickViewProd from "../components/QuickViewProd";

const SubcategoryPage = () => {
  const { category, subcategory } = useParams();
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter(
    (p) => p.category === category && p.subcategory === subcategory,
  );

  const text = [
    {
      category: "handmade",
      text: "Handmade singing bowls come from the Himalayan region and are made using traditional hand-hammered techniques that have been passed down for generations. Skilled artisans heat metal and shape each bowl slowly by hand with repeated hammering until the perfect sound and vibration is achieved . These bowls are usually round in shape and come in different sizes, and each handmade bowl produces its own unique tone and long-lasting sound . Traditionally, singing bowls were used by monks for meditation, prayer, and healing rituals, but today they are widely used in yoga, sound therapy, relaxation, and stress relief . At our factory, we proudly produce handmade singing bowls using skilled artisans who work with great care and hard work until a perfect piece with the best sound quality is achieved.",
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
  ];

  const navigate = useNavigate();

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const filteredText = text.find((t) => t.category === subcategory);

  return (
    <div className="min-h-screen p-3 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center">
        {subcategory.replace("-", " ")}
      </h1>

      <p className="text-center text-[#606060]  font-edensor text-lg tracking-wide">
        {filteredText?.text}
      </p>

      <p></p>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl">No Products Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="w-full flex flex-col p-6 bg-white shadow-lg justify-between cursor-pointer"
            >
              <div
                onClick={() => navigate(`/product/${product._id}`)}
                className="relative w-full aspect-square overflow-hidden group"
              >
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

              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-left text-[#111111] font-bold text-base capitalize">
                    {product.name}
                  </h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncateText(product.description, 15),
                    }}
                    className=" text-[#606060]  font-edensor text-base"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-[#bb2821] font-bold ">${product.price}</p>
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
