import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import BASE_URL from '../config/api';

const Footer = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }


    const handleSubmit = async () => {

        const res = await fetch(`${BASE_URL}/newsletter/getsubscription`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
        const result = await res.json()
        if (res.ok) {
            setEmail("");
        } else {
            setError(result.message || 'Invalid credentials');

        }
    }

    return (
        <div className='flex flex-col  justify-between  lg:flex-row lg:justify-between p-4 md:p-8 bg-[#FFFFFF]  bottom-0'>


            <div className='w-full'>
                <img
                    src='/Images/image.png'
                    className='object-cover w-12 h-12'
                    alt="Logo"
                />
                <p className='hidden md:flex text-[#0B4D81] font-bold text-sm'>
                    Himalayas Craft Nepal
                </p>
            </div>

            <div className='flex  justify-between w-full'>

                <div className=''>
                    <h1 className='text-[#94A3B8]'>COMPANY</h1>

                    <div className='text-[#090914] text-sm flex flex-col gap-2 mt-2'>

                        <NavLink to='/about' className=''>
                            About
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Products
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Blogs
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Contact
                        </NavLink>
                    </div>
                </div>


                <div className=' '>
                    <h1 className='text-[#94A3B8]'>Help</h1>
                    <div className='text-[#090914] text-sm flex flex-col gap-2 mt-2'>
                        <NavLink to='/about' className=''>
                            Customer Services
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Terms and Conditions
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Refund Policy
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Shipping Policy
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className='flex flex-col w-full p-4 justify-center items-center md:justify-end md:items-end'>
                <div className='w-full md:w-3/4'>
                    <h1 className='text-[#94A3B8]'>Newsletter</h1>

                    <div className='flex flex-col gap-2 mt-2 '>
                        <input
                            className='border text-[#94A3B8] px-4 py-2 shadow-xl'
                            value={email}
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter your email'
                            type='email'
                        />
                        <button
                            onClick={handleSubmit}
                            className='bg-[#0B4D81] text-white px-4 py-2'>
                            Subscribe now
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
