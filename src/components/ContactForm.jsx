import React, { useState } from 'react'
import BASE_URL from '../config/api'

const ContactForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")


    const handleContactForm = async () => {

        const res = await fetch(`${BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, message }),
        })

        const result = await res.json();
        if (res.ok) {
            setFirstName("")
            setLastName("")
            setEmail("")
            setMessage("")
        } else {
            setError(result.message || 'Failed to send');

        }
    }

    return (
        <div className='w-full  flex flex-col lg:flex-row px-0 md:px-4 lg:px-16 gap-12 h-full mt-12  py-2'>

            <div className='flex flex-col w-full lg:w-1/3 gap-6 h-full'>

                <div className='flex flex-col  text-base md:text-xl lg:text-base'>
                    <h1 className='text-[#101828] font-bold  '>Get in touch</h1>
                    <p className='text-[#667085] lg:text-sm  '>Our friendly team would love to hear from you.</p>
                </div>

                <div className='flex flex-col lg:flex-row gap-5 w-full'>

                    <div className='flex flex-col w-full'>
                        <label className='text-[#344054] text-sm'>First Name</label>
                        <input
                            type='text'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='border p-2 border-[#D0D5DD] rounded-md text-sm'
                            placeholder='Enter yout first name'
                        />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='text-[#344054] text-sm'>Last Name</label>
                        <input
                            type='text'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='border p-2 border-[#D0D5DD] rounded-md text-sm'
                            placeholder='Enter Your Last name'
                        />
                    </div>

                </div>


                <div className='w-full flex flex-col'>
                    <label className='text-[#344054] text-sm'>Email</label>
                    <input
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border p-2 border-[#D0D5DD] rounded-md text-sm'
                        placeholder='Enter your email'
                    />
                </div>


                <div className='w-full flex flex-col'>
                    <label className='text-[#344054] text-sm'>message</label>
                    <textarea
                        rows={8}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='border p-2 border-[#D0D5DD] rounded-md text-sm '
                    />
                </div>

                <div className='w-full bg-[#344054] text-[#FFFFFF] flex justify-center items-center'>
                    <button
                        onClick={handleContactForm}
                        className='flex items-center justify-center p-2 text-center cursor-pointer'>
                        Submit
                    </button>
                </div>
            </div>



            <div className='w-full lg:w-2/3 h-full flex justify-end'>
                <div className='w-full'>
                    <h2 className="text-base font-bold text-[#101828]">Location</h2>

                    <iframe
                        className='rounded-lg border w-full h-96 mt-2'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56512.620323816955!2d85.23503144863282!3d27.716089200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198882a94b4b%3A0x6773834407b50d40!2sHimalayas%20Crafts%20Nepal!5e0!3m2!1sen!2snp!4v1744696250124!5m2!1sen!2snp"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >

                    </iframe>
                </div>

            </div>


        </div>
    )
}

export default ContactForm;
