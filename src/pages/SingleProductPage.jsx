import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BASE_URL from '../config/api';
import AddAccessories from '../components/AddAccessories';
import AddToCart from '../components/AddToCart';

const SingleProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState()

    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${BASE_URL}/product/${id}`);
                const data = await res.json();

                setProduct(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch product", error);
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);


    if (loading) return <div className="p-8">Loading...</div>;

    if (!product) return <div className="p-8">Product not found.</div>;

    const handleImageClick = (id) => {
        setIsModalOpen(true)
        setSelectedImage(product.images[id])

    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImage('')
    }

    const handleBack = () => {
        navigate(`/${product.category}/${product.subcategory}`)
    }

    return (
        <div className='min-h-screen p-8 flex flex-col items-center justify-center'>

            <div className=''>

                <div>
                    <button
                        className='underline text-[#bb2821] hover:text-'
                        onClick={handleBack}
                    >
                        ← Back to {product.subcategory}
                    </button>
                </div>

                <div className='flex gap-8 items-center justify-center'>

                    <div className='w-2/5 p-4 grid grid-cols-2 gap-2'>

                        {product.images.map((img, index) => (

                            <img
                                key={index}
                                src={img}
                                alt={product.name}
                                onClick={() => handleImageClick(index)}
                                className="w-full object-cover  rounded cursor-pointer"
                                loading='lazy'
                            />
                        ))
                        }

                    </div>

                    <div className='w-2/5 flex flex-col p-4'>
                        <h1 className='text-3xl font-bold capitalize'>{product.name}</h1>

                        <div className='p-2'>
                            <h1 className='font-bold text-lg'>${product.price}</h1>
                        </div>

                        <div>
                            <p className='text-[#606060] tracking-wide leading-relaxed'>{product.description}</p>
                        </div>

                        <hr />

                        <div className='flex flex-col w-full gap-3 p-2 text-[#606060]'>

                            <div className='flex w-1/2 justify-between'>
                                <h1 className='text-[#323232] font-bold text-sm'>Color</h1>
                                <p className='text-sm'>Black</p>
                            </div>

                            <div className='flex w-1/2 justify-between'>
                                <h1 className='text-[#323232] font-bold text-sm'>Size</h1>
                                <p className='text-sm'>{product.size}cm</p>
                            </div>

                            <div className='flex w-1/2 justify-between'>
                                <h1 className='text-[#323232] font-bold text-sm'>Stock</h1>
                                <p className='text-sm'>{product.stock}units</p>
                            </div>

                            <div className='flex w-1/2 justify-between'>
                                <h1 className='text-[#323232] font-bold text-sm'>Material</h1>
                                <p className='text-sm'>{product.material}</p>
                            </div>
                        </div>


                        <div className='mt-4'>
                            <AddToCart product={product} />
                        </div>
                    </div>
                </div>

            </div>

            <div className='mt-4'>
                <AddAccessories />
            </div>


            {isModalOpen && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
                    onClick={closeModal}
                >
                    <div className='relative max-w-4xl w-full p-4'>
                        <img
                            className='w-full h-auto max-h-[80vh] object-cover rounded-lg'
                            src={selectedImage}
                            alt='Enlarged gallery image'
                            loading='lazy'
                        />
                        <button
                            className='absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition'
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SingleProductPage;
