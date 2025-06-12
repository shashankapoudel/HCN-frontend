import React, { useEffect, useState } from 'react';

const OfferPopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {

        setIsOpen(true);
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-red-400 p-6 rounded-lg shadow-xl max-w-md w-full relative">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                        >
                            ✕
                        </button>

                        {/* Offer Content */}
                        <h2 className="text-2xl font-bold text-center text-[#bb2821] mb-4">
                            🎉 Latest Offer!
                        </h2>
                        <p className="text-center text-[#ffffff] mb-2">
                            Get 20% OFF on all singing bowls this week only!
                        </p>
                        <p className="text-center text-gray-600 text-sm">
                            Use code: <strong>HIMALAYA20</strong> at checkout.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default OfferPopUp;
