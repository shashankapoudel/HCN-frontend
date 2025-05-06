import React from 'react'
import { useState } from 'react';
import AddProductModal from './AddProductModal';

const ProductTable = () => {

    const [modalOpen, setModalOpen] = useState(false)



    const [products, setProducts] = useState([
        { id: 1, name: "Serenity Vibes Hand-Hammered Singing Bowl", category: "Tibetan Singing Bowls", material: "Hand-Hammered Copper Bowl", size: "10 inches", price: "$293.01", stock: "10 left", stockType: "low" },
        { id: 2, name: "ZenTone Himalayan Singing Bowl Set", category: "Himalayan Singing Bowls", material: "Antique Brass Bowl", size: "8 inches", price: "$219.78", stock: "45 units", stockType: "in-stock" },
        { id: 3, name: "Om Resonance Brass Singing Bowl", category: "Chakra Healing Bowls", material: "Root Chakra Bowl", size: "6 inches", price: "$202.87", stock: "Out of stock", stockType: "out-of-stock" },
        { id: 4, name: "Serenity Vibes Hand-Hammered Singing Bowl", category: "Crystal Singing Bowl", material: "Clear Quartz Bowl", size: "5 inches", price: "$601.13", stock: "45 units", stockType: "in-stock" },
        { id: 5, name: "ZenTone Himalayan Singing Bowl Set", category: "Himalayan Singing Bowls", material: "Crystal-Infused Bronze Bowl", size: "8 inches", price: "$779.58", stock: "45 units", stockType: "in-stock" },
        { id: 6, name: "Om Resonance Brass Singing Bowl", category: "Tibetan Singing Bowls", material: "Root Chakra Bowl", size: "6 inches", price: "$576.28", stock: "45 units", stockType: "in-stock" },
    ]);

    const handleDelete = (product) => {
        const filteredProducts = products.filter((item) => product.id != item.id)
        setProducts(filteredProducts)
    }

    return (
        <div className='flex flex-col gap-4 text-sm'>
            <div className='flex justify-between text-black'>
                <h1 className='text-[#323232] font-semibold'>Products</h1>
                <button
                    onClick={() => setModalOpen(true)}
                    className='bg-[#02847D] text-white py-2 px-4 '>
                    +Add new products
                </button>
            </div>
            <div className='border'></div>

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

