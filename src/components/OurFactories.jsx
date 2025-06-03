
// import React, { useEffect, useState } from 'react';
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// const OurFactories = () => {

// const Services = [
//     {
//         title: 'Singing Bowl Factory',
//         description:
//             'We take pride in collaborating with talented artisans who possess diverse skills and craftsmanship. Working with these artists allows us to offer you highquality products while supporting the artisans financially. By promoting these traditional arts and crafts, we contribute to preserving them for future generations to enjoy.',
//         images: ['/Images/factory.jpg', '/Images/team1.jpg']
//     },
//     {
//         title: 'Thangka Factory',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         images: ['/Images/factory.jpg', '/Images/factory.jpg']
//     },
//     {
//         title: '',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
//         images: ['/Images/factory.jpg', '/Images/factory.jpg',]
//     },
//     {
//         title: 'Community',
//         description:
//             'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.</',
//         images: ['/Images/factory.jpg', '/Images/factory.jpg',]
//     },
// ];


//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [currentImageIndex, setCurrentImageIndex] = useState(0)
//     const [isFlipping, setIsFlipping] = useState(false);



//     useEffect(() => {
//         setCurrentImageIndex(0);
//     }, [currentIndex]);


//     const handleNext = () => {
//         setIsFlipping(true);
//         setTimeout(() => {
//             setCurrentIndex((prev) => (prev + 1) % Services.length);
//             setIsFlipping(false);
//         }, 500);
//     };

//     const handlePrevious = () => {
//         setIsFlipping(true);
//         setTimeout(() => {
//             setCurrentIndex((prev) => (prev === 0 ? Services.length - 1 : prev - 1));
//             setIsFlipping(false);
//         }, 500);
//     };

//     const handlePreviousImage = () => {
//         setTimeout(() => {
//             setCurrentImageIndex((prev) =>
//                 prev === 0
//                     ? Services[currentIndex].images.length - 1
//                     : prev - 1
//             );
//         }, 500);
//     };

//     const handleNextImage = () => {
//         setTimeout(() => {
//             setCurrentImageIndex((prev) =>
//                 prev === Services[currentIndex].images.length - 1
//                     ? 0
//                     : prev + 1
//             );
//         }, 500);
//     };


//     return (
//         <div className="p-3 lg:p-5">
//             <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">Our Factories</h1>

//             <div className={`flex flex-col  p-5 rounded-md lg:flex-row-reverse
//                  justify-evenly gap-4 mt-4 transform-style preserve-3d bg-white shadow-lg ${isFlipping ? 'flip-rotate' : ''}`}>

//                 <div className="w-full lg:w-1/3 mt-3">
//                     {
//                         Services[currentIndex].images && (
//                             <div className='flex items-center justify-center'>
//                                 <div>
//                                     <button
//                                         className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//                                         onClick={handlePreviousImage}
//                                     >
//                                         <GrFormPrevious />
//                                     </button>
//                                 </div>
//                                 < img
//                                     src={Services[currentIndex].images[currentImageIndex]}
//                                     className="object-cover rounded-md w-full"
//                                     alt="Home"
//                                 />


//                                 <div>
//                                     <button
//                                         className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//                                         onClick={handleNextImage}
//                                     >
//                                         <GrFormNext />
//                                     </button>
//                                 </div>
//                             </div>


//                         )
//                     }
//                 </div>

//                 <div className="w-full lg:w-1/2 p-2">
//                     <h1 className="text-[#0B4D81] text-xl font-semibold">{Services[currentIndex].title}</h1>
//                     <p className="text-[#666666] mt-2 font-medium font-poppins text-justify tracking-wide">
//                         {Services[currentIndex].description}
//                     </p>
//                 </div>
//             </div>

//             <div className="flex items-center justify-center mt-4">
//                 <button
//                     className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//                     onClick={handlePrevious}
//                 >
//                     <GrFormPrevious />
//                 </button>
//                 <button
//                     className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
//                     onClick={handleNext}
//                 >
//                     <GrFormNext />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default OurFactories;




import React, { useEffect, useState } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const OurFactories = () => {

    const Services = [
        {
            title: 'Singing Bowl Factory',
            description:
                'We take pride in collaborating with talented artisans who possess diverse skills and craftsmanship. Working with these artists allows us to offer you highquality products while supporting the artisans financially. By promoting these traditional arts and crafts, we contribute to preserving them for future generations to enjoy.',
            images: ['/Images/factory.jpg', '/Images/team1.jpg']
        },

        {
            title: 'Thangka Factory',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
            images: ['/Images/factory.jpg', '/Images/team1.jpg']
        },

        {
            title: 'Stick factory',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
            images: ['/Images/StickFactory_001.jpg', '/Images/StickFactory_002.jpg', '/Images/StickFactory_003.jpg', '/Images/StickFactory_004.jpg', '/Images/StickFactory_005.jpg',]
        },
        {
            title: 'Cushion factory',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
            images: ['/Images/cushion1.jpg', '/Images/cushion2.jpg', '/Images/cushion3.jpg', '/Images/cushion4.jpg', '/Images/cushion5.jpg']
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);


    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentIndex]);

    // Auto change image every 2.5 seconds  
    useEffect(() => {
        const imageTimer = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === Services[currentIndex].images.length - 1 ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(imageTimer);
    }, [currentIndex]);

    // Auto change service every 6 seconds
    // useEffect(() => {
    //     const serviceTimer = setInterval(() => {
    //         setIsFlipping(true);
    //         setTimeout(() => {
    //             setCurrentIndex((prev) => (prev + 1) % Services.length);
    //             setIsFlipping(false);
    //         }, 500);
    //     }, 6000);

    //     return () => clearInterval(serviceTimer);
    // }, []);

    const handleNext = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % Services.length);
            setIsFlipping(false);
        }, 500);
    };

    const handlePrevious = () => {
        setIsFlipping(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev === 0 ? Services.length - 1 : prev - 1));
            setIsFlipping(false);
        }, 500);
    };

    const handlePreviousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0
                ? Services[currentIndex].images.length - 1
                : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === Services[currentIndex].images.length - 1
                ? 0
                : prev + 1
        );
    };

    return (
        <div className="p-3 lg:p-5">
            <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">Our Factories</h1>

            <div className={`flex flex-col p-5 rounded-md lg:flex-row-reverse justify-evenly gap-4 mt-4 transform-style preserve-3d bg-white shadow-lg ${isFlipping ? 'flip-rotate' : ''}`}>

                <div className="w-full lg:w-1/3 mt-3">
                    {Services[currentIndex].images && (
                        <div className='flex items-center justify-center'>
                            <button
                                className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                                onClick={handlePreviousImage}
                            >
                                <GrFormPrevious />
                            </button>
                            <img
                                src={Services[currentIndex].images[currentImageIndex]}
                                className="object-cover rounded-md w-96 h-64"
                                alt="Factory"
                            />
                            <button
                                className="text-[#666666] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                                onClick={handleNextImage}
                            >
                                <GrFormNext />
                            </button>
                        </div>
                    )}
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

export default OurFactories;

