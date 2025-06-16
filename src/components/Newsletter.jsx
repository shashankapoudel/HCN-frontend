import React, { useState } from 'react'

const Newsletter = ({ text, title }) => {

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
        <div className='flex flex-col w-full p-4 justify-center items-center md:justify-end md:items-end'>
            <div className='w-full md:w-3/4'>
                <h1 className='text-[#bb2821] font-semibold '>{title}</h1>
                <p className='text-[#090914] text-sm tracking-wide mt-1'>{text}</p>

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
                        className='bg-[#0B4D81] text-white px-4 py-2 hover:bg-[#093a63] transition-colors duration-200
'>
                        Subscribe now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
