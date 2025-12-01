import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductProvider';
import AddToCart from '../components/AddToCart';
import { useNavigate } from 'react-router-dom';


const SingingBowl = () => {
    const { products } = useContext(ProductContext);

    const navigate = useNavigate()


    const [subcategoryProducts, setSubcategoryProducts] = useState({
        antique: [],
        handmade: [],
        machinemade: [],
        accessories: []
    });

    useEffect(() => {
        if (!products) return;

        const filtered = products.filter(p => p.category === "singing-bowls");

        setSubcategoryProducts({
            antique: filtered.filter(p => p.subcategory === "antique"),
            handmade: filtered.filter(p => p.subcategory === "handmade"),
            machinemade: filtered.filter(p => p.subcategory === "machinemade"),
            accessories: filtered.filter(p => p.subcategory === "accessories"),
        });

    }, [products]);

    const handlequickviewClick = (product) => {
        console.log("Quick view:", product);
    };

    const handleProductPage = (id) => {
        console.log("Navigate to product:", id);
    };

    const truncateText = (text, wordLimit) => {
        const words = text.split(" ");
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(" ") + "...";
    };

    return (
        <div className='min-h-screen p-9'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Singing Bowls</h1>

            <div className='p-8'>

                <div className=''>
                    <h2 className='text-2xl font-bold mb-2'>Handmade Singing Bowls</h2>

                    {
                        subcategoryProducts.handmade.length > 0 ? (
                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    {
                                        subcategoryProducts.handmade.slice(0, 4).map(product => (
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
                                                            {truncateText(product.description, 20)}
                                                        </p>
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
                                <div className='flex w-full items-end justify-end'>
                                    <button
                                        onClick={() => navigate('/singing-bowls/handmade')}
                                        className='underline hover:text-red-300'>See more</button>
                                </div>
                            </div>
                        ) : (
                            <div className='p-10 font-medium text-2xl text-center'>No Products Found</div>
                        )}
                </div>

                <div>
                    <h2 className='text-2xl font-bold mb-2'>Antique Singing Bowls</h2>

                    {
                        subcategoryProducts.antique.length > 0 ? (

                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    {subcategoryProducts.handmade.slice(0, 4).map(product => (
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
                                                        {truncateText(product.description, 20)}
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
                                <div className='flex w-full items-end justify-end'>
                                    <button
                                        onClick={() => navigate('/singing-bowls/antique')}

                                        className='underline hover:text-red-300'>See more</button>
                                </div>
                            </div>
                        ) : (
                            <div className='p-10 font-medium text-2xl text-center'>No Products Found</div>
                        )}
                </div>


                <div>
                    <h2 className='text-2xl font-bold mb-2'>Machinemade Singing Bowls</h2>

                    {
                        subcategoryProducts.machinemade.length > 0 ? (
                            <div>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                    {subcategoryProducts.machinemade.slice(0, 4).map(product => (
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
                                <div className='flex w-full items-end justify-end'>
                                    <button className='underline hover:text-red-300'>See more</button>
                                </div>
                            </div>

                        ) : (
                            <div className='p-10 font-medium text-2xl text-center'>No Products Found</div>
                        )}

                </div>


                <div>
                    <h2 className='text-2xl font-bold mb-2'>Accessories</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {subcategoryProducts.accessories.slice(0, 4).map(product => (
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
                                            {truncateText(product.description, 20)}
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

                    <div className='flex w-full items-end justify-end'>
                        <button
                            onClick={() => navigate('/singing-bowls/accessories')}
                            className='underline hover:text-red-300'>See more</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default SingingBowl;

