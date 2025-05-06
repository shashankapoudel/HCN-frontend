import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Settings = () => {
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    return (
        <div className="max-w-lg p-6 bg-white  rounded-lg">
            <h2 className="text-2xl font-semibold ">Settings</h2>
            <div className='border w-full mt-2'></div>
            <form className="space-y-4 mt-6">

                {["Current Password", "New Password", "Confirm Password"].map((label, index) => {
                    const field = label.toLowerCase().replace(" ", "");
                    return (
                        <div key={index} className="relative">
                            <label className="block text-sm font-medium text-gray-700">{label}</label>
                            <input
                                type={showPassword[field] ? "text" : "password"}
                                placeholder={label}
                                className="w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring focus:ring-green-500 focus:border-green-500"
                            />
                            <button
                                type="button"
                                onClick={() => togglePassword(field)}
                                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword[field] ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                            </button>
                        </div>
                    );
                })}

                <button className="w-full bg-[#02847D] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                    Change Password
                </button>
            </form>
        </div>

    )
}

export default Settings
