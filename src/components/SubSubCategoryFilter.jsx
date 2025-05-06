import React, { useEffect, useState } from 'react';

const SubSubCategoryFilter = ({ selectedSubSubcategory, setSelectedSubSubcategory, availableSubSubcategories }) => {
    const [subSubcategoryOptions, setSubSubcategoryOptions] = useState([]);


    // const categorySubcategories = {
    // "singing-bowls": ['antique', 'handmade', 'machinemade', 'accessories'],
    // "ritual-items": ["prayer-wheel", "prayer-flags", "mala&bala", "wooden-products", 'incenses&burners', 'felt-products'],
    // "statues": [],
    // "himalayas-art&paintings": ["thankas&paintings", "canvas&arts"],
    // "himalayas-hemp": ["bags&accessories", "wellness&decor"],
    // "himalayas-crystals": [],
    // "himalayas-healingcollections": ["sound-healing-courses", "gongs", "bell&tingsha", "shamic-drump"],
    // };

    useEffect(() => {
        setSubSubcategoryOptions(availableSubSubcategories);
    }, [availableSubSubcategories]);

    const handleChange = (e) => {
        setSelectedSubSubcategory(e.target.value);
    };

    return (
        <div className="my-4 text-sm md:text-lg lg:text-sm">
            <label className="block  font-semibold text-gray-700">Subsubcategory</label>
            <select
                className="mt-2 w-full p-2 border border-gray-300 rounded capitalize"
                value={selectedSubSubcategory}
                onChange={handleChange}
            >
                <option value="">All</option>
                {subSubcategoryOptions.length > 0 ? (
                    subSubcategoryOptions.map((subSubcat, index) => (
                        <option key={index} value={subSubcat}>
                            {subSubcat}
                        </option>
                    ))
                ) : (
                    <option value="">No options available</option>
                )}
            </select>
        </div>
    );
};

export default SubSubCategoryFilter;
