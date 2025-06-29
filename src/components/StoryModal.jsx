import React from 'react';

const StoryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-md p-8 w-full max-w-3xl relative overflow-y-auto max-h-[90vh]">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
                    onClick={onClose}
                >
                    ✕
                </button>

                <img
                    src='/Images/OurStory5.jpg'
                    className="w-full rounded-md object-cover mb-4"
                    alt="Story Full View"
                />

                <h1 className='text-[#0B4D81] text-xl font-semibold'>Himalayas Craft Nepal(HCN)</h1>
                <p className='text-[#666666] mt-2 font-medium font-poppins text-justify tracking-wide text-sm lg:text-base'>
                    Welcome to Himalayas Craft Nepal; your gateway to the rich heritage of Nepalese and Tibetan craftsmanship. Based in Kathmandu, we are serving customers around the globe, we are proud to be both manufacturers and wholesalers of authentic, handcrafted treasures. From Thangka Paintings, Singing Bowls, and Malas & Beads to Incense Burners, Tingsha, and Himalayan Shirts, each item in our collection reflects generations of artistry and devotion to cultural preservation.
                    <br /><br />
                    Our mission goes beyond commerce; we aim to make timeless craftsmanship accessible to the world while uplifting the lives of the artisans who bring these creations to life. These skilled craftsmen, whose techniques have been passed down through generations, are the heartbeat of our work.
                    <br /><br />
                    At Himalayas Craft Nepal, we're not just offering products, we're offering stories, traditions, and a piece of Nepal's soulful legacy. Whether it's our intricately crafted metalwork, detailed wood carvings, or naturally dyed fiber crafts, every creation speaks to the richness of Nepalese tradition and the pride we take in keeping it alive.
                </p>
            </div>
        </div>
    );
};

export default StoryModal;
