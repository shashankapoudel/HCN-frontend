

import React from 'react'
import { motion } from 'framer-motion';

const OurTeam = () => {

    const Team = [
        {
            name: 'Akash Banjara',
            image: '/Images/akashbanjara.jpg',
            role: 'Managing Director'
        },
        {
            name: 'Kapil Bagale',
            image: '/Images/kapilbagale.jpg',
            role: 'Operational Manager'
        },
        {
            name: 'Alish Banjara',
            image: '/Images/alishbanjara.jpg',
            role: 'Operational Manager'
        },
        {
            name: 'Ishwor Bagale',
            image: '/Images/homeImage.png',
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
            <h1 className='text-3xl font-bold text-[#0B4D81]  font-edensor'>Our Team</h1>


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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odio libero, at vitae alias, odit dolorum molestiae aliquid numquam quia ducimus, laboriosam vero rerum fuga expedita atque incidunt dolorem accusantium.lo Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates asperiores iure hic tempore suscipit eos cum ab obcaecati, quia molestias ipsum saepe quas sed, quaerat velit. Sit, ex atque. Pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consectetur tenetur illum eaque velit id sapiente voluptas odio quos? Similique molestiae quam necessitatibus aut aliquam est vitae dolorum suscipit esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium error ad adipisci, ullam et quasi quam dolore voluptates eum, qui aut voluptatibus ea! Impedit explicabo fuga odit omnis sequi.
                    </p>
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    className=' w-full lg:w-1/2 p-4'>
                    <img
                        src='/Images/team1.jpg'
                        className='object-cover h-full rounded-md w-full'
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
                        >
                            <img
                                src={team.image}
                                className='object-cover w-80 h-80 border'
                                alt={team.name}
                            />
                            <p className='text-center text-lg font-edensor leading-relaxed'>{team.role}</p>
                            <p className='text-center text-lg leading-relaxed font-poppins font-semibold text-[#0B4D81] '>{team.name}</p>
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
                            <img
                                src={team.image}
                                className='object-cover w-80 h-80'
                                alt={team.name}
                            />
                            <p className='text-center text-lg font-edensor leading-relaxed'>{team.role}</p>
                            <button className='text-center text-lg leading-relaxed font-poppins font-semibold text-[#0B4D81] '>{team.name}</button>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default OurTeam;
