import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductProvider';
import ProductGrid from './ProductGrid';

const ProductBadges = () => {
    const { products } = useContext(ProductContext);
    const [activeTab, setActiveTab] = useState('favorite');

    // Sorting and selecting products
    const latestProducts = [...products]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4);
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    const customerFavorite = shuffled.slice(0, 4);
    const onSale = shuffled.slice(4, 8);

    // Tab data map
    const tabContent = {
        favorite: {
            title: "People's Favorite",
            description: "Trending picks loved by our customers.",
            products: customerFavorite
        },
        latest: {
            title: "Latest Products",
            description: "Freshly added handicraft items just for you.",
            products: latestProducts
        },
        sale: {
            title: "On Sale",
            description: "Special products available at the best prices.",
            products: onSale
        }
    };

    return (
        <div className='w-full p-3'>
            {/* Tabs */}
            <div className='flex justify-center items-center space-x-6 '>
                {['favorite', 'latest', 'sale'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-2 relative font-edensor font-semibold capitalize text-sm md:text-base transition ${activeTab === tab
                            ? 'text-[#bb2821]'
                            : 'text-[#999]'
                            }`}
                    >
                        {tabContent[tab].title}
                        {activeTab === tab && (
                            <div className='absolute bottom-0 left-0 w-full h-[2px] bg-[#bb2821] rounded-full' />
                        )}

                    </button>
                ))}
            </div>

            {/* Active Tab Content */}
            <ProductGrid
                title={tabContent[activeTab].title}
                description={tabContent[activeTab].description}
                products={tabContent[activeTab].products}
            />
        </div>
    );
};

export default ProductBadges;
