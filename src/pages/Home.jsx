import React from "react";
import OurProducts from "../components/OurProducts";
import CategoryWiseProducts from "../components/CategoryWiseProducts";
import Gallery from "../components/Gallery";
import GalleryCard from "../components/Gallery";
import ProductBadge from "../components/ProductBadges";
import Socialmedia from "../components/Socialmedia";
import CategorySingingBowl from "../components/CategorySingingBowl";
import ImageSlider from "../components/ImageSlider";
import ProductBadges from "../components/ProductBadges";
import SEO from "../components/Seo";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen w-full gap-4">
      <SEO
        title="Handcrafted Singing Bowls & Metal Handicrafts | Himalayas Craft Nepal"
        description="Shop authentic handmade singing bowls, chakra sets, metal handicrafts and traditional Nepalese home décor crafted by skilled artisans."
        url="https://himalayascraftnepal.com/"
      />
      <ImageSlider />

      <div className="p-2 md:p-4 ">
        <OurProducts />
      </div>

      <div className="p-2 md:p-4 ">
        <ProductBadges />
      </div>

      <div className="p-2 md:p-4">
        <CategorySingingBowl />
      </div>

      <div className="">
        <GalleryCard />
      </div>

      <div className="p-2 md:p-4 ">
        <Socialmedia />
      </div>
    </div>
  );
};

export default Home;
