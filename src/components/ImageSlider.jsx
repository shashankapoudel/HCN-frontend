// import React, { useState, useEffect } from "react";

// const ImageSlider = () => {
//   const images = ["/Images/HomePage.jpg"];

//   return (
//     <div>
//       <div className="relative  w-full max-h-screen">
//         <img
//           src="/Images/HomePage.jpg"
//           // alt={`Slide ${currentIndex + 1}`}
//           className="object-cover w-full max-h-screen relative z-[-1]"
//           loading="lazy"
//         />

//         <div className="absolute inset-0 flex  mt-12 lg:mt-56 lg:justify-start px-4 md:px-8 z-[-1]">
//           <p className="text-2xl md:text-4xl lg:text-6xl text-[#FFFFFF] font-medium font-edensor ">
//             Experience the Harmony of <br /> Handmade Singing Bowls
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React from "react";

const ImageSlider = () => {
  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[calc(100vh-185px)] overflow-hidden">
      {/* Background Image */}
      <img
        src="/Images/HomePage.jpg"
        alt="Himalayan Singing Bowl Healing"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#052F5F]/95 via-[#06447A]/75 via-55% to-transparent z-10"></div>

      {/* Additional Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#031F3D]/40 via-transparent to-transparent z-10"></div>

      {/* Subtle Sound Wave Circles */}
      <div className="absolute top-10 left-[48%] w-[500px] h-[500px] rounded-full border border-white/10 z-10 pointer-events-none">
        <div className="absolute inset-10 rounded-full border border-white/10"></div>
        <div className="absolute inset-20 rounded-full border border-white/10"></div>
        <div className="absolute inset-32 rounded-full border border-white/10"></div>
        <div className="absolute inset-44 rounded-full border border-white/10"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[850px]">
            {/* Small Heading */}
            {/* <p className="text-sm md:text-base tracking-[3px] font-semibold text-white/90 uppercase mb-6">
              Established 2014 · Kathmandu, Nepal
            </p> */}

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl  leading-[1.08] text-white font-medium font-edensor">
              Handcrafted Healing Sounds from Healers and Artisans
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mt-8">
              HEALERS SHOP
            </p>

            <p className="text-xl md:text-2xl lg:text-3xl text-white italic font-edensor mt-8">
              Rooted in the Himalayas, Crafted by Artisans, Inspired by Healers.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/products"
                className="bg-white text-[#064477] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Explore Collections
              </a>

              <a
                href="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#064477] transition duration-300"
              >
                Discover Our Crafts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
