// import React, { useState } from "react";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// const WhyHCN = () => {
//   const Services = [
//     {
//       title: "Our own Factories and Artisans",
//       description:
//         "We're not just a shop; we're the makers. We proudly craft our own products right here in Nepal, in our very own workshops. This means we work directly with our incredibly talented Nepali artisans, ensuring every single piece is created under ethical conditions and with fair wages. Because we oversee the entire process, from the first step to the last, you receive exceptionally high-quality crafts made with genuine, time-honored traditional methods. It's quality and authenticity, guaranteed.",
//       image: "/Images/Singing_Bowl_Factory/Singingbowl_FACTORY3.jpg",
//     },

//     {
//       title: "Customizations and Personalised products",
//       description:
//         "We believe every product should tell your story. That’s why we offer customizations and personalized creations designed just for you. From unique designs to meaningful details, our skilled Nepali artisans work closely with your ideas to bring them to life. Whether it’s a special gift or something personal for yourself, each piece is thoughtfully crafted with care, precision, and a touch of individuality. With us, you don’t just buy a product—you create something truly one of a kind.",
//       image: "/Images/homeImage.png",
//     },

//     {
//       title: "Unwavering Authenticity",
//       description:
//         "In a market full of fakes, we stand firm on guaranteed authenticity. Every single item, from our detailed Thangka paintings to our hand-beaten singing bowls, is a genuine product of Nepal. They're made using traditional techniques and local materials. We share clear information about where our products come from and how they're made, so you can be completely sure you're getting a true piece of Himalayan heritage.",
//       image: "/Images/Singing_Bowl_Factory/Singingbowl_FACTORY5.jpg",
//     },

//     {
//       title: "Spiritual Integrity & Global shipping",
//       description:
//         "Our promise goes beyond simply selling products. We deeply respect the spiritual essence of every item, making sure each one is crafted with care and often blessed before it leaves Nepal. With our reliable worldwide shipping, we bring the sacred energy and true craftsmanship of the Himalayas right to your door, wherever you are, with deep care and respect.",
//       image: "/Images/homeImage.png",
//     },

//     {
//       title: "Curated by Sound Healing Experts",
//       description:
//         "Our Himalayan singing bowls are far from just a random collection. Each one is carefully chosen by certified sound healing experts. This special process means every bowl isn't just beautiful to look at, but more importantly, it delivers superior sound vibrations and real healing potential. When you pick a singing bowl from us, you're getting a powerful tool that's been professionally checked and approved to create truly deep, healing sounds.",
//       image: "/Images/team.jpg",
//     },

//     {
//       title: "Healer's Collections",
//       description:
//         "Healer’s Collections is a celebration of wellness, balance, and natural healing. Each piece in this collection is thoughtfully curated and crafted to promote peace, positivity, and holistic well-being. Inspired by traditional practices and the wisdom of nature, our products are made using authentic materials and mindful techniques by skilled Nepali artisans. Whether it’s for relaxation, spiritual connection, or everyday harmony, every item is designed to nurture your mind, body, and soul—bringing a sense of calm and healing into your daily life.",
//       image: "/Images/OurStory4.jpg",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);

//   const handleNext = () => {
//     if (isFlipping) return;

//     setIsFlipping(true);

//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev + 1) % Services.length);
//       setIsFlipping(false);
//     }, 500);
//   };

//   const handlePrevious = () => {
//     if (isFlipping) return;

//     setIsFlipping(true);

//     setTimeout(() => {
//       setCurrentIndex((prev) => (prev === 0 ? Services.length - 1 : prev - 1));
//       setIsFlipping(false);
//     }, 500);
//   };

//   return (
//     <div className="p-3 lg:p-5 flex flex-col">
//       <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">
//         Why should you choose Us (HCN)?
//       </h1>

//       <div
//         className={`flex flex-col lg:flex-row h-[550px] lg:h-[400px] p-2 lg:p-5 rounded-md justify-evenly gap-4 mt-4 bg-white shadow-lg ${
//           isFlipping ? "flip-rotate" : ""
//         }`}
//       >
//         <div className="w-full lg:w-1/3 h-[220px] lg:h-full mt-3">
//           <img
//             src={Services[currentIndex].image}
//             className="object-cover rounded-md w-full h-full"
//             alt={Services[currentIndex].title}
//             loading="lazy"
//           />
//         </div>

