import React, { useEffect, useState } from 'react';
import Newsletter from './Newsletter';

const OfferPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

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

    const text = "Subscribe to our newsletter"

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#ffffff] p-6 rounded-lg shadow-xl w-2/3 relative flex h-2/3 ">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                        >
                            ✕
                        </button>
                        <div className='w-1/2 '>
                            <img
                                src='/Images/OurStory5.jpg'
                                className='w-full h-full object-cover'
                                loading='lazy'
                            />
                        </div>

                        <div className='w-1/2 mt-12 '>
                            <p className="text-center mb-8 text-lg font-bold ">
                                <span className='text-2xl font-bold '>Unlock</span> <br /> <strong className='text-4xl text-[#a7594d]'>20% OFF on</strong> <br />
                                singing bowls this week <br />only!
                            </p>

                            <p className="text-center font-semibold text-base mt-2">
                                Use code: <strong className='text-xl text-[#a7594d]'>HIMALAYA2025</strong> at checkout.
                            </p>

                            <div className='flex flex-col w-full p-4 justify-center items-center md:justify-end md:items-end'>
                                <div className='w-full md:w-3/4'>
                                    <h1 className='text-[#bb2821] font-semibold '></h1>
                                    <p className='text-[#090914] text-sm tracking-wide mt-1'>Subscribe to our newsletter</p>

                                    <div className='flex flex-col gap-2 mt-4 '>
                                        <input
                                            className='border text-[#94A3B8] px-4 py-2 shadow-xl'
                                            value={email}
                                            onChange={(e) => handleChange(e)}
                                            placeholder='Enter your email'
                                            type='email'
                                        />
                                        <button
                                            onClick={handleSubmit}
                                            className='bg-[#bb2821] text-white px-4 py-2 hover:bg-[#093a63] transition-colors duration-200
'>
                                            Subscribe now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default OfferPopUp;
