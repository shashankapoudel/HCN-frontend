import React from 'react'
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Socialmedia = () => {
    return (
        <div className='flex flex-col items-center justify-center p-16 gap-7 bg-[#F6F8FA]'>
            <h1 className='text-5xl font-bold'>Join Our Community</h1>
            <p className='text-2xl'>Join our social media platforms to learn more about out latest products and services</p>
            <div className='flex'>
                <div className='flex gap-7'>
                    <a href='https://www.youtube.com/channel/UCgxP4Bc3CJ_qxzbN4DD4zgQ ' target="_blank" rel="noopener noreferrer"><FaYoutube className='text-4xl text-[#0B4D81]' /></a>
                    <a href='https://www.facebook.com/himalayascraftnepal/' target="_blank" rel="noopener noreferrer"><FaFacebook className='text-4xl text-[#0B4D81]' /></a>
                    <a href='https://www.instagram.com/himalayascraftnepal/' target="_blank" rel="noopener noreferrer"><FaInstagram className='text-4xl text-[#0B4D81]' /></a>

                </div>
            </div>
        </div>
    )
}

export default Socialmedia;
