import React from 'react'

const OurProducts = () => {

    const productCategories = [
        { category: 'singing bowl', products: '23' },
        { category: 'singing bowl', products: '23' },
        { category: 'singing bowl', products: '23' },
        { category: 'singing bowl', products: '23' },
        { category: 'singing bowl', products: '23' },
    ]


    return (
        <div className='flex flex-col items-center justify-center w-full p-4 gap-2'>

            <div className=''>
                <h1 className='text-[#111111] text-center font-edensor text-lg'>Our Products</h1>
                <p className='text-[#606060] text-sm md:text-lg text-center'>We offer variety of Tibetan and Nepali handicraft Products</p>
            </div>

            <div className='w-full grid grid-cols-2 lg:grid-cols-5 justify-between gap-12'>

                {
                    productCategories.map((category, index) => (
                        <div key={index} className='w-full'>
                            <img
                                src='#'
                                className='bg-[#EBEBEB] object-cover w-full h-52'
                            />
                            <h1 className='text-center text-[#111111] font-semibold text-lg'>{category.category}</h1>
                            <p className='text-center text-[#111111] font-light text-sm'>{category.products}</p>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default OurProducts
