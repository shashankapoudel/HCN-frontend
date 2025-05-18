// import React, { useEffect, useState } from 'react'
// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";
// const WhyHCN = () => {
// const Services = [
//     {
//         title: 'Authenticity',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         image: '/Images/homeImage.png',
//     },
//     {
//         title: 'Quality',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         image: '/Images/image.png',
//     },
//     {
//         title: 'Customer Support',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         image: '/Images/homeImage.png',
//     },
//     {
//         title: 'Community',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.</',
//         image: '/Images/homeImage.png',
//     },
// ];

//     // useEffect(() => {
//     //     let interval;

//     //     interval = setInterval(() => {
//     //         setCurrentIndex((prevIndex) => (prevIndex + 1) % Services.length);
//     //     }, 6000);

//     //     return () => clearInterval(interval);
//     // }, []);

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const handleNext = () => {
//         setCurrentIndex((prev) => prev === Services.length - 1 ? 0 : prev + 1)
//     }

//     const handlePrevious = () => {
//         setCurrentIndex((prev) => prev === 0 ? Services.length - 1 : prev - 1)
//     }

//     return (
//         <div className=''>
//             <h1 className='text-[#0B4D81] text-2xl font-semibold text-center'>Why should you choose Us(HCN)?</h1>

//             <div className='flex flex-col lg:flex-row justify-evenly gap-4 mt-4'>
//                 <div className='w-full lg:w-1/3 mt-3 '>
//                     <img
//                         src={Services[currentIndex].image}
//                         className="object-cover rounded-md"
//                         alt="Home"
//                     />
//                 </div>

//                 <div className='w-full lg:w-1/2  p-2'>
//                     <h1 className='text-[#0B4D81] text-xl font-semibold'>{Services[currentIndex].title}</h1>
//                     <p className='text-[#666666] mt-2 font-medium font-poppins  lg:tracking-wide tracking-normal text-justify max-w-3xl'>{Services[currentIndex].description}</p>
//                 </div>
//             </div>

//             <div className='flex items-center justify-center  mt-2'>
//                 <button
//                     className="text-[#666666]  rounded-full hover:bg-opacity-70 transition text-3xl font-semibold"
//                     onClick={handlePrevious}>
//                     <GrFormPrevious />
//                 </button>
//                 <button
//                     className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold"
//                     onClick={handleNext}>
//                     <GrFormNext />
//                 </button>
//             </div>
//         </div>

//     )
// }

// export default WhyHCN




// import React, { useEffect, useState } from 'react';
// import { GrFormPrevious, GrFormNext } from 'react-icons/gr';


// const WhyHCN = () => {
// const Services = [
//     {
//         title: 'Authenticity',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         image: '/Images/homeImage.png',
//     },
//     {
//         title: 'Quality',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         image: '/Images/image.png',
//     },
//     {
//         title: 'Customer Support',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         image: '/Images/homeImage.png',
//     },
//     {
//         title: 'Community',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.</',
//         image: '/Images/homeImage.png',
//     },
// ];

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isFlipping, setIsFlipping] = useState(false);

//     const handleNext = () => {
//         setIsFlipping(true);
//         setTimeout(() => {
//             setCurrentIndex((prev) => (prev === Services.length - 1 ? 0 : prev + 1));
//             setIsFlipping(false);
//         }, 400); // match transition duration
//     };

//     const handlePrevious = () => {
//         setIsFlipping(true);
//         setTimeout(() => {
//             setCurrentIndex((prev) => (prev === 0 ? Services.length - 1 : prev - 1));
//             setIsFlipping(false);
//         }, 400);
//     };

//     return (
//         <div className="">
//             <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mt-4">
//                 Why should you choose Us (HCN)?
//             </h1>

//             <div className="flex items-center justify-center perspective">
//                 <div
//                     className={`w-full max-w-7xl flip-container ${isFlipping ? 'flip' : ''}`}
//                 >
//                     <div className="flex flex-col lg:flex-row justify-evenly gap-6 backface-hidden bg-white p-6 rounded-lg shadow-lg ">
//                         <div className="w-full lg:w-1/3">
//                             <img
//                                 src={Services[currentIndex].image}
//                                 alt="Service"
//                                 className="object-cover rounded-md w-full"
//                             />
//                         </div>

