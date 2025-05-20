import React, { useEffect, useState } from 'react'
import { getCode, getNames } from 'country-list';

const PersonalInfo = ({ nextStep, formData, setFormData }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [phone, setPhone] = useState("")
    const [showToast, setShowToast] = useState(false)
    const [country, setCountry] = useState("")
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const countryNames = getNames()
        setCountries(countryNames)
    }, [])

    // const handleNext = () => {
    //     if (!firstname || !lastname || !email || !phone) {
    //         setShowToast(true)
    //         setTimeout(() => setShowToast(false), 3000)
    //     } else {
    //         setFormData({
    //             ...formData,
    //             personalInfo: {
    //                 firstname,
    //                 lastname,
    //                 email,
    //                 // code,
    //                 phone,
    //                 country,
    //             },
    //         });
    //         nextStep()
    //     }
    // }

    const handleNext = () => {
        nextStep()
    }

    return (
        <div className='relative flex flex-col p-2 lg:p-4 justify-center items-center mb-6'>
            <div className='mb-8 flex flex-col'>
                <h1 className='font-bold text-center text-xl'>Personal Information</h1>
                <p className='text-[#667085] text-center text-sm'>Please fill in your details below to ensure a smooth checkout and delivery</p>
            </div>

            <div className='flex flex-col gap-6 w-full'>
                {/* First & Last Name */}
                <div className='flex flex-col md:flex-row gap-6 w-full'>

                    <div className='flex flex-col w-full'>
                        <label className='text-sm'>First Name *</label>
                        <input
                            type='text'
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className='border p-2 rounded-md text-sm'
                            placeholder='Enter your first name'
                        />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label className='text-sm'>Last Name *</label>
                        <input
                            type='text'
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className='border p-2 rounded-md text-sm'
                            placeholder='Enter your last name'
                        />
                    </div>
                </div>

                {/* Email */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm'>Email *</label>
                    <input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border p-2 rounded-md text-sm'
                        placeholder='Enter your email'
                    />
                </div>

                {/* Code */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm'>Email Verification *</label>
                    <input
                        type='text'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className='border p-2 rounded-md text-sm'
                        placeholder='6-digit code'
                    />
                </div>

                {/* Phone */}
                <div className='flex flex-col w-full'>
                    <label className='text-sm'>Phone Number *</label>

                    <div className='flex'>
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="border p-2 w-full rounded text-sm"
                        >
                            <option value="">Select Country</option>
                            {countries.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </select>

                        <input
                            type='text'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='border p-2 rounded-md text-sm w-full'
                            placeholder='Enter your phone number'
                        />
                    </div>
                </div>

                {/* Submit */}
                <button
                    onClick={handleNext}
                    className='bg-[#0B4D81] text-white p-2 rounded-md'
                >
                    Next: Shipping Address
                </button>
            </div>

            {showToast && (
                <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg transition-all duration-300">
                    ⚠️ Please fill all fields to proceed.
                </div>
            )}
        </div>
    )
}

export default PersonalInfo
