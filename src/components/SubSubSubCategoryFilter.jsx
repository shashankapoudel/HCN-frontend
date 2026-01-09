import React, { useEffect, useState } from 'react';

const SubSubSubCategoryFilter = ({ selectedSubSubSubcategory, setSelectedSubSubSubcategory, availableSubSubcategories }) => {
    
    const [subSubSubcategoryOptions, setSubSubSubcategoryOptions] = useState([]);

    console.log(availableSubSubcategories)

    useEffect(() => {
        setSubSubSubcategoryOptions(availableSubSubcategories);
    }, [availableSubSubcategories]);

    const handleChange = (e) => {
        setSelectedSubSubSubcategory(e.target.value);
    };

    console.log(subSubSubcategoryOptions)
    return (
        <div className="my-4">
            <label className="block text-sm font-semibold text-gray-700">Subsubsubcategory</label>
            <select
                className="mt-2 w-full p-2 border border-gray-300 rounded"
                value={selectedSubSubSubcategory}
                onChange={handleChange}
            >
                <option value="">All</option>
                {subSubSubcategoryOptions.length > 0 ? (
                    subSubSubcategoryOptions.map((subSubSubcat, index) => (
                        <option key={index} value={subSubSubcat}>
                            {subSubSubcat}
                        </option>
                    ))
                ) : (
                    <option value="">No options available</option>
                )}
            </select>
        </div>
    );
};

export default SubSubSubCategoryFilter;
