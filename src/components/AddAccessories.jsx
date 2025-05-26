import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context/ProductProvider';

const AddAccessories = () => {
    const [productsData, setProductsData] = useState([])
    const { products } = useContext(ProductContext);

    useEffect(() => {

        setProductsData(products)
    }, [products]
    )

    const filteredProducts = productsData.filter((p) => p.subcategory === 'accessories')
    console.log(filteredProducts)

    return (
        <div className='w-full p-4'>
            <h1 className='text-3xl font-bold'>Add accessories</h1>
            <div className='w-1/2 grid grid-cols-4 gap-4 mt-4'>

                {
                    filteredProducts.map((p,) => (
                        <div
                            className='flex flex-col  border p-2'
                            key={p._id}>
                            <h1 className='text-center'>+</h1>
                            <img
                                src={p.images[0]}
                                className='w-full object-cover'
                            />

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default AddAccessories
