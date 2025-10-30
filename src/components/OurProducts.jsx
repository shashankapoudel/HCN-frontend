import React, { useContext } from 'react'
import { ProductContext } from "../context/ProductProvider";
import AddToCart from './AddToCart';
import { useNavigate } from 'react-router-dom';

const OurProducts = () => {

    const navigate = useNavigate()

    const { products } = useContext(ProductContext)
    console.log(products)

    return (
        <div className='flex flex-col items-center justify-center w-full p-4 gap-2'>

            <div className=''>
                <h1 className='text-[#111111] text-center font-edensor text-lg'>Our Products</h1>
                <p className='text-[#606060] text-sm md:text-base text-center'>We offer variety of Tibetan and Nepali handicraft Products</p>
            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-5'>

                {
                    products.slice(0, 4).map((product) => (
                        <div key={product._id} className='w-full flex flex-col p-6 bg-white shadow-lg justify-between'>
                            <div
                                onClick={() => navigate(`/product/${product._id}`)}

                                className="relative w-full aspect-square overflow-hidden group">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    loading='lazy'
                                    className='object-cover w-full h-full absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 cursor-pointer'
                                />
                                <img
                                    src={product.images[1]}
                                    alt={product.name}
                                    loading='lazy'
                                    className='object-cover w-full h-full absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer'
                                />
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div>
                                    <h1 className='text-left text-[#111111] font-bold text-base capitalize'>{product.name}</h1>
                                    <p className=' text-[#606060]  font-edensor text-base'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className='text-[#bb2821] font-bold '>${product.price}</p>
                                    <AddToCart product={product} />
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div >
    )
}

export default OurProducts
