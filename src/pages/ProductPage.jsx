import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SubCategoryFilter from '../components/SubCategoryFilter';
import SubSubCategoryFilter from '../components/SubSubCategoryFilter';
import SubSubSubCategoryFilter from '../components/SubSubSubCategoryFilter';
import PriceFilter from '../components/SizeFilter';
import AddToCart from '../components/AddToCart';
import PriceSlider from '../components/priceSlider';


const ProductPage = () => {
    const navigate = useNavigate()
    const { category, subcategory, subsubcategory } = useParams();
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]);



    const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory || '');
    const [selectedSubSubcategory, setSelectedSubSubcategory] = useState(subsubcategory || '');
    const [selectedSubSubSubcategory, setSelectedSubSubSubcategory] = useState('');
    const [selectedSize, setSelectedSize] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const productsData = [
        { id: 1, name: "First product name", category: "singing-bowls", subcategory: "antique", subsubcategory: 'jambati', price: 25000, stock: 25, size: 'Small', material: 'metal', weight: 20, description: 'It is a nice singing bowl', images: '', audio: '' },
        { id: 2, name: "Second product name", category: "singing-bowls", subcategory: "handmade", subsubcategory: 'naga', price: 25000, stock: 45, size: 'Small', material: 'metal', weight: 20, description: 'It is a nice singing bowl', images: '', audio: '' },
        { id: 3, name: "Third product name", category: "ritual-items", subcategory: "machinemade", subsubcategory: 'ultabati', price: 26000, stock: 45, size: 'Medium', material: 'metal', weight: 20, description: 'It is a nice singing bowl', images: '', audio: '' },
        { id: 4, name: "Fourth product name", category: "singing-bowls", subcategory: "antique", subsubcategory: 'ultabati', price: 26000, stock: 45, size: 'Medium', material: 'metal', weight: 20, description: 'It is a nice singing bowl', images: '', audio: '' },
    ];

    // useEffect to filter products based on selected filters
    useEffect(() => {
        const filtered = productsData.filter(
            (product) =>
                product.category === category &&
                (selectedSubcategory === "" || product.subcategory === selectedSubcategory) &&
                (selectedSubSubcategory === "" || product.subsubcategory === selectedSubSubcategory) &&
                (selectedSize.length === 0 || selectedSize.includes(product.size))
                &&
                product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1]
        );
        setFilteredProducts(filtered);
    }, [
        category,
        selectedSubcategory,
        selectedSubSubcategory,
        selectedSize,
        selectedPriceRange
    ]);

    // Fetch available subcategories for the selected category
    const availableSubcategories = [...new Set(productsData
        .filter((p) =>
            p.category === category
        )
        .map((p) => p.subcategory)
        .filter(Boolean)
    )];

    // Fetch available subsubcategories for the selected subcategory
    const availableSubSubcategories = [...new Set(productsData
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
            <div className='w-full mt-4 flex flex-col md:flex-row gap-4'>

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

                <div className='w-full md:w-1/2 lg:w-4/5 p-4'>
                    {filteredProducts.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4'>
                            {filteredProducts.map((product) => (
                                <div
                                    onClick={() => handleProductPage(product.id)}
                                    key={product.id}
                                    className="border p-4 my-2"
                                >
                                    <h2 className="font-bold">{product.name}</h2>
                                    <p>Subcategory: {product.subcategory}</p>
                                    <p>Size: {product.size}</p>
                                    <p>Price: {product.price}</p>
                                    <p>Rating: ⭐{product.rating}</p>
                                    <AddToCart product={product} />
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
