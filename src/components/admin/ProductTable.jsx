import React, { useEffect } from 'react'
import { useState } from 'react';
import AddProductModal from './AddProductModal';
import BASE_URL from '../../config/api';


const ProductTable = ({ products, onEdit, setProducts, setRefresh }) => {

    const [modalOpen, setModalOpen] = useState(false)



    const handleDelete = async (product) => {
        const confirm = window.confirm('Are you sure you want to delete this Product?')
        if (!confirm) return

        const res = await fetch(`${BASE_URL}/product/delete/${product._id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            alert('Product deleted')
            setProducts(prev => prev.filter(p => p._id !== product._id));
            setRefresh(prev => !prev)
        }
    }

    return (
        <div className='flex flex-col gap-4 text-sm'>


            <div>
                <table className="w-full border-collapse overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="p-3 text-left">Product</th>
                            <th className="p-3 text-left">Category</th>
                            <th className="p-3 text-left">Material</th>
                            <th className="p-3 text-left">Size</th>
                            <th className="p-3 text-left">Price</th>
                            <th className="p-3 text-left">Stock</th>
                            <th className="p-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-3">{product.name}</td>
                                    <td className="p-3">{product.category}</td>
                                    <td className="p-3">{product.material}</td>
                                    <td className="p-3">{product.size}</td>
                                    <td className="p-3">{product.price}</td>
                                    <td className="p-3">{product.stock}</td>
                                    <td className="p-3 flex space-x-2">
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="text-blue-500">✏️</button>
                                        <button
                                            onClick={() => handleDelete(product)}
                                            className="text-red-500">🗑️</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <AddProductModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}

            />
        </div >
    )
}

export default ProductTable

