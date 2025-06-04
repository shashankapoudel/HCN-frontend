import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'


const Products = () => {

    const { products } = useContext(ProductContext)
    return (
        <div>

        </div>
    )
}

export default Products
