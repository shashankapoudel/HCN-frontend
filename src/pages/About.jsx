import React from 'react'
import OurTeam from './OurTeam'
import Story from './Story'

const About = () => {
    return (
        <div>
            <div className=''>
                <h1 className='text-[#0B4D81] text-2xl font-semibold text-center p-8'>Our story</h1>
                <Story />
            </div>
            <OurTeam />
        </div>
    )
}

export default About;


