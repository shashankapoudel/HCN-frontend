import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'
import { useNavigate, useParams } from 'react-router-dom'
import AddToCart from '../components/AddToCart';

const SubSubCategory = () => {

    const { products } = useContext(ProductContext);
    const { subsubcategory } = useParams()
    const filteredProducts = products.filter((p) => p.subcategorycategory === subsubcategory);

    const navigate = useNavigate();



    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + "...";
    };

    return (
        <div>
            {filteredProducts.length === 0 ? (
                <p className="text-center text-xl">No Products Found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                        <div
                            key={product._id}
                            className='w-full flex flex-col p-6 bg-white shadow-lg justify-between cursor-pointer'>
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
                                    <p className=' text-[#606060]  font-edensor text-base'>
                                        {truncateText(product.description, 15)}
                                    </p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className='text-[#bb2821] font-bold '>${product.price}</p>
                                    <AddToCart product={product} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SubSubCategory
