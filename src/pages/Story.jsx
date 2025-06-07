import React, { useState } from 'react'
import WhyHCN from '../components/WhyHCN'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import OurFactories from '../components/OurFactories';

const Story = () => {

    const Images = [
        '/Images/OurStory3.jpg',
        '/Images/OurStory1.jpg',
        '/Images/OurStory2.jpg',

    ]
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1))
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

                <div className='flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 sm:p-2 lg:p-6'>
                    <div className='w-full lg:w-1/2  p-4'>
                        <h1 className='text-[#0B4D81] text-xl font-semibold'>Himalayas Craft Nepal(HCN)</h1>
                        <p className='text-[#666666] mt-2 font-medium font-poppins  lg:tracking-wide tracking-normal text-justify max-w-4xl text-sm lg:text-base'>Welcome to Himalayas Craft Nepal; your gateway to the rich heritage of Nepalese and Tibetan craftsmanship. Based in Kathmandu, we are serving customers around the globe, we are proud to be both manufacturers and wholesalers of authentic, handcrafted treasures. From Thangka Paintings, Singing Bowls, and Malas & Beads to Incense Burners, Tingsha, and Himalayan Shirts, each item in our collection reflects generations of artistry and devotion to cultural preservation.<br />

                            Our mission goes beyond commerce; we aim to make timeless craftsmanship accessible to the world while uplifting the lives of the artisans who bring these creations to life. These skilled craftsmen, whose techniques have been passed down through generations, are the heartbeat of our work. As both manufacturers and wholesalers, we bridge the gap between these master craftsmen and the world, ensuring their work reaches those who cherish authenticity and cultural heritage.<br />

                            At Himalayas Craft Nepal, we're not just offering products, we're offering stories, traditions, and a piece of Nepal's soulful legacy. Whether it's our intricately crafted metalwork, detailed wood carvings, or naturally dyed fiber crafts, every creation speaks to the richness of Nepalese tradition and the pride we take in keeping it alive.

                        </p>
                    </div>

                    <div className='w-full lg:w-1/2 mt-8 '>
                        <img
                            src=''
                            className="object-cover p-4 w-full rounded-md"
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