//                         <div className="w-full lg:w-1/2 p-2">
//                             <h2 className="text-[#0B4D81] text-xl font-semibold mb-2">
//                                 {Services[currentIndex].title}
//                             </h2>
//                             <p className="text-[#666666] font-medium text-justify tracking-wide">
//                                 {Services[currentIndex].description}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex justify-center gap-4 mt-6">
//                 <button
//                     onClick={handlePrevious}
//                     className="text-[#666666] text-3xl hover:text-[#0B4D81] transition"
//                 >
//                     <GrFormPrevious />
//                 </button>
//                 <button
//                     onClick={handleNext}
//                     className="text-[#666666] text-3xl hover:text-[#0B4D81] transition"
//                 >
//                     <GrFormNext />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default WhyHCN;




import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const WhyHCN = () => {

    const Services = [
        {
            title: 'Authenticity',
            description:
                "We take pride in offering 100% authentic singing bowls and traditional handicrafts handcrafted by skilled artisans in Nepal. Each piece reflects our rich cultural heritage and centuries-old techniques. We source directly from local craftsmen, ensuring genuine craftsmanship and fair trade. When you shop with us, you are not just buying a product — you are bringing home a piece of Nepal's spiritual and artistic legacy",
            image: '/Images/homeImage.png',
        },
        {
            title: 'Quality',
            description:
                "We are committed to delivering only the finest quality products that stand the test of time. Each singing bowl and handicraft item is carefully inspected to ensure superior sound, finish, and durability. Our artisans use premium materials and traditional techniques passed down through generations. The result is a product that’s not only beautiful but also meaningful and made to last",
            image: '/Images/image.png',
        },
        {
            title: 'Customer Support',
            description:
                "We believe in building lasting relationships with our customers through responsive and caring support. Whether you have questions before purchasing or need help after your order, our team is here to assist you every step of the way. We’re just a message away — friendly, helpful, and committed to making your experience smooth and satisfying.",
            image: '/Images/homeImage.png',
        },
        {
            title: 'Community',
            description:
                "We’re more than just a store — we’re part of a vibrant community that celebrates Nepalese art, culture, and mindfulness. By supporting us, you're uplifting local artisans and preserving traditional craftsmanship. We actively collaborate with local makers and give back to the communities that inspire our work. Together, we create a meaningful impact, one handcrafted piece at a time.",
            image: '/Images/homeImage.png',
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleNext = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % Services.length);
            setIsFlipping(false);
        }, 500); // half duration of animation
    };

    const handlePrevious = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? Services.length - 1 : prev - 1));
            setIsFlipping(false);
        }, 500);
    };

    return (
        <div className="p-3 lg:p-5">
            <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">Why should you choose Us (HCN)?</h1>

            <div className={`flex flex-col p-5 rounded-md lg:flex-row justify-evenly gap-4 mt-4 transform-style preserve-3d bg-white shadow-lg ${isFlipping ? 'flip-rotate' : ''}`}>

                <div className="w-full lg:w-1/3 mt-3">
                    <img
                        src={Services[currentIndex].image}
                        className="object-cover rounded-md w-full"
                        alt="Home"
                    />
                </div>

                <div className="w-full lg:w-1/2 p-2">
                    <h1 className="text-[#0B4D81] text-xl font-semibold">{Services[currentIndex].title}</h1>
                    <p className="text-[#666666] mt-2 font-medium font-poppins text-justify tracking-wide">
                        {Services[currentIndex].description}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-center mt-4">
                <button
                    className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                    onClick={handlePrevious}
                >
                    <GrFormPrevious />
                </button>
                <button
                    className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                    onClick={handleNext}
                >
                    <GrFormNext />
                </button>
            </div>
        </div>
    );
};

export default WhyHCN;
