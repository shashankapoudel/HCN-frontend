import React, { useEffect, useState } from 'react';
import Newsletter from './Newsletter';

const OfferPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    const text = "Subscribe to our newsletter"

    useEffect(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-[#ffffff] p-6 rounded-lg shadow-xl w-2/3 relative flex h-2/3 items-center justify-center ">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                        >
                            ✕
                        </button>
                        <div className='w-1/2'>
                            <img
                                src='/Images/OurStory5.jpg'
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='w-1/2'>
                            <p className="text-center mb-8 text-lg font-bold ">
                                <span className='text-2xl font-bold '>Unlock</span> <br /> <strong className='text-4xl'>20% OFF on</strong> <br />
                                singing bowls this week <br />only!
                            </p>

                            <p className="text-center  font-semibold text-base mt-2">
                                Use code: <strong className='text-xl'>HIMALAYA20</strong> at checkout.
                            </p>
                            <Newsletter
                                text={text}
                            />
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default OfferPopUp;
