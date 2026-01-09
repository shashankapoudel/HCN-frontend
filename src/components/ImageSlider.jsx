import React, { useState, useEffect } from "react";

const ImageSlider = () => {
    const images = [
        "/Images/HomePage.jpg",
        // "/Images/homeImage1.jpg",
    ];

    // const [currentIndex, setCurrentIndex] = useState(0);


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [images.length]);


    // const goToSlide = (index) => {
    //     setCurrentIndex(index);
    // };

    return (
        <div>

            <div className='relative  w-full max-h-screen'>

                <img
                    src="/Images/HomePage.jpg"
                    // alt={`Slide ${currentIndex + 1}`}
                    className="object-cover w-full max-h-screen relative z-[-1]"
                    loading='lazy'
                />

                <div className="absolute inset-0 flex  mt-12 lg:mt-56 lg:justify-start px-4 md:px-8 z-[-1]">

                    <p className="text-xl md:text-4xl lg:text-6xl text-[#FFFFFF] font-medium font-edensor ">
                        Experience the Harmony of <br /> Handmade Singing Bowls
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ImageSlider;
