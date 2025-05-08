import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import BASE_URL from '../config/api';

const Cart = () => {

    const navigate = useNavigate();
    const sessionId = localStorage.getItem("sessionID");


    const [cartItems, setCartItems] = useState([])
    const [error, setError] = useState("")

    const handleQuantityChange = async (index, newQuantity) => {
        const updatedCart = [...cartItems]
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart)

        try {
            const res = await fetch(`${BASE_URL}/cart/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId, cartItems: updatedCart })
            })
            const data = await res.json()
            if (res.ok) {
                console.log(data)
            } else {
                setError(result.message || 'Failed to send');

            }

        } catch (error) {

        }

    }

    const handleRemoveItem = (index) => {
        const updatedCart = cartItems.filter((item, i) => i != index)
        setCartItems(updatedCart)

    }


    const getCartItems = async () => {
        try {
            const res = await fetch(`${BASE_URL}/cart/get/${sessionId}`, {
                method: 'GET',
            })
            const data = await res.json()
            setCartItems(data.data)
            console.log(data)
        } catch (error) {

        }

    }
    console.log(cartItems)

    useEffect(() => {
        getCartItems()
    }, [sessionId])

    const handleCheckout = () => {
        navigate('/order')
    }

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center w-full gap-8 min-h-screen p-5'>

            <div className='w-fulll lg:w-2/5 p-2 text-sm flex flex-col justify-center '>

                <h1 className='text-[#101828] font-semibold text-2xl border-b'>Your Cart</h1>
                <div className="rounded-lg flex flex-col   w-full ">
                    {cartItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between text-sm py-4 border-b"
                        >

                            <div className='flex gap-4'>
                                <img
                                    src={item.image}
                                    className='object-cover w-12 h-12'
                                />
                                <div className='flex flex-col'>
                                    <p className="font-semibold text-[#101828]">{item.name}</p>
                                    <p className="text-[#606060] text-sm">{item.category}</p>
                                </div>
                            </div>

                            <div className='flex gap-6 items-center'>

                                <input
                                    type='Number'
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                                    className='border rounded w-12 text-center p-1 text-[#111111] border-[#606060]'
                                />

                                <p>{item.price}</p>
                                <button
                                    onClick={() => handleRemoveItem(index)}
                                    className="text-[#FF4040] text-sm">
                                    <FaTrashAlt />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full lg:w-1/5 bg-[#F9F9F9] flex flex-col p-4 text-[#606060] text-sm '>

                <div className='flex justify-between p-3 border-b'>
                    <h1>Subtotal</h1>
                    <p>$1250.00</p>
                </div>
                <div className='flex justify-between p-3 border-b'>
                    <h1>Tax</h1>
                    <p>$1250.00</p>
                </div>
                <div className='flex justify-between p-3 border-b'>
                    <h1>Shipping</h1>
                    <p>$1250.00</p>
                </div>

                <div className='flex justify-between p-3 font-bold'>
                    <h1>Total</h1>
                    <p>$1250.00</p>
                </div>

                <div className='flex flex-col gap-3' >
                    <button
                        onClick={handleCheckout}
                        className='bg-[#0B4D81] w-full p-2 text-[#FFFFFF]'
                    >
                        Checkout
                    </button>

                    <button
                        className='text-[#0B4D81] border border-[#0B4D81] w-full p-2 bg-[#FFFFFF]'
                    >
                        Continue to shopping
                    </button>
                </div>

            </div>

        </div>
    )
}


export default Cart;
