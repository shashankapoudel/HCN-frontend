import React from 'react'

const TotalOrder = ({ step, nextStep, prevStep }) => {
    return (
        <div className='w-1/4 bg-[#F9F9F9] flex flex-col p-4 text-[#606060] text-sm '>

            <div className='flex justify-between p-4 border-b'>
                <h1>Subtotal</h1>
                <p>$1250.00</p>
            </div>
            <div className='flex justify-between p-4 border-b'>
                <h1>Tax</h1>
                <p>$1250.00</p>
            </div>
            <div className='flex justify-between p-4 border-b'>
                <h1>Shipping</h1>
                <p>$1250.00</p>
            </div>

            <div className='flex justify-between p-4 font-bold'>
                <h1>Total</h1>
                <p>$1250.00</p>
            </div>

            {
                step >= 3 && (
                    <div className='flex flex-col gap-3' >
                        <button
                            className='bg-[#00B0A7] w-full p-2 text-[#FFFFFF]'
                        >
                            Pay $1250.00
                        </button>

                        <button
                            onClick={prevStep}
                            className='bg-[#FFFFFF] w-full p-2 text-[#00B0A7] border border-[#00B0A7]'
                        >
                            Previous
                        </button>
                    </div>
                )
            }

        </div>
    )
}

export default TotalOrder
