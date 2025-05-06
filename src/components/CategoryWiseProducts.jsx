import React from 'react'

const CategoryWiseProducts = () => {

    const singingBowl = [
        { name: 'Product 1' }
    ]

    return (
        <div className='font-edensor p-4'>

            <div className='flex flex-col'>

                <div className='flex flex-col justify-center items-center gap-2'>

                    <div>
                        <h1 className='text-center text-[#111111] text-2xl'>Category1</ h1>
                        <p className='text-center text-[#606060]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos soluta pariatur obcaecati, quam asperiores facere ut excepturi.</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-5 w-full gap-12'>

                        <div>
                            <img
                                src='#'
                                className='w-full object-cover h-52'
                            />
                        </div>
                        <div>
                            <img
                                src='#'
                                className='w-full object-cover h-52'
                            />
                        </div>
                        <div>
                            <img
                                src='#'
                                className='w-full object-cover h-52'
                            />
                        </div>
                        <div>
                            <img
                                src='#'
                                className='w-full object-cover h-52'
                            />
                        </div>

                        <div>
                            <img
                                src='#'
                                className='w-full object-cover h-52'
                            />
                        </div>

                    </div>
                </div>




            </div>

        </div>
    )
}

export default CategoryWiseProducts
