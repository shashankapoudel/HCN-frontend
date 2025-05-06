import React, { useState } from 'react'

const SubCategoryFilter = ({ category, setSelectedSubcategory, selectedSubcategory }) => {

    const categorySubcategories = {
        "singing-bowls": ['antique', 'handmade', 'machinemade', 'accessories'],
        "ritual-items": ["prayer-wheel", "prayer-flags", "mala&bala", "wooden-products", 'incenses&burners', 'felt-products'],
        "statues": [],
        "himalayas-art&paintings": ["thankas&paintings", "canvas&arts"],
        "himalayas-hemp": ["bags&accessories", "wellness&decor"],
        "himalayas-crystals": [],
        "himalayas-healingcollections": ["sound-healing-courses", "gongs", "bell&tingsha", "shamic-drump"],
    };



    return (
        <div className='mt-4 flex flex-col text-sm md:text-lg lg:text-sm'>
            <label className='font-semibold mb-2 text-base'>Product Categories</label>
            {categorySubcategories[category]?.map((sub, index) => (
                <label key={index} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        value={sub}
                        checked={selectedSubcategory === sub}
                        onChange={() => setSelectedSubcategory(sub === selectedSubcategory ? "" : sub)}
                        className="capitalize"
                    />
                    <span className=' text-[#252C32] capitalize'>{sub}</span>
                </label>
            ))}
        </div>
    )
}

export default SubCategoryFilter
