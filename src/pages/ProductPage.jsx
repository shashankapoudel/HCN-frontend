import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubCategoryFilter from '../components/SubCategoryFilter';
import SubSubCategoryFilter from '../components/SubSubCategoryFilter';
import SubSubSubCategoryFilter from '../components/SubSubSubCategoryFilter';
import PriceFilter from '../components/SizeFilter';
import AddToCart from '../components/AddToCart';
import PriceSlider from '../components/priceSlider';
import { ProductContext } from "../context/ProductProvider";

const ProductPage = () => {
    const navigate = useNavigate()
    const { category, subcategory, subsubcategory } = useParams();
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]);
    const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || '');
    const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(subsubcategory || '');
    const [selectedSubSubSubcategory, setSelectedSubSubSubcategory] = useState('');
    const [selectedSize, setSelectedSize] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const { products } = useContext(ProductContext);
    console.log(products);

    if (!Array.isArray(products)) {
        return <div>Loading products...</div>;
    }
    useEffect(() => {
        const filtered = products.filter((product) =>
            product.category?.toLowerCase() === category?.toLowerCase() &&
            (selectedSubcategory === "" || product.subcategory?.toLowerCase() === selectedSubcategory?.toLowerCase()) &&
            (selectedSubSubcategory === "" || product.subsubcategory?.toLowerCase() === selectedSubSubcategory?.toLowerCase()) &&
            (selectedSize.length === 0 || selectedSize.includes(product.size)) &&
            product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
        );
        setFilteredProducts(filtered);
    }, [
        category,
        selectedSubcategory,
        selectedSubSubcategory,
        selectedSize,
        selectedPriceRange,
        products
    ]);


    const availableSubcategories = [...new Set(products
        .filter((p) =>
            p.category === category
        )
        .map((p) => p.subcategory)
        .filter(Boolean)
    )];


    const availableSubSubcategories = [...new Set(products
        .filter((p) =>
            p.category === category &&
            (selectedSubcategory === "" || p.subcategory === selectedSubcategory)
        )
        .map((p) => p.subsubcategory)
        .filter(Boolean)
    )];

    console.log(filteredProducts);
    console.log(availableSubcategories)
    console.log(availableSubSubcategories);


    const handleProductPage = (id) => {
        navigate(`/product/${id}`)
    }

    return (
        <div className='p-6 min-h-screen text-sm md:text-lg lg:text-sm'>
            <h1 className='text-[#252C32]'>{category} Products</h1>
            <div className='w-full mt-4 flex flex-col md:flex-row gap-8'>

                <div className='w-full md:w-1/2 lg:w-1/5 flex flex-col gap-4'>

                    {!subsubcategory && !subcategory && (
                        <SubCategoryFilter
                            category={category}
                            selectedSubcategory={selectedSubcategory}
                            setSelectedSubcategory={setSelectedSubcategory}
                            availableSubcategories={availableSubcategories}
                        />
                    )
                    }

                    {!subsubcategory && (

                        <SubSubCategoryFilter
                            selectedSubSubcategory={selectedSubSubcategory}
                            setSelectedSubSubcategory={setSelectedSubSubcategory}
                            availableSubSubcategories={availableSubSubcategories}
                        />
                    )
                    }

                    <PriceSlider
                        minPrice={0}
                        maxPrice={100000}
                        selectedRange={selectedPriceRange}
                        setSelectedRange={setSelectedPriceRange}
                    />
                </div>

                <div className='w-full md:w-1/2 lg:w-4/5 '>
                    {filteredProducts.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4'>
                            {filteredProducts.map((product) => (
                                <div
                                    key={product._id}
                                    onClick={() => handleProductPage(product._id)}
                                    className="border border-red-200 rounded p-3 relative group w-full max-w-xs">
                                    {/* Action Icons */}
                                    <div className="absolute top-5 flex flex-col right-2 space-y-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                            ❤️
                                        </button>
                                        <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                            🔁
                                        </button>
                                        <button
                                            onClick={() => navigate(``)}
                                            className="bg-white p-2 rounded-full shadow  hover:bg-gray-100">
                                            👁️
                                        </button>
                                    </div>

                                    {/* Product Image */}
                                    <img
                                        src={product.images?.[0]}
                                        alt={product.name}
                                        className="w-full h-48 object-cover rounded"
                                    />

                                    {/* Product Details */}
                                    <div className="mt-3">
                                        <h2 className="text-sm font-semibold">{product.name}</h2>
                                        <div className="text-yellow-400 text-sm">★★★★★</div>
                                        <div className="text-red-500 font-bold mt-1">${product.price}</div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <div className="absolute bottom-2 right-2 p-2  rounded-full hover:bg-gray-200">
                                        <AddToCart product={product} />
                                    </div>
                                </div>

                            ))}
                        </div>
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
