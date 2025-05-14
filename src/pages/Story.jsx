import React, { useState } from 'react'
import WhyHCN from '../components/WhyHCN'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import OurFactories from '../components/OurFactories';

const Story = () => {

    const Images = [
        '/Images/homeImage.png',
        '/Images/faq.png',
        '/Images/faq1.png',
        '/Images/homeImage.png',
        '/Images/homeImage.png',
        '/Images/faq1.png',
    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === Images.length - 1 ? '0' : prev + 1))
    }

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? Images.length - 1 : prev - 1))
    }

    return (
        <div className=' min-h-screen'>

            <div className='flex flex-col gap-5 '>

                <div>
                    <div className=''>
                        <img
                            src={Images[currentIndex]}
                            className="object-cover w-full h-auto lg:h-[520px] mb-0"
                            alt="Home"
                        />
                    </div>

                    <div className="flex items-center justify-center ">
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

                <div className='flex flex-col-reverse lg:flex-row gap-8 sm:p-4 lg:p-8'>
                    <div className='w-full lg:w-1/2  p-4'>
                        <h1 className='text-[#0B4D81] text-xl font-semibold'>Himalayas Craft Nepal(HCN)</h1>
                        <p className='text-[#666666] mt-2 font-medium font-poppins  lg:tracking-wide tracking-normal text-justify max-w-4xl '>Himalayas Craft Nepal is the ultimate online destination for authentic Nepalese & Tibetan handicrafts. As manufacturers and wholesalers, we specialize in a wide range of traditional crafts including Thangka Paintings, Singing Bowls, Malas & Beads, Incense Burners, Tingsha, and Himalayan Shirts. Our mission is to deliver exquisite handmade products worldwide at affordable prices, while also providing recognition and special benefits to our local artisans. These craftsmen have inherited their skills through generations, preserving the ancient arts of their culture. Our primary goal is to showcase the most authentic Nepalese craftsmanship across various craftmaking fields.We take great pride in our unwavering dedication to excellence, reflected in the intricate craftsmanship of our metal, wood, and fiber handicrafts, which proudly uphold Nepal's rich cultural heritage through traditional methods.</p>
                    </div>

                    <div className='w-full lg:w-1/2 '>
                        <img
                            src='/Images/homeImage.png'
                            className="object-cover p-4 rounded-md"
                            alt="Home"
                        />
                    </div>
                </div>


                {/* //Why choose HCN */}
                <div className=' p-0 lg:p-8 font-poppins '>
                    <WhyHCN />
                </div>

                <div className=' p-0 lg:p-8 font-poppins '>
                    <OurFactories />
                </div>


            </div>
        </div>
    )
}

export default Story
