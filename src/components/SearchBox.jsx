import React from 'react'
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
    return (
        <div className="flex items-center  rounded-lg overflow-hidden p-2 gap-3 bg-[#F7F7F7]">
            <FiSearch className="left-3 text-[#606060]" />
            <label htmlFor="search" className="sr-only">Search</label>
            <input
                id="search"
                type="search"
                className="w-full p-1 bg-[#F7F7F7]"
                placeholder="Search..."
            />
        </div>
    )
}

export default SearchBox
