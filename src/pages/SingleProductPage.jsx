import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import BASE_URL from "../config/api";
import AddAccessories from "../components/AddAccessories";
import AddToCart from "../components/AddToCart";

import { useRef } from "react";
import Price from "../components/Price";

const SingleProductPage = () => {
  const thumbsRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);
  const [mainIndex, setmainIndex] = useState(0);
  const [hasAccessory, setHasAccessory] = useState(false);
  const [hasLogoEngraved, setHasLogoEngraved] = useState(false);

  const category1 = ["Matte Black", "Tiger", "Silver", "Gold"];
  const category2 = ["Note 1", "Note 2"];
  const category3 = ["Accessories1", "Accessories 2"];

  const smallDescription = [
    {
      groupId: "c4123",
      description:
        "This travel mini master singing bowl set is designed for powerful healing and deep sound therapy . It produces perfect resonance that supports meditation, relaxation and energy balancing. Each bowl is carefully crafted under detailed supervision to ensure precise tuning and quality. Its pure vibrations help calm the mind and enhance inner peace during healing sessions.",
    },
  ];

  const scrollLeft = () => {
    thumbsRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    thumbsRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  const handleShowDescription = () => {
    setShowDescription((prev) => !prev);
  };

  const handleShowOverview = () => {
    setShowOverview((prev) => !prev);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${BASE_URL}/product/${id}`);
        const data = await res.json();
        setProduct(data.data);
        setDisplayImages(data.data.images);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const fetchProductByGroupId = async () => {
      if (product?.groupId) {
        try {
          const res = await fetch(
            `${BASE_URL}/product/group/${product.groupId}`,
          );

          const data = await res.json();
          console.log(data);
          setRelatedProducts(data.data);
        } catch (error) {
          console.log("Failed to fetch Related Products");
        }
      }
    };
    fetchProductByGroupId();
  }, [product]);

  console.log(product);

  console.log(relatedProducts);
  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }
  const filteredDescription = smallDescription.find(
    (s) => s.groupId === product.groupId,
  );

  const handleImageClick = (index) => {
    setmainIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const handleBack = () => {
    navigate(`/${product.category}/${product.subcategory}`);
  };

  const handleBackToSubcategorycategory = () => {
    navigate(
      `/${product.category}/${product.subcategory}/${product.subcategorycategory}`,
    );
  };

  const handleBackToCategory = () => {
    navigate(`/${product.category}`);
  };

  const handleBackToHome = () => {
    navigate("");
  };

  const handleColorClick = (color) => {
    console.log(color);
    const matched = relatedProducts.find((p) => p.color === color);
    console.log(matched);
    if (matched) {
      setDisplayImages(matched.images);
      setProduct(matched);
    }
  };

  const accessoryPrice = hasAccessory ? 30 : 0;
  const finalPrice = Number(product.price) + accessoryPrice;

  console.log(product.category);
  console.log(product.subcategory);
  console.log(product.subcategorycategory);

  const handleWhatsAppBuy = () => {
    const phoneNumber = "9779849779322";

    let message = `Hello, I want to buy ${product.name}`;

    if (hasAccessory) {
      message += `. Accessory needed too`;
    }

    if (hasLogoEngraved) {
      message += `. I need logo engraving too`;
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex gap-1 font-poppins text-sm font-extralight px-2 lg:px-6 py-2 lg:py-4 ">
        <button
          className="text-[#f0b3b0] hover:text-[#8a0c06] text-left"
          onClick={handleBackToHome}
        >
          Home /
        </button>

        <button
          className=" text-[#f0b3b0] hover:text-[#8a0c06] text-left"
          onClick={handleBackToCategory}
        >
          {product.category} /
        </button>

        <button
          className="text-[#f0b3b0] hover:text-[#8a0c06] text-left"
          onClick={handleBack}
        >
          {product.subcategory} /
        </button>

        <button
          className="text-[#f0b3b0] hover:text-[#8a0c06] text-left"
          onClick={handleBackToSubcategorycategory}
        >
          {product.subcategorycategory}
        </button>
      </div>

      <div className="px-6">
        <div className="flex flex-col lg:flex-row gap-8 justify-evenly mt-4 items-start">
          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            <img
              src={displayImages[mainIndex]}
              alt={product.name}
              loading="lazy"
              className="w-full h-auto object-cover rounded  cursor-pointer"
            />

            <div className="flex items-center">
              <button onClick={scrollLeft} className="p-2">
                ◀
              </button>

              <div
                ref={thumbsRef}
                className="flex gap-2 overflow-x-auto scroll-smooth px-8"
              >
                {displayImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    loading="lazy"
                    onClick={() => handleImageClick(index)}
                    className={`w-20 h-20 object-cover rounded cursor-pointer border flex-shrink-0
            ${mainIndex === index ? "border-[#bb2821]" : "border-transparent"}
          `}
                  />
                ))}
              </div>

              <button
                onClick={scrollRight}
                className=" bg-white shadow p-2 rounded-full"
              >
                ▶
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col p-2 lg:p-3">
            <h1 className="text-xl lg:text-2xl  font-bold capitalize text-[#bb2821] text-center lg:text-start">
              {product.name}
            </h1>

            <div>
              <button className="font-medium bg-[#bb2821] text-lg border-2 border-[#bb2821] px-2 py-1 text-white">
                <Price amount={product.price} />
              </button>
            </div>

            <p className="text-sm p-2  text-[#606060] tracking-wide leading-relaxed text-justify max-w-4xl">
              {filteredDescription?.description}
            </p>

            <div className="flex flex-col gap-2  shadow-md">
              <div className="w-full rounded-md">
                <div
                  onClick={handleShowDescription}
                  className="flex items-center justify-between border p-4 cursor-pointer"
                >
                  <h1 className="text-[#0B4D81] font-bold">Product Overview</h1>
                  <button className="">
                    {!showDescription ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                </div>

                {showDescription && (
                  <div className="p-2">
                    <p
                      className="text-[#606060] tracking-wide leading-relaxed text-justify max-w-4xl text-sm whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: product.description,
                      }}
                    />
                  </div>
                )}
              </div>

              <div className="w-full rounded-md">
                <div
                  onClick={handleShowOverview}
                  className="flex items-center justify-between border p-4 cursor-pointer"
                >
                  <h1 className="text-[#0B4D81] font-bold">Product Guide</h1>
                  <button className="">
                    {!showOverview ? <FaChevronDown /> : <FaChevronUp />}
                  </button>
                </div>

                {showOverview && (
                  <div className="p-2">
                    <p
                      className="text-[#606060] tracking-wide leading-relaxed text-justify max-w-4xl text-sm whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: product.overview,
                      }}
                    />
                    <Link to="https://www.himalayascraftnepal.com/blogs/68258d0c88f223446c359d0d">
                      How to clean your singing bowl
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <hr className="my-4" />
            <div className="mt-4 gap-4 flex">
              <AddToCart
                product={product}
                hasAccessory={hasAccessory}
                finalPrice={finalPrice}
              />
              <button
                onClick={() =>
                  navigate("/cart", {
                    state: {
                      name: product.name,
                      price: product.price,
                    },
                  })
                }
                className="bg-gradient-to-r from-[#bb2821] to-[#0B4D81] text-[#FFFFFF] text-sm p-2 px-4"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 p-2">
              <h1 className="font-semibold text-[#bb2821]">Select Color:</h1>
              <div className="grid grid-cols-2 lg:grid-cols-4  gap-4 py-3">
                {category1.map((cat, index) => (
                  <div className="">
                    <button
                      onClick={() => handleColorClick(cat)}
                      className="border border-[#bb2821] text-[#0B4D81] w-full p-4 hover:bg-[#0B4D81] hover:text-white"
                    >
                      {cat}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* 
            <div className="mt-4 p-2">
              <h1 className="font-semibold text-[#bb2821]">
                Select Accessories Bundle:
              </h1>
              <div className="flex gap-4 py-3">
                {category3.map((cat, index) => (
                  <div className="">
                    <button className="border border-[#bb2821] text-[#0B4D81] p-4">
                      {cat}
                    </button>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <div className="mt-4 p-2">
              <div className="flex gap-4 py-3">
                <div className="">
                  <button
                    onClick={() => setHasAccessory((prev) => !prev)}
                    className={`border p-4 hover:bg-[#ADD8E6] hover:text-[#FFFFFF] ${
                      hasAccessory
                        ? "bg-[#0B4D81] text-white"
                        : "text-[#0B4D81]"
                    }`}
                  >
                    {hasAccessory ? "Accessory Added ✓" : "Add Accessories"}
                  </button>
                  <h1 className="text-center">+$30</h1>
                </div>
              </div>
            </div> */}

            <div className="mt-4 p-2">
              <h1 className="font-semibold text-[#bb2821]">Add-ons</h1>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <button
                    onClick={() => setHasLogoEngraved((prev) => !prev)}
                    className={`border border-[#bb2821] text-[#bb2821] px-2 py-1 hover:bg-[#0B4D81] hover:text-white ${
                      hasLogoEngraved
                        ? "bg-[#0B4D81] text-white"
                        : "text-[#0B4D81]"
                    }`}
                  >
                    {hasLogoEngraved ? "Logo engraved needed" : "Logo engrave"}
                  </button>
                  <button className="bg-[#bb2821] text-[#ffffff] w-full lg:w-1/2">
                    (+$70)
                  </button>
                </div>

                <div className="flex flex-col">
                  <button
                    onClick={() => setHasAccessory((prev) => !prev)}
                    className={`border border-[#bb2821] text-[#bb2821] px-2 py-1 hover:bg-[#0B4D81] hover:text-white ${
                      hasAccessory
                        ? "bg-[#0B4D81] text-white"
                        : "text-[#0B4D81]"
                    }`}
                  >
                    {hasAccessory ? "Accessory Added ✓" : "Add Accessories"}
                  </button>
                  <button className="bg-[#bb2821] text-[#ffffff] w-full lg:w-1/2">
                    (+$50)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="mt-4">
        <AddAccessories />
      </div> */}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl w-full p-4">
            <img
              src={selectedImage}
              alt="Enlarged product"
              className="w-full max-h-[80vh] object-cover rounded-lg"
              loading="lazy"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
