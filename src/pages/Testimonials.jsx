import React from "react";

const testimonials = [
  {
    name: "Florenc",
    text: "I am really happy for having chosen this shop. Anu was very helpful and kind. I really appreciate his gesture, in addition to my order, there was a rice paper postcard with Buddha's eyes. Beautiful thought and gratitude for his customers. Thanks from Italy",
    avatar:
      "https://i.etsystatic.com/iusa/c5eefa/112508488/iusa_75x75.112508488_lwyo.jpg?version=0",
  },

  {
    name: "Stephanie",
    text: "I OG picked this seller because they were in the states. The item did end up shipping from Nepal, but the seller reimbursed me the tariff cost. The seller sent me a video of the bowls before shipping to ensure I was happy with them. They are resonant, lovely & a LOT lighter than my larger set of bowls. Im happy to have something easier to travel with",
    avatar:
      "https://i.etsystatic.com/iusa/39215f/31070493/iusa_75x75.31070493_t5hd.jpg?version=0",
  },

  {
    name: "Farah",
    text: "I recently purchased cymbals from Nepal, and I am absolutely thrilled with them! The craftsmanship is exceptional, and you can truly feel the care and tradition that goes into each pair. The sound is rich, resonant, and beautifully balanced, making them perfect for both spiritual and musical purposes. They’ve become a cherished part of my collection, and I can tell they’ll last for many years to come. I highly recommend these cymbals to anyone looking for high-quality, authentic instruments with a deep connection to Nepali craftsmanship. A truly wonderful purchase!",
    avatar:
      "https://i.etsystatic.com/iusa/84dfa3/95684875/iusa_75x75.95684875_pui3.jpg?version=0",
  },

  {
    name: "Alicja",

    text: "Amazing transaction, professional service. Helpful. Easy. My singing bowl sounds incredibly good 👍 Highly recommend. Will buy again Love and Light",
    avatar:
      "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png",
  },

  {
    name: "Lynn",
    text: "Outstanding quality and quick response on my order!",
    avatar:
      "https://i.etsystatic.com/iusa/fd334c/29803078/iusa_75x75.29803078_9hvt.jpg?version=0",
  },
  {
    name: "Melissa",

    text: "This was a lovely seller who even included a personal note in the shipment. The singing bowls are beautiful and sound amazing. I highly recommend both the bowls and the seller.",
    avatar:
      "https://i.etsystatic.com/site-assets/images/avatars/default_avatar.png?width=75",
  },
  {
    name: "Etsy buyer",
    text: "	Good quality and the case it comes with is so helpful",
    avatar:
      "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png",
  },
  {
    name: "Emily",
    text: "We are thrilled with this beautiful treasure. THANK YOU!!",
    avatar:
      "https://i.etsystatic.com/iusa/c05b98/104937261/iusa_75x75.104937261_92us.jpg?version=0",
  },

  {
    name: "Natalisa",
    text: "Absolutely beautiful piece made with love from Nepal🥰 The sound is incredible, very grateful ",
    avatar:
      "https://i.etsystatic.com/iusa/d214e8/117676858/iusa_75x75.117676858_bodh.jpg?version=0",
  },
  {
    name: "Bianca",
    text: "	5 out of 5 stars Lovely transaction overall. Very quick shipping coming from Nepal. Kind and efficient communication from shop owner. High quality instrument and accessories, and responsibly packed. Definitely go with this seller!",
    avatar:
      "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png",
  },
  {
    name: "Megan",
    text: "Easy company to work with - will definitely purchase more instruments in the future",
    avatar:
      "https://i.etsystatic.com/iusa/b3a16c/8453571/iusa_75x75.8453571.jpg?version=0",
  },
  {
    name: "Ana",
    text: "नमस्ते from Canada! What a pleasant experience! It makes me happy to have contributed and supported the local artisans of this wonderful, highly spiritual community! Your happiness is my happiness!",
    avatar:
      "https://i.etsystatic.com/iusa/52ef72/103981859/iusa_75x75.103981859_2ppm.jpg?version=0",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B4D81] to-[#bb2821] opacity-70 z-0" />

      <div className="relative z-10 flex flex-col items-center px-4 pt-20">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-[white]">
          YOU ARE <br className="block md:hidden" />
          <span className="text-[white]">THE CENTER OF OUR UNIVERSE</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full p-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white shadow-xl rounded-2xl p-4">
              <div className="flex items-start gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold">
                    {t.name} <span className="text-gray-500">{t.handle}</span>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[url('/rocket-bg.png')] bg-no-repeat bg-bottom bg-contain pointer-events-none z-0" />
      </div>
    </div>
  );
}
