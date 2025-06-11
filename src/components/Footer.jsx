import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import BASE_URL from '../config/api';
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

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
        <div className='flex flex-col justify-between items-center  lg:flex-row lg:justify-between p-4 md:p-8 bg-[#FFFFFF]  bottom-0 gap-4 font-sans font-normal'>


            <div className='w-full p-2 flex flex-col gap-2 tracking-wide'>
                <img
                    src='/Images/logo_FOOTER.png'
                    className='object-cover w-44'
                    alt="Logo"
                />

                <div className='flex items-center gap-2 text-[#090914]'>
                    <FaLocationDot />

                    <p>Thamel, Kathmandu, Nepal</p>
                </div>

                <div className='flex  gap-2 text-[#090914]'>
                    <div className='flex mt-1 gap-1'>
                        <FaPhone />
                        <IoLogoWhatsapp className='text-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <a href="tel:+9779849779890" className='hover:underline'>+977-9849779890</a>
                        <a href="tel:+9779849779322" className='hover:underline'>+977-9849779322</a>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-[#090914]'>
                    <IoMail />
                    <a href='mailto:himalayascraft@gmail.com' className='hover:underline'>
                        himalayascraft@gmail.com
                    </a>
                </div>
                <div className='flex w-full items-start justify-start mt-4'>

                    <div className="relative group overflow-hidden border p-4">
                        <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        <a
                            href="https://www.facebook.com/himalayascraftnepal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                    <div className="relative  group overflow-hidden border p-4">
                        <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        <a
                            href="https://www.instagram.com/himalayascraftnepal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
                        >
                            <FaInstagram />
                        </a>
                    </div>

                    <div className="relative group overflow-hidden border p-4">
                        <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        <a
                            href="https://www.youtube.com/channel/UCgxP4Bc3CJ_qxzbN4DD4zgQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
                        >
                            <FaYoutube />
                        </a>
                    </div>

                    <div className="relative group overflow-hidden border p-4">
                        <div className="absolute inset-0 bg-[#0B4D81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
                        <a
                            href="https://www.tiktok.com/@heal_sakti?_t=ZS-8wvF8dgKIsC&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 text-[#0B4D81] group-hover:text-white transition-colors"
                        >
                            <FaTiktok />
                        </a>
                    </div>

                </div>

            </div>

            <div className='flex  justify-between w-full'>

                <div className=''>
                    <h1 className='text-[#bb2821] font-semibold'>About Us</h1>

                    <div className='text-[#090914] text-sm flex flex-col gap-2 mt-2'>

                        <NavLink to='/about/story' className=''>
                            About  HCN
                        </NavLink>

                        <NavLink to='/about/team' className=''>
                            HCN Team
                        </NavLink>
                        <NavLink to='/about' className=''>
                            Terms and Conditions
                        </NavLink>

                        {/* <NavLink to='/about' className=''>
                            Blogs
                        </NavLink> */}

                        <NavLink to='/about' className=''>
                            Refund Policy
                        </NavLink>

                        <NavLink to='/about' className=''>
                            Wholesale
                        </NavLink>

                        <NavLink to='/about' className=''>
                            Privacy Policy
                        </NavLink>

                        <NavLink to='/about' className=''>
                            Shipping Policy
                        </NavLink>

                    </div>
                </div>

                <div className=' '>
                    <h1 className='text-[#bb2821] font-semibold'>Resources</h1>
                    <div className='text-[#090914] text-sm flex flex-col gap-2 mt-2'>

                        <NavLink to='/about' className=''>
                            How to play singing bowl?
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className='flex flex-col w-full p-4 justify-center items-center md:justify-end md:items-end'>
                <div className='w-full md:w-3/4'>
                    <h1 className='text-[#bb2821] font-semibold '>Newsletter</h1>
                    <p className='text-[#090914] text-sm tracking-wide mt-1'>Sign up to our newsletter and get  an exclusive 15% off on your first order.You'll get early notification about our new products, blogs or anything we release.</p>

                    <div className='flex flex-col gap-2 mt-8 '>
                        <input
                            className='border text-[#94A3B8] px-4 py-2 shadow-xl'
                            value={email}
                            onChange={(e) => handleChange(e)}
                            placeholder='Enter your email'
                            type='email'
                        />
                        <button
                            onClick={handleSubmit}
                            className='bg-[#0B4D81] text-white px-4 py-2 hover:bg-[#093a63] transition-colors duration-200
'>
                            Subscribe now
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;
