import React from 'react';
import OurProducts from '../components/OurProducts';
import CategoryWiseProducts from '../components/CategoryWiseProducts';
import Gallery from '../components/Gallery';
import GalleryCard from '../components/Gallery';
import ProductBadge from '../components/ProductBadges';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen w-full gap-4">

            <div className='relative  w-full max-h-screen'>

                <img
                    src="/Images/homeImage.png"
                    className="object-cover w-full max-h-screen relative z-[-1]"
                    alt="Home"
                />

                <div className="absolute inset-0 flex  mt-12 lg:mt-56 lg:justify-start px-4 md:px-8 z-[-1]">

                    <p className="text-xl md:text-4xl lg:text-6xl text-[#FFFFFF] font-medium font-edensor ">
                        Experience the Harmony of <br /> Handmade Singing Bowls
                    </p>
                </div>

            </div>

            <div className='p-2 md:p-4 '>
                <OurProducts />
            </div>

            <div className='p-2 md:p-4 '>
                <ProductBadge />
            </div>

            <div className='p-4'>
                <CategoryWiseProducts />
            </div>

            <div className='p-2 md:p-4 '>
                <GalleryCard />
            </div>

        </div>
    );
};

export default Home;

