// import React from "react";

// const ImageSlider = () => {
//   return (
//     <div className="relative w-full h-[550px] md:h-[650px] lg:h-[calc(100vh-185px)] overflow-hidden">
//       {/* Background Image */}
//       <img
//         src="/Images/HomePage2.jpeg"
//         alt="Himalayan Singing Bowl Healing"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//         loading="lazy"
//       />

//       {/* Blue Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#052F5F]/95 via-[#06447A]/50 via-55% to-transparent z-10"></div>

//       {/* Additional Dark Overlay for Better Text Visibility */}
//       <div className="absolute inset-0 bg-gradient-to-t from-[#031F3D]/40 via-transparent to-transparent z-10"></div>

//       {/* Subtle Sound Wave Circles */}
//       <div className="absolute top-10 left-[48%] w-[500px] h-[500px] rounded-full border border-white/10 z-10 pointer-events-none">
//         <div className="absolute inset-10 rounded-full border border-white/10"></div>
//         <div className="absolute inset-20 rounded-full border border-white/10"></div>
//         <div className="absolute inset-32 rounded-full border border-white/10"></div>
//         <div className="absolute inset-44 rounded-full border border-white/10"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="absolute inset-0 z-20 flex items-center">
//         <div className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20">
//           <div className="max-w-[850px]">
//             {/* Small Heading */}
//             {/* <p className="text-sm md:text-base tracking-[3px] font-semibold text-white/90 uppercase mb-6">
//               Established 2014 · Kathmandu, Nepal
//             </p> */}

//             <h1 className="text-4xl md:text-6xl lg:text-6xl  leading-[1.08] text-white font-medium font-edensor">
//               Handcrafted Healing Sounds from Himalayan Healers and Artisans
//             </h1>

//             <p className="text-xl bg-white px-2 py-1 w-1/2 lg:-1/3 text-center lg:text-3xl text-[#bb2821] font-semibold mt-8 font-edensor">
//               HEALERS SHOP
//             </p>

//             <p className="text-2xl lg:text-3xl text-white italic font-edensor mt-4 lg:mt-8">
//               Rooted in the Himalayas, Crafted by Artisans, Inspired by Healers.
//             </p>

//             <div className="flex flex-wrap gap-4 mt-10">
//               <a
//                 href="/products"
//                 className="bg-white text-[#064477] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
//               >
//                 Explore Collections
//               </a>

//               <a
//                 href="/contact"
//                 className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#064477] transition duration-300"
//               >
//                 Discover Our Crafts
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React from "react";

const ImageSlider = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[680px] lg:h-[calc(100vh-185px)] min-h-[600px] overflow-hidden bg-[#031F3D]">
      {/* Local keyframes (no tailwind config changes needed) */}
      <style>{`
        @keyframes hs-ripple {
          0%   { transform: scale(0.35); opacity: 0.55; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @keyframes hs-fade-up {
          0%   { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes hs-zoom {
          0%   { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        @keyframes hs-bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(8px); }
        }
        .hs-ripple  { animation: hs-ripple 6s ease-out infinite; }
        .hs-up      { opacity: 0; animation: hs-fade-up 0.9s ease-out forwards; }
        .hs-zoom    { animation: hs-zoom 18s ease-in-out infinite alternate; }
        .hs-bounce  { animation: hs-bounce 1.8s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hs-ripple, .hs-up, .hs-zoom, .hs-bounce { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Background image with slow zoom */}
      <img
        src="/Images/HomePage2.jpeg"
        alt="Himalayan Singing Bowl Healing"
        className="hs-zoom absolute inset-0 w-full h-full object-cover object-center"
        fetchpriority="high"
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#052F5F]/95 via-[#06447A]/55 via-55% to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#031F3D]/80 via-transparent to-[#031F3D]/20" />

      {/* Animated sound-wave rings */}
      <div className="pointer-events-none absolute z-10 top-1/2 -translate-y-1/2 right-[-120px] md:right-[4%] w-[420px] h-[420px] md:w-[560px] md:h-[560px]">
        {[0, 1.5, 3, 4.5].map((delay) => (
          <span
            key={delay}
            className="hs-ripple absolute inset-0 rounded-full border border-white/30"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
        <span className="absolute inset-[38%] rounded-full bg-white/5 backdrop-blur-[2px] border border-white/20" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-[820px]">
            {/* Brand badge */}
            <div
              className="hs-up inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/25 pl-2 pr-5 py-2"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="bg-white text-[#bb2821] font-semibold font-edensor tracking-[2px] text-sm md:text-base px-3 py-1 rounded-full">
                HEALERS SHOP
              </span>
              <span className="text-white/90 text-xs md:text-sm tracking-[2px] uppercase">
                Kathmandu · Nepal
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hs-up mt-6 text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-white font-medium font-edensor"
              style={{ animationDelay: "0.25s" }}
            >
              Handcrafted Healing Sounds from{" "}
              <span className="bg-gradient-to-r from-[#BFE3FF] via-white to-[#BFE3FF] bg-clip-text text-transparent">
                Himalayan Healers
              </span>{" "}
              and Artisans
            </h1>

            {/* Accent divider + tagline */}
            <div
              className="hs-up mt-7 flex items-start gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="mt-2 hidden sm:block h-[3px] w-14 shrink-0 rounded-full bg-[#bb2821]" />
              <p className="text-xl md:text-2xl lg:text-3xl text-white/95 italic font-edensor leading-snug">
                Rooted in the Himalayas, Crafted by Artisans, Inspired by
                Healers.
              </p>
            </div>

            {/* Buttons */}
            <div
              className="hs-up flex flex-wrap gap-4 mt-10"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="/products"
                className="group inline-flex items-center gap-2 bg-white text-[#064477] px-8 py-4 rounded-full font-semibold shadow-lg shadow-black/20 hover:bg-blue-50 hover:-translate-y-0.5 transition duration-300"
              >
                Explore Collections
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </a>

              <a
                href="/contact"
                className="inline-flex items-center border border-white/70 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#064477] hover:-translate-y-0.5 transition duration-300"
              >
                Discover Our Crafts
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute z-20 bottom-5 left-1/2 -translate-x-1/2 hs-bounce text-white/80">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
};

export default ImageSlider;
