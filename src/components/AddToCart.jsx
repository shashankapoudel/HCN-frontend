import React, { useEffect, useState } from 'react'
import BASE_URL from '../config/api'

const AddToCart = ({ product }) => {

    const [cartItems, setCartItems] = useState([])
    const [showToast, setShowToast] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [toastMessage, setToastMessage] = useState('')

    const sessionId = localStorage.getItem('sessionID')

    const fetchCart = async () => {

        try {
            const res = await fetch(`${BASE_URL}/cart/get/${sessionId}`);
            const data = await res.json();
            if (data.success && data.data?.cartItems) {
                setCartItems(data.data);
            }
        }
        catch (err) {
            console.error("Error fetching cart:", err);
        }

    };

    useEffect(() => {
        if (sessionId) fetchCart();
    }, [sessionId]);


    const sendCartItemToBackend = async (newItem) => {
        setIsLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/cart/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ sessionId, cartItems: [newItem] })
            });

            const data = await res.json();

            if (data.success) {
                setShowToast(true);
                setTimeout(() => setShowToast(false), 3000);
            } else {
                setToastMessage(data.message || "Something went wrong");
                setTimeout(() => setToastMessage(''), 3000);
            }

        } catch (error) {
            console.error('Error sending item to backend:', error);
        } finally {
            setIsLoading(false);
        }

    };

    const handleAddToCart = (item) => {

        const itemExists = cartItems.some(cartItem => cartItem._id === item._id);

        if (!itemExists) {

            const newItem = {
                id: item._id,
                images: item.images?.[0],
                name: item.name,
                price: item.price,
                category: item.category,
                subcategory: item.subcategory,
            };

            const updatedCart = [...cartItems, newItem];
            setCartItems(updatedCart);
            sendCartItemToBackend(newItem);

        }

        else {
            setToastMessage("Product already in the cart");
            setTimeout(() => setToastMessage(''), 3000);
        }
    }

    return (
        <div>

            <button
                onClick={() => handleAddToCart(product)}
                className='bg-gradient-to-r from-[#bb2821] to-[#0B4D81] text-[#FFFFFF] text-sm p-2 px-4'>
                {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                ) : "Add To Cart"}
            </button>

            {showToast && (
                <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg transition-all duration-300">
                    Product added to cart successfully
                </div>
            )}

            {toastMessage && (
                <div className="fixed bottom-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded shadow-lg transition-all duration-300">
                    {toastMessage}
                </div>
            )}

        </div>
    )
}

export default AddToCart;
