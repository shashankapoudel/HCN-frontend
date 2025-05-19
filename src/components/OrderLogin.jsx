import React from 'react'

const OrderLogin = ({ email, setEmail, orderID, setOrderID, onTrackOrder }) => {
    return (

        <div className='flex flex-col items-center w-full mt-12 gap-5 p-4'>

            <div className='text-center'>
                <h1 className='text-[#101828] font-semibold text-2xl'>Track your Order</h1>
                <p className='text-[#667085]'>Input your orderID and email to know the status of email</p>
            </div>

            <div className='flex flex-col w-full lg:w-1/4 mt-4'>
                <label>OrderID</label>
                <input
                    type='text'
                    value={orderID}
                    onChange={(e) => setOrderID(e.target.value)}
                    className='border border-[#D0D5DD] p-2 rounded-md'
                />
            </div>

            <div className='flex flex-col w-full lg:w-1/4'>
                <label>Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border border-[#D0D5DD] p-2 rounded-md'
                />
            </div>

            <button
                className='border w-full lg:w-1/4 p-2 text-[#FFFFFF] bg-[#0B4D81]'
                onClick={onTrackOrder}
            >
                Track your Order
            </button>

        </div>
    )
}

export default OrderLogin
