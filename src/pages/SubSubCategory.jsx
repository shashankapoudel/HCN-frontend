import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductProvider";
import AddToCart from "../components/AddToCart";
import QuickViewProd from "../components/QuickViewProd";

const SubSubCategory = () => {
  const subsubcategoryDescription = [
    {
      name: "jambati",
      title: "Jambati Singign Bowls",
      description:
        "Jambati singing bowls come from the Himalayan regions of Nepal and Tibet, where people have used them for many centuries in spiritual and cultural practices. They are handmade by skilled artisans using bronze and other metals, and their making is seen as a traditional and sacred art. These bowls usually have a round shape with broad rims and high walls, sometimes with simple or detailed engravings. Jambati bowls are larger in size than many other singing bowls, which helps them create deep and strong vibrations. They produce warm, rich, and long-lasting sounds that feel very calming. People commonly use them for meditation, sound healing, yoga, and spiritual rituals to relax the mind, reduce stress, and improve overall well-being.",
    },

    {
      name: "manipuri",
      title: "Manipuri Singing Bowls",
      description:
        "Manipuri singing bowls come from the state of Manipur and are believed to be one of the oldest types of singing bowls used for over 500 years in both daily life and spiritual practices. They are usually small and shallow in shape with a rounded bottom, making them lightweight and easy to hold or carry. These bowls often have simple and elegant designs or inscriptions that reflect the culture of the region. Because of their compact size, Manipuri bowls produce higher-pitched and lighter sounds that fade more quickly than larger bowls. The gentle vibrations they create are calming and less intense, which makes them ideal for beginners in meditation and sound therapy. People commonly use them for meditation, healing practices, and travel due to their portability, helping to improve focus, relaxation, and spiritual connection.",
    },

    {
      name: "naga",
      title: "Naga Singing Bowls",
      description:
        "Naga or Pedestal singing bowls come from the Himalayan region and are believed to have been used since ancient times by monks and healers for spiritual and healing practices. The name “Naga” may be connected to sacred snake figures , giving them spiritual meaning. These bowls are unique because they have a pedestal base, which gives them a cup-like shape with a stand and allows them to be played without holding the bowl directly. They are usually small to medium in size and are made from a mix of metals, sometimes with simple symbols or designs. Because of the pedestal design, they produce clear, pure, and long-lasting sounds without being muffled by the hand. People often use Naga bowls for meditation, sound healing, and spiritual practices, as their steady vibrations help improve focus, balance energy, and create a calm environment.",
    },

    {
      name: "ultabati",
      title: "Ultabati Singing Bowls",
      description:
        "Ultabati singing bowls come from the Himalayan region and are known as one of the largest types of singing bowls used in spiritual and meditation practices since ancient times. Because of their very large size, they were often used in monasteries and temples during group meditation or special rituals. These bowls are much bigger than most others and usually have thick metal walls, which makes them heavy and strong. They often have a smooth surface with simple or detailed designs that show their traditional craftsmanship. Due to their large size, Ultabati bowls produce very deep and low sounds that can last for a long time after being played. The strong vibrations from these bowls can be felt throughout the body, helping people feel calm and relaxed. People commonly use Ultabati bowls for group meditation, sound healing, and spiritual ceremonies, as their deep tones help reduce stress, improve focus, and create a peaceful.",
    },

    {
      name: "thadobati",
      title: "Thadobati Singing Bowls",
      description:
        "Thadobati singing bowls are one of the oldest types of singing bowls, with some dating back to the 15th century or even earlier. They come from the Himalayan region, especially Nepal, where they were first used in spiritual ceremonies as well as in daily household activities like kitchen use. These bowls are known for their straight and high walls, which give them a cylindrical shape, along with a wide and flat bottom that makes them stable and easy to play. They come in different sizes and thicknesses, and many of them have simple lines, circles, or traditional symbols as decoration. Thadobati bowls produce bright and clear sounds with multiple tones at the same time, creating strong and long-lasting vibrations. People often use them for meditation, sound healing, and chakra balancing, as their sound helps reduce stress, improve focus, and promote relaxation and overall well-being.",
    },

    {
      name: "lingam",
      title: "Lingam Singing Bowls",
      description:
        "Lingam singing bowls are one of the rarest types of singing bowls and are known for the raised round shape at the center of the bowl. These bowls come from the Himalayan region and have been used in ancient spiritual practices for many years. The raised center design is connected to the symbol of Lord Shiva in Hinduism, which represents creation and divine energy. Lingam bowls are usually small to medium in size and are made from a mix of traditional metals. Many of them also have simple or detailed designs around the sides of the bowl. Because of the raised center, they produce strong and focused sounds with deep vibrations. People often use Lingam bowls for meditation, spiritual rituals, and sound healing, as their sound helps improve focus, balance energy, and create a calm and peaceful state of mind.",
    },

    {
      name: "remuna",
      title: "Remuna Singing Bowls",
      description:
        "Remuna singing bowls come from the Himalayan region, with roots in Tibetan and Nepalese culture, and have been made for many centuries. They are known for their beauty and are used both for meditation and as art pieces. These bowls have a subtle inward curve at the rim, thinner walls, and a smooth finish, often with delicate patterns or designs. Because of their shape and thin walls, Remuna bowls produce soft, gentle, and clear sounds with precise vibrations. They are perfect for personal meditation, sound healing, and creating a calm environment, especially in quiet or small spaces. People also value them for their elegant appearance, making them both a practical tool and a beautiful decorative item.",
    },

    {
      name: "trapezoid",
      title: "trapezoid Singing Bowls",
      description:
        "Trapezoid singing bowls are a rare type of bowl from the Himalayan region, known for their unique trapezoid shape and flat bottom. They are made from traditional metal alloys and sometimes have simple designs or patterns. Their shape creates rich, complex sounds with many overtones and vibrations that feel different from regular round bowls. These bowls are used for meditation, sound healing, and exploring new sound experiences. They are valued for both their unusual appearance and the special quality of their tones. Trapezoid bowls offer a unique way to relax, focus, and enjoy the benefits of sound therapy.",
    },

    {
      name: "plain",
      title: "Plain Singing Bowls",
      description:
        "Trapezoid singing bowls are a rare type of bowl from the Himalayan region, known for their unique trapezoid shape and flat bottom. They are made from traditional metal alloys and sometimes have simple designs or patterns. Their shape creates rich, complex sounds with many overtones and vibrations that feel different from regular round bowls. These bowls are used for meditation, sound healing, and exploring new sound experiences. They are valued for both their unusual appearance and the special quality of their tones. Trapezoid bowls offer a unique way to relax, focus, and enjoy the benefits of sound therapy.",
    },

    {
      name: "fullmoon",
      title: "Fullmoon Singing Bowls",
      description:
        "Full Moon singing bowls originate from the Himalayan region and have a long history of use in spiritual and healing traditions. These bowls are usually round in shape and come in different sizes, from small handheld bowls to larger ones used in group sessions. They produce soft, calming sounds with gentle vibrations that help relax the mind and body. Traditionally, they were used during full moon rituals, meditation, and religious ceremonies in temples and monasteries. In modern times, they are widely used in sound therapy, yoga, and personal meditation practices. Their soothing sound helps reduce stress, improve focus, and create emotional balance. Today, Full Moon singing bowls are popular tools for both spiritual growth and overall well-being.",
    },

    {
      name: "healing",
      title: "Healing /Therapy Bowls",
      description:
        "Full Moon singing bowls originate from the Himalayan region and have a long history of use in spiritual and healing traditions. These bowls are usually round in shape and come in different sizes, from small handheld bowls to larger ones used in group sessions. They produce soft, calming sounds with gentle vibrations that help relax the mind and body. Traditionally, they were used during full moon rituals, meditation, and religious ceremonies in temples and monasteries. In modern times, they are widely used in sound therapy, yoga, and personal meditation practices. Their soothing sound helps reduce stress, improve focus, and create emotional balance. Today, Full Moon singing bowls are popular tools for both spiritual growth and overall well-being.",
    },

    {
      name: "engraved",
      title: "Engraved Singing Bowls",
      description:
        "Full Moon singing bowls originate from the Himalayan region and have a long history of use in spiritual and healing traditions. These bowls are usually round in shape and come in different sizes, from small handheld bowls to larger ones used in group sessions. They produce soft, calming sounds with gentle vibrations that help relax the mind and body. Traditionally, they were used during full moon rituals, meditation, and religious ceremonies in temples and monasteries. In modern times, they are widely used in sound therapy, yoga, and personal meditation practices. Their soothing sound helps reduce stress, improve focus, and create emotional balance. Today, Full Moon singing bowls are popular tools for both spiritual growth and overall well-being.",
    },

    {
      name: "note",
      title: "Note & color Singing Bowls",
      description:
        "Full Moon singing bowls originate from the Himalayan region and have a long history of use in spiritual and healing traditions. These bowls are usually round in shape and come in different sizes, from small handheld bowls to larger ones used in group sessions. They produce soft, calming sounds with gentle vibrations that help relax the mind and body. Traditionally, they were used during full moon rituals, meditation, and religious ceremonies in temples and monasteries. In modern times, they are widely used in sound therapy, yoga, and personal meditation practices. Their soothing sound helps reduce stress, improve focus, and create emotional balance. Today, Full Moon singing bowls are popular tools for both spiritual growth and overall well-being.",
    },

    {
      name: "chakra",
      title: "Chakra & Zodiac Singing Bowls",
      description:
        "The Chakra Healing Singing Bowl Set comes from the Himalayan region and has been used for hundreds of years in meditation, healing, and spiritual practices. These bowls are hand-hammered from a special blend of metals, which gives them strong vibrations and spiritual energy. Each bowl in the set is tuned to a specific note that matches one of the seven chakras in the body. The Root Chakra (C) helps with grounding and stability, while the Sacral Chakra (D) supports creativity and emotional balance. The Solar Plexus Chakra (E) increases confidence and personal power, and the Heart Chakra (F) opens love and compassion. The Throat Chakra (G) improves communication and self-expression, the Third Eye Chakra (A) enhances intuition and mental clarity, and the Crown Chakra (B) connects to spiritual awareness and higher consciousness. The bowls have a full, rounded shape and come in different sizes, with larger bowls for lower chakras and smaller bowls for upper chakras. Traditionally, they were used in rituals and energy healing, and today they are used for meditation, yoga, sound therapy, and chakra balancing. Their soothing vibrations help relax the mind and body, clear energy blockages, and bring harmony to the whole being.",
    },

    {
      name: "hand-hammered",
      description:
        "Hand Hammered Singing Bowls come from the Himalayan region and have been used since ancient times for meditation, healing, and spiritual practices. These bowls are made by skilled artisans using traditional hand-hammering techniques passed down through generations. They usually have a round shape with slightly uneven surfaces due to the handmade process. Hand hammered bowls come in different sizes, from small to large, depending on their use. In the past, they were used in rituals, prayer, and traditional ceremonies. Today, they are widely used for meditation, yoga, sound therapy, and relaxation. The sound produced by these bowls is deep, rich, and long-lasting. Their strong vibrations help calm the mind and reduce stress. These bowls are valued for their natural sound quality and traditional craftsmanship. They are useful for both personal meditation and professional healing practices.",
    },

    {
      name: "hand-hammered",
      description:
        "Hand Hammered Singing Bowls come from the Himalayan region and have been used since ancient times for meditation, healing, and spiritual practices. These bowls are made by skilled artisans using traditional hand-hammering techniques passed down through generations. They usually have a round shape with slightly uneven surfaces due to the handmade process. Hand hammered bowls come in different sizes, from small to large, depending on their use. In the past, they were used in rituals, prayer, and traditional ceremonies. Today, they are widely used for meditation, yoga, sound therapy, and relaxation. The sound produced by these bowls is deep, rich, and long-lasting. Their strong vibrations help calm the mind and reduce stress. These bowls are valued for their natural sound quality and traditional craftsmanship. They are useful for both personal meditation and professional healing practices.",
    },
  ];

  const { category, subcategory, subsubcategory } = useParams();
  console.log(category);
  console.log(subcategory);
  console.log(subsubcategory);
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const filteredProducts = products.filter(
    (p) =>
      p.category === category &&
      p.subcategory === subcategory &&
      p.subcategorycategory === subsubcategory,
  );
  console.log(filteredProducts);

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

  const filteredDescription = subsubcategoryDescription.find(
    (s) => s.name === subsubcategory,
  );

  return (
    <div className="min-h-screen p-3 lg:p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize text-center">
        {filteredDescription?.title || subsubcategory.replace("-", " ")}
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
                  <h1 className="text-[#111111] font-bold text-base capitalize font-roboto">
                    {product.name}
                  </h1>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncateText(product.description, 15),
                    }}
                    className="text-[#606060] text-sm"
                  />
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
