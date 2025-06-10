import React from 'react'
import Socialmedia from '../components/Socialmedia'
import ContactForm from '../components/ContactForm'

const Contact = () => {
    return (
        <div className=''>
            <div className='text-left items-center justify-center bg-[#bb2821] p-12'>
                <h1 className='text-2xl md:text-5xl lg:text-6xl  text-white font-bold  justify-center'>Let us be your <br /> <span className='text-left text-[#FFCD03] text-2xl md:text-5xl lg:text-6xl font-bold block mt-4'>Healing platform !</span></h1>
            </div>
            <div className='p-6'>
                <ContactForm />
            </div>

            <Socialmedia />
        </div>
    )
}

export default Contact
