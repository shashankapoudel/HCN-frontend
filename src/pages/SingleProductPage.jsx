import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BASE_URL from '../config/api';

const SingleProductPage = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(null)


    useEffect(() => {

        const fetchProduct = async () => {
            const res = await fetch(`${BASE_URL}/product/${id}`, {
                method: 'GET'
            })
            const data = await res.json()
            setProduct(data.data)
        }

        fetchProduct()
    }, [id])




    return (
        <div className='min-h-screen'>

        </div>
    )
}

export default SingleProductPage;
