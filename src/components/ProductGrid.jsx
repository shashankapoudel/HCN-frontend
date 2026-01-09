import React from 'react';
import AddToCart from './AddToCart';
import { useNavigate } from 'react-router-dom';
import QuickViewProd from './QuickViewProd';

const ProductGrid = ({ title, description, products }) => {

    const navigate = useNavigate()

    console.log(products)
    return (
        <div className='flex flex-col items-center justify-center w-full p-4 gap-2'>
            {/* <div>
                <h1 className='text-[#111111] text-center font-edensor text-lg'>{title}</h1>
                <p className='text-[#606060] text-sm md:text-base text-center'>{description}</p>
            </div> */}

            <div className='w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {products.map((product) => (
                    <div
                        onClick={() => navigate(`/product/${product._id}`)}
                        key={product._id}
                        className='w-full flex flex-col justify-between bg-white shadow-md rounded-md overflow-hidden transition-all duration-200 hover:shadow-lg p-6 relative'
                    >
                        {/* <div className='bg-[#EBEBEB] flex items-center justify-center'>
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className='object-cover'
                                loading='lazy'
                            />
                        </div> */}
<QuickViewProd/>

                        <div className="relative bg-[#EBEBEB]  w-full aspect-square overflow-hidden group">
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
                            <div className=''>
                                <h1 className='text-[#111111] font-bold text-base capitalize'>
                                    {product.name}
                                </h1>
                                <p className='text-[#606060] text-base font-edensor'>
                                    {product.description?.slice(0, 60) || 'Category description goes here...'}
                                </p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className='text-[#bb2821] font-bold'>${product.price}</p>
                                <AddToCart product={product} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
