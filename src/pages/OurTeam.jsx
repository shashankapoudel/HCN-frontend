

import React from 'react'
import { motion } from 'framer-motion';

const OurTeam = () => {

    const Team = [
        {
            name: 'Akash Banjara',
            image: '/Images/akashbanjara.jpg',
            role: 'Managing Director',
            description: 'A Sound Healing expert with years of experience, Akash Banjara blends ancient Nepalese traditions and vibrational therapy to guide others on their journey of inner peace, balance, and spiritual well-being.'
        },
        {
            name: 'Kapil Bagale',
            image: '/Images/kapil.jpg',
            role: 'Operational Manager',
            description: 'A Sound Healing expert with years of experience, Akash Banjara blends ancient Nepalese traditions and vibrational therapy to guide others on their journey of inner peace, balance, and spiritual well-being.'
        },
        {
            name: 'Alish Banjara',
            image: '/Images/alish.jpg',
            role: 'Operational Manager',
            description: 'A Sound Healing expert with years of experience, Akash Banjara blends ancient Nepalese traditions and vibrational therapy to guide others on their journey of inner peace, balance, and spiritual well-being.'
        },
        {
            name: 'Ishwor Bagale',
            image: '/Images/ishwor.jpg',
            role: 'Inventory Assistant'
        },
        {
            name: 'Shashanka Poudel',
            image: '/Images/shashanka.jpg',
            role: 'IT officer and Web Developer'
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: "hidden",
    };

    return (
        <div className='p-8 w-full flex flex-col items-center justify-center gap-4'>
            <h1 className='text-3xl font-bold text-[#0B4D81] font-edensor'>Our Team</h1>


            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ amount: 0.2 }}

                className='flex'>

                <motion.div
                    variants={cardVariants}
                    className='w-full lg:w-1/2  p-4'>
                    <p className='text-[#666666] mt-2 font-medium font-poppins  lg:tracking-normal tracking-normal text-justify max-w-6xl text-sm lg:text-lg'>
                        At Himalayas Crafts Nepal, our team is built on the deep roots of Nepalese culture and spiritual tradition. Each member comes from a background rich in healing practices, traditional music, and the sacred art of sound therapy. We are proud to have experienced healers and experts in singing bowls, with deep knowledge of sound frequencies, chakra alignment, and meditation tools. Working closely with skilled local artisans, we ensure that every product is handcrafted using ancient Nepalese and Tibetan techniques. From ethical sourcing to energetic cleansing, we take great care to honor the spiritual value of each item we offer.<br />
                        Our well-organized store in Thamel, Kathmandu is run by a friendly and professional team dedicated to smooth operations, timely delivery, and excellent customer support. We guide each customer with care—helping them find the perfect singing bowl or spiritual tool for their journey. Beyond sales, we believe in building long-term relationships, listening to feedback, and offering ongoing support.
                    </p>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    className=' w-full h-full lg:w-1/2 p-4 mt-4 '>
                    <img
                        src='/Images/team1.jpg'
                        className='object-cover w-full h-full rounded-md'
                    />
                </motion.div>

            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ amount: 0.2 }}
                className='flex flex-col lg:flex-row w-full lg:w-4/5 gap-12 justify-between items-center p-8 text-[#666666] mt-8'
            >
                {
                    Team.slice(0, 3).map((team, index) => (
                        <motion.div
                            variants={cardVariants}
                            key={index}
                            className=''
                        >
                            <div className='border-8 border-gray-400'>
                                <img
                                    src={team.image}
                                    className='object-cover w-80 h-80 '
                                    alt={team.name}
                                />
                            </div>

                            <div className=''>
                                <p className='text-center text-lg font-edensor'>{team.role}</p>
                                <p className='text-center text-lg  font-poppins font-semibold text-[#0B4D81]'>{team.name}</p>
                                <p className='text-center text-lg  font-edensor max-w-xl'>{team.description}</p>
                            </div>

                        </motion.div>
                    ))
                }
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                exit="hidden"
                viewport={{ amount: 0.2 }}
                className='grid grid-cols-1 md:grid-cols-2 w-2/3 gap-16 p-5 text-[#666666]'
            >
                {
                    Team.slice(3, 5).map((team, index) => (
                        <motion.div
                            variants={cardVariants}
                            key={index}
                            className='flex flex-col items-center justify-center'
                        >
                            <div className='border-8 border-gray-400'>
                                <img
                                    src={team.image}
                                    className='object-cover w-80 h-80'
                                    alt={team.name}
                                />
                            </div>

                            <p className='text-center text-lg font-edensor'>{team.role}</p>
                            <button className='text-center text-lg  font-poppins font-semibold text-[#0B4D81] '>{team.name}</button>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default OurTeam;
