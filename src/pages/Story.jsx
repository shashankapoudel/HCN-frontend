// import React, { useState } from "react";
// import WhyHCN from "../components/WhyHCN";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
// import OurFactories from "../components/OurFactories";
// import StoryModal from "../components/StoryModal";

// const Story = () => {
//   const Images = [
//     "/Images/OurStory3.jpg",
//     "/Images/OurStory1.jpg",
//     "/Images/OurStory2.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="min-h-screen">
//       <div className="flex flex-col gap-5">
//         <div>
//           <div>
//             <img
//               src={Images[currentIndex]}
//               className="object-cover w-full h-auto lg:h-[520px] mb-0"
//               alt="Home"
//             />
//           </div>
//           <div className="flex items-center justify-center ">
//             <button
//               className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//               onClick={handlePrevious}
//             >
//               <GrFormPrevious />
//             </button>
//             <button
//               className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//               onClick={handleNext}
//             >
//               <GrFormNext />
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 sm:p-2 lg:p-6">
//           <div className="w-full lg:w-1/2 p-4">
//             <h1 className="text-[#0B4D81] text-xl font-semibold">
//               Himalayas Craft Nepal(HCN)
//             </h1>
//             <p className="text-[#666666] mt-2 font-medium font-poppins  lg:tracking-wide tracking-normal text-justify max-w-4xl text-sm lg:text-base">
//               Welcome to Himalayas Craft Nepal; your gateway to the rich
//               heritage of Nepalese and Tibetan craftsmanship. Based in
//               Kathmandu, we are serving customers around the globe, we are proud
//               to be both manufacturers and wholesalers of authentic, handcrafted
//               treasures. From Thangka Paintings, Singing Bowls, and Malas &
//               Beads to Incense Burners, Tingsha, and Himalayan Shirts, each item
//               in our collection reflects generations of artistry and devotion to
//               cultural preservation.
//               <br />
//               Our mission goes beyond commerce; we aim to make timeless
//               craftsmanship accessible to the world while uplifting the lives of
//               the artisans who bring these creations to life. These skilled
//               craftsmen, whose techniques have been passed down through
//               generations, are the heartbeat of our work. As both manufacturers
//               and wholesalers, we bridge the gap between these master craftsmen
//               and the world, ensuring their work reaches those who cherish
//               authenticity and cultural heritage.
//               <br />
//               At Himalayas Craft Nepal, we're not just offering products, we're
//               offering stories, traditions, and a piece of Nepal's soulful
//               legacy. Whether it's our intricately crafted metalwork, detailed
//               wood carvings, or naturally dyed fiber crafts, every creation
//               speaks to the richness of Nepalese tradition and the pride we take
//               in keeping it alive.
//             </p>

//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 px-4 py-2 bg-[#bb2821] text-white rounded hover:bg-[#a0201a] transition"
//             >
//               Read More
//             </button>
//           </div>

//           <div className="w-full lg:w-1/2 mt-8 ">
//             <img
//               src="/Images/OurStory5.jpg"
//               className="object-cover p-4 w-full rounded-md"
//               alt="Home"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         <div className="p-4 lg:p-8 font-poppins ">
//           <WhyHCN />
//         </div>

//         <div className="p-4 lg:p-8 font-poppins ">
//           <OurFactories />
//         </div>
//       </div>

//       <StoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </div>
//   );
// };

// export default Story;

import React, { useState } from "react";
import WhyHCN from "../components/WhyHCN";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import OurFactories from "../components/OurFactories";
import StoryModal from "../components/StoryModal";

const Images = [
  "/Images/OurStory3.jpg",
  "/Images/OurStory1.jpg",
  "/Images/OurStory2.jpg",
];

const crafts = [
  "Thangka Paintings",
  "Singing Bowls",
  "Malas & Beads",
  "Incense Burners",
  "Tingsha",
  "Himalayan Shirts",
];

