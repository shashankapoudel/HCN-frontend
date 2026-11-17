// import React, { useState } from "react";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// const OurArtisans = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const artisans = [
//     {
//       name: "The Hands Behind Every Bowl",
//       description:
//         "A singing bowl starts as a disc of metal. Our makers heat it, hammer it into shape, and heat it again, repeating this many times until the bowl has the right form. Some bowls take thousands of hammer strikes. After shaping, the inside is smoothed, and then the bowl is tuned by ear. Every bowl is different, so the sound you hear is the result of patient, careful work.",
//       image: "/Images/Artisans/1.jpeg",
//     },

//     {
//       name: "Carved by Hand, Shaped by Tradition",
//       description:
//         "Our carvers cut designs into wood using simple hand tools. Each cut is made by hand, so every piece has its own small differences. The designs are based on traditional Himalayan and Tibetan patterns, and each carving is smoothed and finished by hand before it reaches you.",
//       image: "/Images/Artisans/2.jpeg",
//     },

//     {
//       name: "Every Stick Tells the Sound",
//       description:
//         "Our stick makers shape each mallet by hand. The stick is used to strike a bowl or gong, so its weight, grip, and wood all affect the sound. Each stick is checked by hand before it leaves the workshop, so it feels comfortable and works well for healers and musicians.",
//       image: "/Images/Artisans/4.jpeg",
//     },

//     {
//       name: "Stitched with Care, Sewn by Women of Strength",
//       description:
//         "Our cushion makers sew each piece by hand, with strong seams that hold their shape. A good cushion keeps a singing bowl steady and makes a long practice more comfortable. Many of our cushion makers are women, and this work gives them a source of income and independence. Every stitch reflects their skill and pride",
//       image: "/Images/Artisans/5.jpeg",
//     },

//     {
//       name: "Every Line Drawn by Hand",
//       description:
//         "Our etching artists create fine patterns and images on metal by hand. They draw the design, then carefully mark it into the surface, one line at a time. This slow method gives each piece a unique look, and the detail often reflects the spiritual symbols and art of Nepal and Tibet.",
//       image: "/Images/Artisans/3.jpeg",
//     },
//   ];

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? artisans.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % artisans.length);
//   };

//   return (
//     <div className="p-3 lg:p-5 flex flex-col">
//       <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">
//         Our Artisans
//       </h1>

//       <div className="flex flex-col lg:flex-row h-[550px] lg:h-[400px] p-2 lg:p-5 rounded-md justify-evenly gap-4 mt-4 bg-white shadow-lg ">
//         <div className="w-full lg:w-1/3 h-[220px] lg:h-full mt-3">
//           <img
//             src={artisans[currentIndex].image}
//             className="object-cover rounded-md w-full h-full"
//             alt={artisans[currentIndex].name}
//             loading="lazy"
//           />
//         </div>

//         <div className="w-full lg:w-1/2 p-1 lg:p-2 overflow-y-auto">
//           <h1 className="text-[#0B4D81] text-xl font-semibold">
//             {artisans[currentIndex].name}
//           </h1>

//           <p className="text-[#666666] mt-2 font-medium text-sm lg:text-base font-poppins text-justify tracking-wide">
//             {artisans[currentIndex].description}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex items-center justify-center mt-4 h-10">
//         <button
//           className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//           onClick={handlePrevious}
//         >
//           <GrFormPrevious />
//         </button>

//         <button
//           className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//           onClick={handleNext}
//         >
//           <GrFormNext />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OurArtisans;

import React, { useState, useEffect } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const OurArtisans = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const artisans = [
    {
      name: "The Hands Behind Every Bowl",
      description:
        "A singing bowl starts as a disc of metal. Our makers heat it, hammer it into shape, and heat it again, repeating this many times until the bowl has the right form. Some bowls take thousands of hammer strikes. After shaping, the inside is smoothed, and then the bowl is tuned by ear. Every bowl is different, so the sound you hear is the result of patient, careful work.",
      image: "/Images/Artisans/1.jpeg",
    },
    {
      name: "Carved by Hand, Shaped by Tradition",
      description:
        "Our carvers cut designs into wood using simple hand tools. Each cut is made by hand, so every piece has its own small differences. The designs are based on traditional Himalayan and Tibetan patterns, and each carving is smoothed and finished by hand before it reaches you.",
      image: "/Images/Artisans/2.jpeg",
    },
    {
      name: "Every Stick Tells the Sound",
      description:
        "Our stick makers shape each mallet by hand. The stick is used to strike a bowl or gong, so its weight, grip, and wood all affect the sound. Each stick is checked by hand before it leaves the workshop, so it feels comfortable and works well for healers and musicians.",
      image: "/Images/Artisans/4.jpeg",
    },
    {
      name: "Stitched with Care, Sewn by Women of Strength",
      description:
        "Our cushion makers sew each piece by hand, with strong seams that hold their shape. A good cushion keeps a singing bowl steady and makes a long practice more comfortable. Many of our cushion makers are women, and this work gives them a source of income and independence. Every stitch reflects their skill and pride.",
      image: "/Images/Artisans/5.jpeg",
    },
    {
      name: "Every Line Drawn by Hand",
      description:
        "Our etching artists create fine patterns and images on metal by hand. They draw the design, then carefully mark it into the surface, one line at a time. This slow method gives each piece a unique look, and the detail often reflects the spiritual symbols and art of Nepal and Tibet.",
      image: "/Images/Artisans/3.jpeg",
    },
  ];

  // Preload all artisan images when the component mounts
  useEffect(() => {
    artisans.forEach((artisan) => {
      const img = new Image();
      img.src = artisan.image;
    });
  }, []);

  // Navigate to previous artisan
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? artisans.length - 1 : prev - 1));
  };

  // Navigate to next artisan
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artisans.length);
  };

  const currentArtisan = artisans[currentIndex];

  return (
    <div className="p-3 lg:p-5 flex flex-col w-full lg:w-2/3">
      <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">
        Our Artisans
      </h1>

      <div className="flex flex-col lg:flex-row h-[550px] lg:h-[400px] p-4 lg:p-5 rounded-md justify-evenly gap-4 mt-4 bg-white shadow-lg">
        {/* Artisan Image */}
        <div className="w-full lg:w-1/3 h-[220px] lg:h-full mt-3">
          <img
            key={currentArtisan.image}
            src={currentArtisan.image}
            className="object-cover rounded-md w-full h-full"
            alt={currentArtisan.name}
            loading="eager"
          />
        </div>

        {/* Artisan Details */}
        <div className="w-full lg:w-1/2 p-1 lg:p-2 overflow-y-auto">
          <h1 className="text-[#0B4D81] text-xl font-semibold">
            {currentArtisan.name}
          </h1>

          <p className="text-[#666666] mt-2 font-medium text-base lg:text-base font-poppins text-justify tracking-wide">
            {currentArtisan.description}
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center mt-4 h-10">
        <button
          type="button"
          aria-label="Previous artisan"
          className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
          onClick={handlePrevious}
        >
          <GrFormPrevious />
        </button>

        <button
          type="button"
          aria-label="Next artisan"
          className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
          onClick={handleNext}
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default OurArtisans;