//         <div className="w-full lg:w-1/2 p-1 lg:p-2 overflow-y-auto">
//           <h1 className="text-[#0B4D81] text-xl font-semibold">
//             {Services[currentIndex].title}
//           </h1>

//           <p className="text-[#666666] mt-2 font-medium text-sm lg:text-base font-poppins text-justify tracking-wide">
//             {Services[currentIndex].description}
//           </p>
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex items-center justify-center mt-4 h-10">
//         <button
//           className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//           onClick={handlePrevious}
//           disabled={isFlipping}
//         >
//           <GrFormPrevious />
//         </button>

//         <button
//           className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//           onClick={handleNext}
//           disabled={isFlipping}
//         >
//           <GrFormNext />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WhyHCN;

import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Services = [
  {
    title: "Our own Factories and Artisans",
    short: "Factories & Artisans",
    description:
      "We're not just a shop; we're the makers. We proudly craft our own products right here in Nepal, in our very own workshops. This means we work directly with our incredibly talented Nepali artisans, ensuring every single piece is created under ethical conditions and with fair wages. Because we oversee the entire process, from the first step to the last, you receive exceptionally high-quality crafts made with genuine, time-honored traditional methods. It's quality and authenticity, guaranteed.",
    image: "/Images/Singing_Bowl_Factory/Singingbowl_FACTORY3.jpg",
  },
  {
    title: "Customizations and Personalised products",
    short: "Customizations",
    description:
      "We believe every product should tell your story. That’s why we offer customizations and personalized creations designed just for you. From unique designs to meaningful details, our skilled Nepali artisans work closely with your ideas to bring them to life. Whether it’s a special gift or something personal for yourself, each piece is thoughtfully crafted with care, precision, and a touch of individuality. With us, you don’t just buy a product—you create something truly one of a kind.",
    image: "/Images/homeImage.png",
  },
  {
    title: "Unwavering Authenticity",
    short: "Authenticity",
    description:
      "In a market full of fakes, we stand firm on guaranteed authenticity. Every single item, from our detailed Thangka paintings to our hand-beaten singing bowls, is a genuine product of Nepal. They're made using traditional techniques and local materials. We share clear information about where our products come from and how they're made, so you can be completely sure you're getting a true piece of Himalayan heritage.",
    image: "/Images/Singing_Bowl_Factory/Singingbowl_FACTORY5.jpg",
  },
  {
    title: "Spiritual Integrity & Global shipping",
    short: "Spiritual Integrity & Shipping",
    description:
      "Our promise goes beyond simply selling products. We deeply respect the spiritual essence of every item, making sure each one is crafted with care and often blessed before it leaves Nepal. With our reliable worldwide shipping, we bring the sacred energy and true craftsmanship of the Himalayas right to your door, wherever you are, with deep care and respect.",
    image: "/Images/homeImage.png",
  },
  {
    title: "Curated by Sound Healing Experts",
    short: "Sound Healing Experts",
    description:
      "Our Himalayan singing bowls are far from just a random collection. Each one is carefully chosen by certified sound healing experts. This special process means every bowl isn't just beautiful to look at, but more importantly, it delivers superior sound vibrations and real healing potential. When you pick a singing bowl from us, you're getting a powerful tool that's been professionally checked and approved to create truly deep, healing sounds.",
    image: "/Images/team.jpg",
  },
  {
    title: "Healer's Collections",
    short: "Healer's Collections",
    description:
      "Healer’s Collections is a celebration of wellness, balance, and natural healing. Each piece in this collection is thoughtfully curated and crafted to promote peace, positivity, and holistic well-being. Inspired by traditional practices and the wisdom of nature, our products are made using authentic materials and mindful techniques by skilled Nepali artisans. Whether it’s for relaxation, spiritual connection, or everyday harmony, every item is designed to nurture your mind, body, and soul—bringing a sense of calm and healing into your daily life.",
    image: "/Images/OurStory4.jpg",
  },
];

