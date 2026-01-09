
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubCategoryFilter from '../components/SubCategoryFilter';
import SubSubCategoryFilter from '../components/SubSubCategoryFilter';
import AddToCart from '../components/AddToCart';
import PriceSlider from '../components/PriceSlider';
import { ProductContext } from "../context/ProductProvider";
import QuickViewModal from '../components/QuickViewModal';

const categorySubcategories = {
    "singing-bowls": ['antique', 'handmade', 'machinemade', 'accessories'],
    "ritual-items": ["prayer-wheel", "prayer-flags", "mala&bala", "wooden-products", 'incenses&burners', 'felt-products'],
    "statues": [],
    "himalayas-art&paintings": ["thankas&paintings", "canvas&arts"],
    "himalayas-hemp": ["bags&accessories", "wellness&decor"],
    "himalayas-crystals": [],
    "himalayas-healingcollections": ["sound-healing-courses", "gongs", "bell&tingsha", "shamic-drump"],
};

const ProductPage = () => {
    const navigate = useNavigate();
    const { category, subcategory, subsubcategory } = useParams();

    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]);
    const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || '');
    const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(subsubcategory || '');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [quickviewproduct, setQuickviewproduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { products } = useContext(ProductContext);

    if (!Array.isArray(products)) {
        return <div>Loading products...</div>;
    }


 
    const isCategoryPage = !subcategory; 


    const subcategoriesForCategory = categorySubcategories[category] || [];
    const groupedProducts = {};

    subcategoriesForCategory.forEach((sub) => {
        groupedProducts[sub] = products
            .filter((p) =>
                p.category?.toLowerCase() === category.toLowerCase() &&
                p.subcategory?.toLowerCase() === sub.toLowerCase()
            )
            .slice(0, 4);
    });


    useEffect(() => {
        if (!isCategoryPage) {
            const filtered = products.filter((product) =>
                product.category?.toLowerCase() === category?.toLowerCase() &&
                (selectedSubcategory === "" ||
                    product.subcategory?.toLowerCase() === selectedSubcategory?.toLowerCase()) &&
                (selectedSubSubcategory === "" ||
                    product.subsubcategory?.toLowerCase() === selectedSubSubcategory?.toLowerCase()) &&
                product.price >= selectedPriceRange[0] &&
                product.price <= selectedPriceRange[1]
            );

            setFilteredProducts(filtered);
        }
    }, [
        category,
        selectedSubcategory,
        selectedSubSubcategory,
        selectedPriceRange,
        products,
        isCategoryPage
    ]);


    const handleProductPage = (id) => {
        navigate(`/product/${id}`);
    };

    const handlequickviewClick = (product) => {
        setIsModalOpen(true);
        setQuickviewproduct(product);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='p-6 min-h-screen text-sm md:text-lg lg:text-sm'>
            <h1 className='text-[#252C32] capitalize'>{category.replace(/-/g, " ")} Products</h1>

            <div className='w-full mt-4 flex flex-col md:flex-row gap-8'>



                {!isCategoryPage && (
                    <div className='w-full md:w-1/2 lg:w-1/5 flex flex-col gap-4'>

                        {!subsubcategory && !subcategory && (
                            <SubCategoryFilter
                                category={category}
                                selectedSubcategory={selectedSubcategory}
                                setSelectedSubcategory={setSelectedSubcategory}
                            />
                        )}

                        {!subsubcategory && (
                            <SubSubCategoryFilter
                                selectedSubSubcategory={selectedSubSubcategory}
                                setSelectedSubSubcategory={setSelectedSubSubcategory}
                            />
                        )}

                        <PriceSlider
                            minPrice={0}
                            maxPrice={100000}
                            selectedRange={selectedPriceRange}
                            setSelectedRange={setSelectedPriceRange}
                        />
                    </div>
                )}

                {isCategoryPage && (
                    <div className="w-full space-y-12">

                        {subcategoriesForCategory.map((sub) => (
                            <div key={sub}>
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold capitalize">
                                        {sub.replace(/-/g, " ")}
                                    </h2>

                                    <button
                                        onClick={() => navigate(`/products/${category}/${sub}`)}
                                        className="text-blue-600 underline"
                                    >
                                        See More →
                                    </button>
                                </div>

                                {groupedProducts[sub].length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {groupedProducts[sub].map((product) => (
                                            <div
                                                key={product._id}
                                                className="border border-red-200 rounded p-3 relative group w-full max-w-xs"
                                            >
                                                <div className="absolute top-5 flex flex-col right-2 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">❤️</button>
                                                    <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">🔁</button>
                                                    <button
                                                        onClick={() => handlequickviewClick(product)}
                                                        className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                                                    >
                                                        👁️
                                                    </button>
                                                </div>

                                                <img
                                                    onClick={() => handleProductPage(product._id)}
                                                    src={product.images?.[0]}
                                                    alt={product.name}
                                                    className="w-full object-cover rounded cursor-pointer"
                                                />

                                                <h2 className="mt-3 text-sm font-semibold">{product.name}</h2>
                                                <div className="text-yellow-400 text-sm">★★★★★</div>
                                                <div className="text-red-500 font-bold mt-1">${product.price}</div>

                                                <div className="absolute bottom-2 right-2 p-2 rounded-full">
                                                    <AddToCart product={product} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>No products in this subcategory.</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}


                {!isCategoryPage && (
                    <div className='w-full md:w-1/2 lg:w-4/5'>
                        {filteredProducts.length > 0 ? (
                            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4'>
                                {filteredProducts.map((product) => (
                                    <div
                                        key={product._id}
                                        className="border border-red-200 rounded p-3 relative group w-full max-w-xs"
                                    >
                                        <div className="absolute top-5 flex flex-col right-2 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">❤️</button>
                                            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">🔁</button>
                                            <button
                                                onClick={() => handlequickviewClick(product)}
                                                className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
                                            >
                                                👁️
                                            </button>
                                        </div>

                                        <img
                                            onClick={() => handleProductPage(product._id)}
                                            src={product.images?.[0]}
                                            alt={product.name}
                                            className="w-full object-cover rounded cursor-pointer"
                                        />

                                        <h2 className="mt-3 text-sm font-semibold">{product.name}</h2>
                                        <div className="text-yellow-400 text-sm">★★★★★</div>
                                        <div className="text-red-500 font-bold mt-1">${product.price}</div>

                                        <div className="absolute bottom-2 right-2 p-2 rounded-full">
                                            <AddToCart product={product} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>
                )}
            </div>

        
            {isModalOpen && (
                <QuickViewModal
                    isModalOpen={isModalOpen}
                    onClose={handleClose}
                    quickviewproduct={quickviewproduct}
                    setQuickviewproduct={setQuickviewproduct}
                />
            )}
        </div>
    );
};

export default ProductPage;

