import React from 'react'

const Wholesale = () => {
    const Images = [
        '/Images/OurStory3.jpg',
        '/Images/OurStory1.jpg',
        '/Images/OurStory2.jpg',
        '/Images/OurStory2.jpg',
        '/Images/OurStory2.jpg',
    ]

    return (
        <div className='min-h-screen lg:p-12 md:p-5 p-4 w-full'>

            <div className='flex flex-col lg:flex-row '>

                <div className='w-full lg:w-1/2 py-2 lg:py-6 px-2 lg:px-8'>

                    <p className='text-[#666666] mt-2 font-medium font-poppins  lg:tracking-wide tracking-normal max-w-3xl text-justify '>
                        At <strong>Himalayas Craft Nepal</strong>, every product carries the warmth, devotion, and spirit of the Himalayan people. We are not just a supplier ,we are a true factory, hand-crafting singing bowls, statues, gongs, mallets, ritual items, Himalayan art, and healing collections with love and intention. Inside our workshop, dozens of skilled artisans work tirelessly day and night, shaping raw materials into pieces that echo centuries of tradition. Each singing bowl is hammered with patience, each statue carved with faith, and every painting brushed with stories passed down through generations. Our workers are the heart of our company, pouring their experience, energy, and soul into every detail. What we create is more than a product; it is a connection to the mountains, the culture, and the healing spirit of Nepal. When you partner with us, you support the livelihoods of Himalayan families, the preservation of ancient craftsmanship, and the continuation of a sacred art form. This is our legacy, our pride, and our promise  to deliver handmade treasures infused with meaning, tradition, and the timeless beauty of the Himalayas.
                    </p>

                </div>

                <div className='w-full
                 lg:w-1/2 columns-1 md:columns-3 lg:columns-3 gap-1 p-6 mt-4'>

                    {
                        Images.map((img) => (
                            <img
                                src={img}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Wholesale
