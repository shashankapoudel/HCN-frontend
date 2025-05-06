import React, { useState } from 'react'
import BASE_URL from '../../config/api'

const AdminLogin = ({ setAdmin }) => {

    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('');

    const handleLogin = async () => {

        const res = await fetch(`${BASE_URL}/users/adminlogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            
        })
        const result = await res.json();
        if (res.ok) {
            setAdmin(true);
        } else {
            setError(result.message || 'Invalid credentials');

        }
        setAdmin(true)
    }

    return (
        <div className='p-6 flex justify-center items-center w-full text-sm min-h-screen'>

            <div className='w-1/3 flex flex-col gap-6 bg-white shadow-md p-4'>

                <div>
                    <h1 className='text-[#02847D] font-semibold text-lg'>Login to Himalayas craft Nepal Admin</h1>
                    <p className='text-[#606060] text-sm'>Enter Username and Password to get access to admin panel</p>
                </div>

                <div className='flex flex-col'>
                    <label>Username</label>
                    <input
                        type='text'
                        className='border p-2 w-full bg-[#F7F7F7]'
                        value={username}

                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className='flex flex-col'>
                    <label>Password</label>
                    <input
                        type='password'
                        className='border p-2 w-full bg-[#F7F7F7]'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className='bg-[#02847D] text-[#FFFFFF] p-2'>Sign In</button>

            </div>
        </div>
    )
}

export default AdminLogin
