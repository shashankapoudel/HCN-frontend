// import React, { useContext, useState } from "react";
// import { ProductContext } from "../context/ProductProvider";
// import ProductGrid from "./ProductGrid";

// const ProductBadges = () => {
//   const { products } = useContext(ProductContext);
//   const [activeTab, setActiveTab] = useState("People's favourite");

//   const latestProducts = [...products]
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, 4);
//   const shuffled = [...products].sort(() => 0.5 - Math.random());
//   const customerFavorite = shuffled.slice(0, 4);
//   const onSale = shuffled.slice(4, 8);

//   const label = [
//     "People's favourite",
//     "Latest Products",
//     "On Sale",
//     "Himalayas Products",
//     "Healers Collection",
//   ];

//   const tabContent = {
//     favorite: {
//       title: "People's Favorite",
//       description: "Trending picks loved by our customers.",
//       products: customerFavorite,
//     },
//     latest: {
//       title: "Latest Products",
//       description: "Freshly added handicraft items just for you.",
//       products: latestProducts,
//     },
//     sale: {
//       title: "On Sale",
//       description: "Special products available at the best prices.",
//       products: onSale,
//     },
//   };

//   return (
//     <div className="w-full p-3">
//       <div className="flex justify-center items-center space-x-6 ">
//         {label.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`pb-2 relative font-edensor font-semibold capitalize text-lg md:text-base transition ${
//               activeTab === tab ? "text-[#bb2821]" : "text-[#999]"
//             }`}
//           >
//             {tab}
//             {activeTab === tab && (
//               <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#bb2821] rounded-full" />
//             )}
//           </button>
//         ))}
//       </div>

//       <ProductGrid
//         title={activeTab.title}
//         description={activeTab.description}
//         products={activeTab.products}
//       />
//     </div>
//   );
// };

// export default ProductBadges;

import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import ProductGrid from "./ProductGrid";

const ProductBadges = () => {
  const { products = [] } = useContext(ProductContext);

  const [activeTab, setActiveTab] = useState("favorite");

  // Latest 4 products
  const latestProducts = [...products]
    .sort(
      (a, b) =>
        new Date(b.createdAt || b.created_at || 0) -
        new Date(a.createdAt || a.created_at || 0),
    )
    .slice(0, 4);

  // Products for the other tabs
  const customerFavorite = products
    .filter((product) => product.label === "People's favourite")
    .slice(0, 4);

  const onSale = products.filter((product) => product.salesPrice).slice(0, 4);

  const himalayasProducts = products
    .filter((product) => product.label === "Himalayas Products")
    .slice(0, 4);

  const healersCollection = products
    .filter((product) => product.label === "Healers Collection")
    .slice(0, 4);

  // Tab labels and their corresponding products
  const tabContent = {
    favorite: {
      label: "People's favourite",
      title: "People's Favourite",
      description: "Trending picks loved by our customers.",
      products: customerFavorite,
    },
    latest: {
      label: "Latest Products",
      title: "Latest Products",
      description: "Freshly added handicraft items just for you.",
      products: latestProducts,
    },
    sale: {
      label: "On Sale",
      title: "On Sale",
      description: "Special products available at the best prices.",
      products: onSale,
    },
    himalayas: {
      label: "Himalayas Products",
      title: "Himalayas Products",
      description: "Discover authentic Himalayan handicrafts.",
      products: himalayasProducts,
    },
    healers: {
      label: "Healers Collection",
      title: "Healers Collection",
      description: "Explore our collection for healing and meditation.",
      products: healersCollection,
    },
  };

  const currentTab = tabContent[activeTab];

  return (
    <div className="w-full p-3">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
        {Object.entries(tabContent).map(([key, tab]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`pb-2 relative font-edensor font-semibold capitalize text-lg md:text-base transition ${
              activeTab === key ? "text-[#bb2821]" : "text-[#999]"
            }`}
          >
            {tab.label}

            {activeTab === key && (
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#bb2821] rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Products for the selected tab */}
      <ProductGrid
        title={currentTab.title}
        description={currentTab.description}
        products={currentTab.products}
      />
    </div>
  );
};

export default ProductBadges;
