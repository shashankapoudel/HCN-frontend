import React from 'react';
import OurProducts from '../components/OurProducts';
import CategoryWiseProducts from '../components/CategoryWiseProducts';
import Gallery from '../components/Gallery';
import GalleryCard from '../components/Gallery';
import ProductBadge from '../components/ProductBadges';
import Socialmedia from '../components/Socialmedia';
import CategorySingingBowl from '../components/CategorySingingBowl';
import ImageSlider from '../components/ImageSlider';
import ProductBadges from '../components/ProductBadges';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen w-full gap-4">


            <ImageSlider />

            {/* <div className='relative  w-full max-h-screen'>

                <img
                    src="/Images/HomePage.jpg"
                    className="object-cover w-full max-h-screen relative z-[-1]"
                    alt="Home"
                    loading='lazy'
                />

                <div className="absolute inset-0 flex  mt-12 lg:mt-56 lg:justify-start px-4 md:px-8 z-[-1]">

                    <p className="text-xl md:text-4xl lg:text-6xl text-[#FFFFFF] font-medium font-edensor ">
                        Experience the Harmony of <br /> Handmade Singing Bowls
                    </p>
                </div>

            </div> */}

            <div className='p-2 md:p-4 '>
                <OurProducts />
            </div>

            <div className='p-2 md:p-4 '>
                <ProductBadges />
            </div>

            <div className='p-2 md:p-4'>
                <CategorySingingBowl />
            </div>

            <div className='p-2 md:p-4 '>
                <GalleryCard />
            </div>

            <div className='p-2 md:p-4 '>
                <Socialmedia />
            </div>

        </div>
    );
};

export default Home;

