import React from 'react'
import AddToCart from './AddToCart'


const QuickViewModal = ({ isModalOpen, onClose, quickviewproduct, setQuickviewproduct }) => {

    console.log(quickviewproduct)

    return (
        <div className='p-6 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-sm'>
            <div className='bg-white relative p-6 rounded-lg w-2/3 shadow-lg flex flex-col text-[#323232] gap-2'>

                <div className='flex gap-4 '>

                    <div className='w-2/5 p-4 border'>
                        <img
                            src={quickviewproduct.images?.[0]}
                            alt={quickviewproduct.name}
                            className="w-3/4 object-cover mb-2 rounded"
                        />
                    </div>

                    <div className='w-3/5 flex flex-col p-4'>
                        <h1 className='text-3xl font-bold capitalize'>{quickviewproduct.name}</h1>

                        <div className='p-2 text-[#FFCAAB] font-bold text-lg'>
                            <h1>${quickviewproduct.price}</h1>
                        </div>

                        <hr />

                        <div className='text-[#606060]'>
                            <h1 className='text-sm'>OVERVIEW</h1>
                            <p className='text-sm mt-3 tracking-wide leading-relaxed'>The Professional Tiger Antique Chakra Healing Singing Bowl Set is a finely crafted and comprehensive collection of singing bowls, designed to support deep chakra healing and sound therapy practices...</p>
                        </div>

                        <div className='mt-4'>
                            <AddToCart />
                        </div>
                    </div>


                </div>



                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 absolute right-4 bottom-4 bg-white text-gray-500 rounded w-28 border border-gray-300">
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default QuickViewModal
