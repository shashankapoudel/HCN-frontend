import React, { useEffect } from 'react'
import { useState } from 'react';
import AddProductModal from './AddProductModal';
import BASE_URL from '../../config/api';


const ProductTable = ({ products, onEdit, setProducts, setRefresh }) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [activeProducts, setActiveProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ProductsPerPage = 9;

    const indexOfLastProduct = currentPage * ProductsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;
    const currentProducts = activeProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.max(1, Math.ceil(activeProducts.length / ProductsPerPage))

    useEffect(() => {
        setActiveProducts(products)
    }, [products])


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
                            activeProducts.map((product, index) => (
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



            <div className="flex justify-center mt-6 space-x-2 flex-wrap">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                >
                    Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => {
                    const page = num + 1
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 border rounded ${page === currentPage
                                ? 'bg-[#bb2821] text-white'
                                : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                        >
                            {page}
                        </button>
                    )
                })}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                >
                    Next
                </button>
            </div>


        </div >
    )
}

export default ProductTable