const Story = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* ================= HERO CAROUSEL ================= */}
      <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[520px] overflow-hidden bg-[#052F5F]">
        <img
          key={currentIndex}
          src={Images[currentIndex]}
          alt="Himalayas Craft Nepal"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#031F3D]/85 via-[#052F5F]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052F5F]/60 to-transparent" />

        {/* Title */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 pb-10 lg:pb-14">
            <span className="inline-block text-xs md:text-sm tracking-[3px] uppercase text-white/90 border-b-2 border-[#bb2821] pb-1">
              Our Story
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl lg:text-6xl text-white font-medium font-edensor leading-tight max-w-3xl">
              Keeping Himalayan Craftsmanship Alive
            </h1>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 right-6 md:right-12 lg:right-20 flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 mr-2">
            {Images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-8 bg-white" : "w-3 bg-white/50"
                }`}
              />
            ))}
          </div>
          <button
            onClick={handlePrevious}
            aria-label="Previous image"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-2xl hover:bg-white hover:text-[#bb2821] transition"
          >
            <GrFormPrevious />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-2xl hover:bg-white hover:text-[#bb2821] transition"
          >
            <GrFormNext />
          </button>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-14 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-xs tracking-[3px] uppercase text-[#bb2821] font-semibold">
              Who We Are
            </p>
            <h2 className="mt-3 text-3xl lg:text-4xl text-[#0B4D81] font-edensor font-medium leading-tight">
              Himalayas Craft Nepal (HCN)
            </h2>
            <span className="block mt-4 h-[3px] w-16 rounded-full bg-[#bb2821]" />

            <p className="mt-6 text-[#555555] leading-relaxed text-sm lg:text-base">
              Welcome to Himalayas Craft Nepal; your gateway to the rich
              heritage of Nepalese and Tibetan craftsmanship. Based in
              Kathmandu, we serve customers around the globe and are proud to be
              both manufacturers and wholesalers of authentic, handcrafted
              treasures. Each item in our collection reflects generations of
              artistry and devotion to cultural preservation.
            </p>

            {/* Craft chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {crafts.map((c) => (
                <span
                  key={c}
                  className="px-4 py-1.5 rounded-full bg-[#0B4D81]/5 border border-[#0B4D81]/15 text-[#0B4D81] text-xs lg:text-sm font-medium"
                >
                  {c}
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3 bg-[#bb2821] text-white rounded-full font-semibold shadow-md shadow-[#bb2821]/20 hover:bg-[#a0201a] transition"
            >
              Read Full Story
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>

          {/* Image with offset frame */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-[560px] mx-auto lg:ml-auto">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-[#0B4D81]/25" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-[#bb2821]/10" />
              <img
                src="/Images/OurStory5.jpg"
                alt="Himalayas Craft Nepal artisans"
                loading="lazy"
                className="relative w-full rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION QUOTE ================= */}
      <section className="bg-gradient-to-r from-[#052F5F] via-[#06447A] to-[#0B4D81]">
        <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-14 lg:py-16 text-center">
          <span className="block text-5xl leading-none text-white/30 font-edensor">
            “
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl text-white italic font-edensor leading-snug">
            We're not just offering products, we're offering stories,
            traditions, and a piece of Nepal's soulful legacy.
          </p>
          <p className="mt-6 text-white/80 text-sm lg:text-base max-w-3xl mx-auto leading-relaxed">
            Our mission goes beyond commerce: to make timeless craftsmanship
            accessible to the world while uplifting the artisans who bring these
            creations to life.
          </p>
        </div>
      </section>

      {/* ================= WHY HCN ================= */}
      <section className="bg-[#F5F9FD]">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-14 lg:py-20">
          <WhyHCN />
        </div>
      </section>

      {/* ================= FACTORIES ================= */}
      <section className="bg-white">
        <div className="max-w-[1450px] mx-auto px-6 md:px-12 lg:px-20 py-14 lg:py-20">
          <OurFactories />
        </div>
      </section>

      <StoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Story;