const WhyHCN = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = Services[currentIndex];

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % Services.length);
  const handlePrevious = () =>
    setCurrentIndex((prev) => (prev === 0 ? Services.length - 1 : prev - 1));

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="font-poppins">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xs tracking-[3px] uppercase text-[#bb2821] font-semibold">
          Why Choose Us
        </p>
        <h2 className="mt-3 text-3xl lg:text-4xl text-[#0B4D81] font-edensor font-medium leading-tight">
          Why should you choose Us (HCN)?
        </h2>
        <span className="block mt-4 mx-auto h-[3px] w-16 rounded-full bg-[#bb2821]" />
      </div>

      {/* Mobile: horizontal tabs */}
      <div className="lg:hidden mt-8 -mx-6 px-6 flex gap-2 overflow-x-auto pb-2">
        {Services.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setCurrentIndex(i)}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition ${
              i === currentIndex
                ? "bg-[#0B4D81] text-white border-[#0B4D81]"
                : "bg-white text-[#0B4D81] border-[#0B4D81]/20"
            }`}
          >
            {s.short}
          </button>
        ))}
      </div>

      <div className="mt-6 lg:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Desktop: vertical list */}
        <div className="hidden lg:flex lg:w-1/3 flex-col gap-2">
          {Services.map((s, i) => {
            const active = i === currentIndex;
            return (
              <button
                key={s.title}
                onClick={() => setCurrentIndex(i)}
                className={`group flex items-center gap-4 text-left px-5 py-4 rounded-xl border transition ${
                  active
                    ? "bg-white border-[#0B4D81]/20 shadow-md"
                    : "bg-transparent border-transparent hover:bg-white/70"
                }`}
              >
                <span
                  className={`text-lg font-edensor font-semibold ${
                    active ? "text-[#bb2821]" : "text-[#0B4D81]/40"
                  }`}
                >
                  {pad(i + 1)}
                </span>
                <span
                  className={`text-sm font-semibold leading-snug ${
                    active ? "text-[#0B4D81]" : "text-[#555555]"
                  }`}
                >
                  {s.short}
                </span>
                <span
                  className={`ml-auto h-8 w-[3px] rounded-full transition ${
                    active ? "bg-[#bb2821]" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-2xl shadow-xl shadow-[#0B4D81]/10 border border-[#0B4D81]/10 overflow-hidden flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative w-full md:w-2/5 h-[240px] md:h-auto md:min-h-[420px]">
              <img
                key={current.image + currentIndex}
                src={current.image}
                alt={current.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031F3D]/50 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 bg-white/90 text-[#bb2821] text-xs font-semibold tracking-[2px] px-3 py-1 rounded-full">
                {pad(currentIndex + 1)} / {pad(Services.length)}
              </span>
            </div>

            {/* Text */}
            <div className="w-full md:w-3/5 p-6 lg:p-8 flex flex-col">
              <h3 className="text-xl lg:text-2xl text-[#0B4D81] font-edensor font-medium leading-snug">
                {current.title}
              </h3>
              <span className="block mt-3 h-[3px] w-12 rounded-full bg-[#bb2821]" />

              <p className="mt-5 text-[#555555] text-sm lg:text-base leading-relaxed flex-1 md:max-h-[260px] md:overflow-y-auto md:pr-2">
                {current.description}
              </p>

              {/* Navigation */}
              <div className="mt-6 pt-5 border-t border-[#0B4D81]/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {Services.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to reason ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? "w-6 bg-[#bb2821]"
                          : "w-2 bg-[#0B4D81]/20"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    aria-label="Previous"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#bb2821]/40 text-[#bb2821] text-2xl hover:bg-[#bb2821] hover:text-white transition"
                  >
                    <GrFormPrevious />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next"
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-[#bb2821]/40 text-[#bb2821] text-2xl hover:bg-[#bb2821] hover:text-white transition"
                  >
                    <GrFormNext />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHCN;
