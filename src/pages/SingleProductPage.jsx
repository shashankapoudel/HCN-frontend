import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BASE_URL from '../config/api';
import AddAccessories from '../components/AddAccessories';

const SingleProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`${BASE_URL}/product/${id}`);
                const data = await res.json();
                console.log(data);
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

    return (
        <div className='min-h-screen p-8'>

            <div className='flex gap-4 border'>

                <div className='w-2/5 p-4 border'>
                    <img
                        src={product.images?.[0]}
                        alt={product.name}
                        className="w-3/4 object-cover mb-2 rounded"
                    />
                </div>

                <div className='w-2/5 flex flex-col p-4'>
                    <h1 className='text-3xl font-bold capitalize'>{product.name}</h1>

                    <div className='p-2'>
                        <h1>${product.price}</h1>
                    </div>

                    <hr />

                    <div className='flex flex-col w-full gap-3 p-2 text-[#606060]'>

                        <div className='flex w-1/2 justify-between'>
                            <h1 className='text-[#323232] font-bold text-sm'>Color</h1>
                            <p className='text-sm'>Black</p>
                        </div>

                        <div className='flex w-1/2 justify-between'>
                            <h1 className='text-[#323232] font-bold text-sm'>Color</h1>
                            <p className='text-sm'>Black</p>
                        </div>

                        <div className='flex w-1/2 justify-between'>
                            <h1 className='text-[#323232] font-bold text-sm'>Color</h1>
                            <p className='text-sm'>Black</p>
                        </div>

                        <div className='flex w-1/2 justify-between'>
                            <h1 className='text-[#323232] font-bold text-sm'>Color</h1>
                            <p className='text-sm'>Black</p>
                        </div>




                    </div>

                </div>

            </div>

            <div className='mt-4'>
                <AddAccessories />
            </div>

        </div>
    );
};

export default SingleProductPage;
