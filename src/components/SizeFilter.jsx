import React from 'react'

const SizeFilter = ({ selectedSize, setSelectedSize }) => {
    const sizes = ['Small', 'Medium', 'Large']


    const handleSizeChange = (size) => {
        setSelectedSize((prevSelected) =>
            prevSelected.includes(size)
                ? prevSelected.filter((s) => s !== size) 
                : [...prevSelected, size] 
        );
    }

    return (
        <div className='flex flex-col mt-4'>
            <label className='font-semibold mb-2 text-base'>size</label>
            {
                sizes.map((size, index) => (
                    <label key={index} className='flex space-x-2'>
                        <input
                            type='checkbox'
                            value={size}
                            checked={selectedSize.includes(size)}
                            onChange={() => handleSizeChange(size)}
                        />
                        <span className='text-sm text-[#252C32]'>{size}</span>
                    </label>
                ))
            }
        </div>
    )
}

export default SizeFilter
