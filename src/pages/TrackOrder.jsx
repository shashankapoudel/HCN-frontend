import React, { useState } from 'react'
import OrderLogin from '../components/OrderLogin'
import TrackedOrderInfo from '../components/TrackedOrderInfo'
import BASE_URL from '../config/api'

const TrackOrder = () => {
    const [orderID, setOrderID] = useState("")
    const [email, setEmail] = useState("")
    const [orderTracked, setOrderTracked] = useState(false)
    const [orderInfo, setOrderInfo] = useState(null)
    const [error, setError] = useState('')


    const handleOrderTrack = async () => {

        const res = await fetch(`${BASE_URL}/orders/track-order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, orderID })
        })
        const data = await res.json()
        setOrderInfo(data)
        if (res.ok) {
            setOrderTracked(true)
        } else {
            setError(data.message || 'Invalid credentials');
        }

    }

    return (
        <div className='flex text-sm w-full min-h-screen'>
            {!orderTracked ? (
                <OrderLogin
                    orderID={orderID}
                    setOrderID={setOrderID}
                    email={email}
                    setEmail={setEmail}
                    onTrackOrder={handleOrderTrack}
                />
            ) : (
                <TrackedOrderInfo />
            )
            }

        </div>
    )
}

export default TrackOrder
