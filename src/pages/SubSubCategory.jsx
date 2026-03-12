
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import AddToCart from "../components/AddToCart";
import QuickViewProd from "../components/QuickViewProd";

const SubSubCategory = () => {



const subsubcategoryDescription=[

{
  name: "jambati",
  description:"Jambati singing bowls come from the Himalayan regions of Nepal and Tibet, where people have used them for many centuries in spiritual and cultural practices. They are handmade by skilled artisans using bronze and other metals, and their making is seen as a traditional and sacred art. These bowls usually have a round shape with broad rims and high walls, sometimes with simple or detailed engravings. Jambati bowls are larger in size than many other singing bowls, which helps them create deep and strong vibrations. They produce warm, rich, and long-lasting sounds that feel very calming. People commonly use them for meditation, sound healing, yoga, and spiritual rituals to relax the mind, reduce stress, and improve overall well-being."
},

{
  name: "manipuri",
  description:"Manipuri singing bowls come from the state of Manipur and are believed to be one of the oldest types of singing bowls used for over 500 years in both daily life and spiritual practices. They are usually small and shallow in shape with a rounded bottom, making them lightweight and easy to hold or carry. These bowls often have simple and elegant designs or inscriptions that reflect the culture of the region. Because of their compact size, Manipuri bowls produce higher-pitched and lighter sounds that fade more quickly than larger bowls. The gentle vibrations they create are calming and less intense, which makes them ideal for beginners in meditation and sound therapy. People commonly use them for meditation, healing practices, and travel due to their portability, helping to improve focus, relaxation, and spiritual connection."
},


]



  const { category, subcategory,subsubcategory } = useParams();
  console.log(category)
  console.log(subcategory)
  console.log(subsubcategory)
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (p) => p.category === category && p.subcategory === subcategory
  );

  // Remove HTML tags and truncate text
 const truncateText = (html, wordLimit) => {
  if (!html) return "";

  // Decode HTML entities
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  const decoded = txt.value;

  // Remove HTML tags
  const cleanText = decoded.replace(/<[^>]*>/g, "");

  // Truncate words
  const words = cleanText.split(" ");
  return words.length <= wordLimit
    ? cleanText
    : words.slice(0, wordLimit).join(" ") + "...";
};

const filteredDescription = subsubcategoryDescription.find((s)=> s.name === subsubcategory);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center">
        {subsubcategory.replace("-", " ")}
      </h1>

      <p className="text-center text-[#606060]  font-edensor text-lg tracking-wide">
        {filteredDescription?.description}
      </p>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl">No Products Found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="w-full flex flex-col p-6 bg-white shadow-lg justify-between"
            >
          
              <div
                onClick={() => navigate(`/product/${product._id}`)}
                className="relative w-full aspect-square overflow-hidden group cursor-pointer"
              >
                <QuickViewProd product={product} />

                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                />

                {product.images[1] && (
                  <img
                    src={product.images[1]}
                    alt={product.name}
                    loading="lazy"
                    className="object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                )}
              </div>

              {/* Product Info */}
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

export default SubSubCategory;