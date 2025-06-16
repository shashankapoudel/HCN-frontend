import React, { useEffect, useState } from 'react'
import ProductTable from '../../components/admin/ProductTable'
import AddProductModal from '../../components/admin/AddProductModal'
import BASE_URL from '../../config/api'

const ProductList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [selectedBlog, setSelectedBlog] = useState("")
    const [refresh, setRefresh] = useState(false);


    const getProducts = async () => {
        const res = await fetch(`${BASE_URL}/product/getallproducts`, {
            method: 'GET'
        })
        const data = await res.json()
        console.log(data)
        setProducts(data.data)
    }

    useEffect(() => {
        getProducts()

    }, [refresh])

    const handleModalOpen = () => {
        setIsModalOpen(true)
        setSelectedBlog("")
    }
    const handleModalClose = () => {
        setIsModalOpen(false)
        getProducts()
    }

    const handleEdit = (product) => {
        setSelectedBlog(product)
        setIsModalOpen(true)
    }

    return (
        <div className='p-4'>
            <div className='flex justify-between text-black'>
                <h1 className='text-[#323232] font-semibold'>Products</h1>
                <button
                    onClick={handleModalOpen}
                    className='bg-[#02847D] text-white py-2 px-4 '>
                    +Add new products
                </button>
            </div>

            <div className='mt-4'>
                <ProductTable
                    products={products}
                    setProducts={setProducts}
                    onEdit={handleEdit}
                    setRefresh={setRefresh}
                />
            </div>

            {
                isModalOpen && (
                    <div>
                        <AddProductModal
                            setIsModalOpen={setIsModalOpen}
                            isOpen={isModalOpen}
                            onClose={handleModalClose}
                            existingData={selectedBlog}
                            setRefresh={setRefresh}

                        />
                    </div>
                )
            }

        </div>
    )
}

export default ProductList
