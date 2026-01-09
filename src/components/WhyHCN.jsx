import React, { useState } from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const WhyHCN = () => {

    const Services = [
        {
            title: 'Our own Factories and Artisans',
            description:
                "We're not just a shop; we're the makers. We proudly craft our own products right here in Nepal, in our very own workshops. This means we work directly with our incredibly talented Nepali artisans, ensuring every single piece is created under ethical conditions and with fair wages. Because we oversee the entire process, from the first step to the last, you receive exceptionally high-quality crafts made with genuine, time-honored traditional methods. It's quality and authenticity, guaranteed.",
            image: '/Images/homeImage.png',
        },
        {
            title: 'Unwavering Authenticity',
            description:
                "In a market full of fakes, we stand firm on guaranteed authenticity. Every single item, from our detailed Thangka paintings to our hand-beaten singing bowls, is a genuine product of Nepal. They're made using traditional techniques and local materials. We share clear information about where our products come from and how they're made, so you can be completely sure you're getting a true piece of Himalayan heritage.",
            image: '/Images/image.png',
        },
        {
            title: 'Dedicated to Spiritual Integrity & Global Reach',
            description:
                "Our promise goes beyond simply selling products. We deeply respect the spiritual essence of every item, making sure each one is crafted with care and often blessed before it leaves Nepal. With our reliable worldwide shipping, we bring the sacred energy and true craftsmanship of the Himalayas right to your door, wherever you are, with deep care and respect.",
            image: '/Images/homeImage.png',
        },
        {
            title: 'Curated by Sound Healing Experts',
            description:
                "Our Himalayan singing bowls are far from just a random collection. Each one is carefully chosen by certified sound healing experts. This special process means every bowl isn't just beautiful to look at, but more importantly, it delivers superior sound vibrations and real healing potential. When you pick a singing bowl from us, you're getting a powerful tool that's been professionally checked and approved to create truly deep, healing sounds.",
            image: '/Images/homeImage.png',
        },
        {
            title: 'Direct from the Source & Fair Pricing',
            description:
                "Our promise goes beyond simply selling products. We deeply respect the spiritual essence of every item, making sure each one is crafted with care and often blessed before it leaves Nepal. With our reliable worldwide shipping, we bring the sacred energy and true craftsmanship of the Himalayas right to your door, wherever you are, with deep care and respect.",
            image: '/Images/homeImage.png',
        }
    ];


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

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

    return (
        <div className="p-3 lg:p-5">
            <h1 className="text-[#0B4D81] text-2xl font-semibold text-center mb-6">Why should you choose Us (HCN)?</h1>

            <div className={`flex flex-col h-80 p-5 rounded-md lg:flex-row justify-evenly gap-4 mt-4 transform-style preserve-3d bg-white shadow-lg ${isFlipping ? 'flip-rotate' : ''}`}>

                <div className="w-full lg:w-1/3 mt-3">
                    <img
                        src={Services[currentIndex].image}
                        className="object-cover rounded-md w-full"
                        alt="Home"
                        loading='lazy'
                    />
                </div>

                <div className="w-full lg:w-1/2 p-2">
                    <h1 className="text-[#0B4D81] text-xl font-semibold">{Services[currentIndex].title}</h1>
                    <p className="text-[#666666] mt-2 font-medium text-sm lg:text-base font-poppins text-justify tracking-wide">
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

export default WhyHCN;
