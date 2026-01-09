import React, { useEffect, useState } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const OurFactories = () => {

    const Services = [
        {
            title: 'Singing Bowl Factory',
            description:
                "In our Singing Bowl Factory, you'll find a team of over 10 dedicated craftsmen meticulously shaping and tuning each bowl.This isn't just work; it's a labor of love passed down through generations.These artisans use time- honored techniques; hammering and refining the metal by hand; to create the deep, resonant tones that make our singing bowls truly exceptional.Witnessing their precision and dedication firsthand is an experience in itself, showcasing the heart and soul poured into every single bowl.",
            images: [
                '/Images/Singing_Bowl_Factory/Singingbowl_FACTORY1.jpg',
                '/Images/Singing_Bowl_Factory/Singingbowl_FACTORY2.jpg',
                '/Images/Singing_Bowl_Factory/Singingbowl_FACTORY3.jpg',
                '/Images/Singing_Bowl_Factory/Singingbowl_FACTORY4.jpg',
                '/Images/Singing_Bowl_Factory/Singingbowl_FACTORY5.jpg',

            ]
        },

        {
            title: 'Incense Factory',
            description:
                "The fragrant heart of our operation, the Incense Factory, is another place where over 20 Nepalese women apply their expertise. Here, they meticulously blend natural ingredients, roll, and prepare our authentic Himalayan incense. This factory is a testament to our commitment to providing meaningful employment opportunities for women, allowing them to hone their traditional skills in creating aromatic blends that have been used for centuries in spiritual practices. Like our Accessories Factory, this is a wholly-owned facility, ensuring rigorous quality control and ethical production from start to finish.",
            images: [
                '/Images/Incense_Factory/IINCENSE_FACTORY1.jpg',
                '/Images/Incense_Factory/INCENSE_FACTORY2.jpg',
                '/Images/Incense_Factory/INCENSE_FACTORY3.jpg',
                '/Images/Incense_Factory/INCENSE_FACTORY4.jpg',
                '/Images/Incense_Factory/INCENSE_FACTORY5.jpg',

            ]
        },

        {
            title: 'Stick factory',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
            images: [
                '/Images/StickFactory_001.jpg',
                '/Images/StickFactory_002.jpg',
                '/Images/StickFactory_003.jpg',
                '/Images/StickFactory_004.jpg',
                '/Images/StickFactory_005.jpg',]
        },
        {
            title: 'Cushion factory',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.',
            images: [
                '/Images/Cushion_Factory/1.jpg',
                '/Images/Cushion_Factory/2.jpg',
                '/Images/Cushion_Factory/3.jpg',
                '/Images/Cushion_Factory/4.jpg',
                '/Images/Cushion_Factory/5.jpg',

            ]
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);


    useEffect(() => {
        setCurrentImageIndex(0);
    }, [currentIndex]);


    useEffect(() => {
        const imageTimer = setInterval(() => {
            setCurrentImageIndex((prev) =>
                prev === Services[currentIndex].images.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(imageTimer);
    }, [currentIndex]);

  
    useEffect(() => {
        const serviceTimer = setInterval(() => {
            setIsFlipping(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % Services.length);
                setIsFlipping(false);
            }, 500);
        }, 8000);

        return () => clearInterval(serviceTimer);
    }, []);

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
                                className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                                onClick={handlePreviousImage}
                            >
                                <GrFormPrevious />
                            </button>

                            <img
                                src={Services[currentIndex].images[currentImageIndex]}
                                className="object-cover rounded-md w-96 h-64"
                                alt="Factory"
                                loading='lazy'
                            />

                            <button
                                className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
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
                    className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                    onClick={handlePrevious}
                >
                    <GrFormPrevious />
                </button>

                <button
                    className="text-[#bb2821] rounded-full hover:bg-opacity-70 transition text-3xl font-semibold mx-2"
                    onClick={handleNext}
                >
                    <GrFormNext />
                </button>

            </div>
        </div>
    );
};

export default OurFactories;

