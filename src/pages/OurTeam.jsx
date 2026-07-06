import React, { useState } from "react";
import { motion } from "framer-motion";

const OurTeam = () => {
  const [active, setActive] = useState(false);

  const Team = [
    {
      name: "Akash Banjara",
      image: "/Images/akashbanjara.jpg",
      role: "Managing Director",
      description:
        "With years of experience in sound therapy and meditation, Akash is deeply rooted in Nepal’s ancient healing traditions. He combines this sacred knowledge with modern vibrational therapy techniques to help individuals find balance, peace, and spiritual awakening. Whether guiding sound bath sessions or selecting the finest singing bowls, Akash ensures that every product carries the purest healing energy.",
    },
    {
      name: "Kapil Bagale",
      image: "/Images/kapil.jpg",
      role: "Operational Manager",
      description:
        "Kapil is the backbone of our artisan collaborations and daily operations. He works closely with local craftsmen, ensuring that each singing bowl is made with traditional methods and ethical practices. His meticulous attention to detail guarantees that only the highest-quality pieces reach our store, preserving the authenticity of Nepalese and Tibetan craftsmanship.",
    },

    {
      name: "Alish Banjara",
      image: "/Images/alish.jpg",
      role: "Operational Manager",
      description:
        "Alish’s warm and intuitive approach makes every customer feel at home. Whether you’re visiting our Thamel store or shopping online, he takes the time to understand your spiritual and healing needs. From recommending the perfect singing bowl to assisting with custom orders, Alish ensures your experience is meaningful and uplifting.",
    },

    {
      name: "Ishwor Bagale",
      image: "/Images/ishwor.jpg",
      role: "Inventory Assistant",
      description:
        "Ishwor oversees the careful handling of every product, from stock management to secure packaging. He ensures that your sacred items; whether a delicate Tibetan singing bowl or a handcrafted ritual tool—are delivered safely and promptly. His dedication means you receive your order in perfect condition, no matter where you are in the world.",
    },

    {
      name: "Shashanka Poudel",
      image: "/Images/shashanka.jpg",
      role: "IT officer and Web Developer",
      description:
        "In today’s connected world, Shasanka keeps our online presence alive and responsive. He has developed and manages our website, taking care of all website-related content, design, and technical maintenance. He also handles our social media platforms, ensuring our digital presence stays active, informative, and engaging. From maintaining performance to sharing valuable content on sound healing and our offerings, Shasanka ensures a smooth and consistent experience for our online visitors.",
    },
  ];

  const artisans = [
    {
      name: "Supporting Women through meaningful work",
      description:
        "Our Cushion, Bag, and Incense Stick Factory is more than just a place where products are made. It is also a place where local women can learn skills, earn an income, and support their families.We work with many women artisans who carefully make our meditation cushions, handcrafted bags, and incense sticks. By providing training and job opportunities, we help women gain confidence, develop their skills, and become financially independent.Every product is made with care, patience, and attention to detail. Behind each item is the hard work of skilled women who take pride in what they create.When you choose our products, you are not only supporting traditional craftsmanship but also helping create opportunities for women and their communities. We are proud to be part of their journey and committed to providing a safe and supportive workplace where they can grow and thrive",
      image: "/Images/Cushion_Factory/1.jpg",
    },

    {
      name: "Singing Bowl Artisans",
      description:
        "Our Singing Bowl Artisans carry forward a centuries-old tradition of creating authentic Himalayan singing bowls. Each bowl is carefully handcrafted using traditional techniques that require patience, precision, and deep knowledge of the craft.These artisans dedicate years to mastering the art of shaping, tuning, and finishing each bowl to produce its unique sound and vibration. Their work is not only a livelihood but also a way to preserve cultural heritage.By supporting our singing bowls, you are helping sustain this timeless craft and empowering artisans to continue their legacy. Every bowl reflects dedication, skill, and a deep connection to tradition.",
      image: "",
    },

    {
      name: "Engraving and Carved Artisans",
      description:
        "Our Engraving and Carving Artisans are masters of detail, transforming simple surfaces into meaningful works of art. Using traditional tools and techniques, they carefully engrave sacred symbols, patterns, and designs onto singing bowls and other handcrafted items.Each engraving requires precision, patience, and creativity, making every piece truly one of a kind. Their work reflects both artistic expression and cultural significance.By choosing engraved and carved products, you are supporting artisans who keep this intricate tradition alive while adding unique beauty and meaning to every creation.",
      image: "",
    },

    {
      name: "Singing Bowl Coloring (Antique Artisans)",
      description:
        "Our Antique Coloring Artisans bring life and character to singing bowls through specialized coloring and finishing techniques. Their work enhances the aesthetic appeal while preserving the authentic, antique look that reflects history and tradition.Using natural methods and careful handwork, these artisans ensure that each piece has a unique and timeless appearance. Their craftsmanship adds depth, beauty, and cultural value to every bowl.By supporting this art, you help preserve traditional finishing techniques and sustain the livelihoods of artisans dedicated to this unique craft.",
      image: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: "hidden",
  };

  return (
    <div className="p-4 lg:p-8 w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold text-[#0B4D81] font-edensor">
        Our Team
      </h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.2 }}
        className="flex flex-col-reverse lg:flex-row"
      >
        <motion.div
          variants={cardVariants}
          className="w-full lg:w-1/2 p-2 lg:p-4"
        >
          <p className="text-[#666666] mt-2 font-poppins  lg:tracking-normal tracking-normal text-justify max-w-6xl text-sm lg:text-lg">
            At Himalayas Crafts Nepal, our team is built on the deep roots of
            Nepalese culture and spiritual tradition. Each member comes from a
            background rich in healing practices, traditional music, and the
            sacred art of sound therapy. We are proud to have experienced
            healers and experts in singing bowls, with deep knowledge of sound
            frequencies, chakra alignment, and meditation tools. Working closely
            with skilled local artisans, we ensure that every product is
            handcrafted using ancient Nepalese and Tibetan techniques. From
            ethical sourcing to energetic cleansing, we take great care to honor
            the spiritual value of each item we offer.
            <br />
            Our well-organized store in Thamel, Kathmandu is run by a friendly
            and professional team dedicated to smooth operations, timely
            delivery, and excellent customer support. We guide each customer
            with care—helping them find the perfect singing bowl or spiritual
            tool for their journey. Beyond sales, we believe in building
            long-term relationships, listening to feedback, and offering ongoing
            support.
          </p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className=" w-full h-full lg:w-1/2 mt-4 border-4 border-gray-400 "
        >
          <img
            src="/Images/team1.jpg"
            className="object-cover w-full h-full rounded-md"
            loading="lazy"
          />
        </motion.div>
      </motion.div>

      <h1 className="text-2xl font-bold mt-4  text-[#0B4D81]">Our Artisans</h1>
      {artisans.map((a) => (
        <div className="flex items-center justify-center w-full">
          <div className="w-full lg:w-1/2 p-2 lg:p-4">
            <p className="text-3xl font-bold text-[#666666] font-edensor">
              {a.name}
            </p>
            <p className="text-[#666666] mt-2 font-poppins  lg:tracking-normal tracking-normal text-justify max-w-6xl text-sm lg:text-lg">
              {a.description}
            </p>
          </div>

          <div className=" w-full h-full lg:w-1/2 mt-3 p-2">
            <img
              src={a.image}
              className="object-cover w-full h-full rounded-md"
              loading="lazy"
            />
          </div>
        </div>
      ))}

      <h1 className="text-2xl font-bold mt-4 text-[#666666] ">OUR TEAM</h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.2 }}
        className="flex flex-col lg:flex-row w-full lg:w-4/5 gap-12 justify-between items-center p-6 text-[#666666] lg:mt-6 mt-4"
      >
        {Team.slice(0, 3).map((team, index) => {
          const textContent = team.description?.replace(/<[^>]+>/g, "") || "";
          const snippet =
            textContent.length > 70
              ? textContent.substring(0, 70) + "..."
              : textContent;

          return (
            <motion.div
              variants={cardVariants}
              key={index}
              className=" flex flex-col items-center gap-2"
            >
              <div className="border-4 lg:border-8 border-gray-400">
                <img
                  src={team.image}
                  className="object-cover w-72 h-72"
                  alt={team.name}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col items-center text-center">
                <p className="text-lg font-edensor">{team.role}</p>
                <p className="text-lg font-poppins font-semibold text-[#0B4D81] border-2 py-1 px-2">
                  {team.name}
                </p>

                <textarea
                  value={team.description}
                  readOnly
                  className="text-base font-edensor resize-none w-72 h-28 p-2 border border-gray-300 rounded-md overflow-y-auto text-center"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:w-2/3 w-full gap-12 text-[#666666] items-center justify-center"
      >
        {Team.slice(3, 5).map((team, index) => (
          <motion.div
            variants={cardVariants}
            key={index}
            className="flex flex-col items-center"
          >
            <div className=" border-4 lg:border-8 border-gray-400">
              <img
                src={team.image}
                className="object-cover w-72 h-72"
                alt={team.name}
                loading="lazy"
              />
            </div>

            <p className="text-center text-lg font-edensor">{team.role}</p>
            <p className="text-lg font-poppins font-semibold text-[#0B4D81] border-2 py-1 px-2">
              {team.name}
            </p>
            <textarea
              value={team.description}
              readOnly
              className="text-base font-edensor resize-none w-72 h-28 p-2 border border-gray-300 rounded-md overflow-y-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeam;
