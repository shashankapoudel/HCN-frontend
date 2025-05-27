import React, { useState } from 'react'
import BASE_URL from '../config/api'

const AddToCart = ({ product }) => {


    const [cartItems, setCartItems] = useState([])



    const sendCartItemsToBackend = async (cartItems) => {
        const sessionId = localStorage.getItem('sessionID')


        try {
            const res = await fetch(`${BASE_URL}/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId, cartItems })
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log('error', error);

        }
    }

    const handleAddToCart = (item) => {
        const itemExists = cartItems.some(cartItem => cartItem.id === item.id)
        if (!itemExists) {
            const updatedCart = [...cartItems, item]
            setCartItems(updatedCart)
            sendCartItemsToBackend(updatedCart)
        } else {
            console.log('Item already in cart.')
        }
    }

    return (
        <div>
            <button
                onClick={() => handleAddToCart(product)}
                className='bg-gradient-to-r from-red-600 to-blue-800  text-[#FFFFFF] text-sm p-2 px-4'>Add to Cart</button>
        </div>
    )
}

export default AddToCart
