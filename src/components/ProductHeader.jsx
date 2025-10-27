import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { useSpring } from 'framer-motion';

const ProductHeader = () => {

    const location = useLocation()
    const [active, setActive] = useState(location.pathname)
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const [hoveredSubSubItem, setHoveredSubSubItem] = useState(null);

    const navItems = [


        {
            name: 'Singing Bowls', path: '/products/singing-bowls', subItems: [

                {
                    name: 'Old/Antique Singing Bowls', path: '/products/singing-bowls/antique', subsubItems: [
                        { name: 'Jambati Singing Bowls', path: '/products/singing-bowls/antique/jambati' },
                        { name: 'Manipuri Singing Bowls', path: '/products/singing-bowls/antique/jambati' },
                        { name: 'Naga Singing Bowls', path: '/products/singing-bowls/antique/naga' },
                        { name: 'Ultabati Singing Bowls', path: '/products/singing-bowls/antique/ultabati' },
                        { name: 'Thadobati Singing Bowls', path: '/products/singing-bowls/antique/thadobati' },
                        { name: 'Lingman Singing Bowls', path: '/products/singing-bowls/antique/lingman' },
                        { name: 'Mani Singing Bowls', path: '/products/singing-bowls/antique/mani' },
                        { name: 'Old Singing Bowls', path: '/products/singing-bowls/antique/old' },
                    ]
                },

                {
                    name: 'Handmade Singing Bowls', path: '/products/singing-bowls/handmade', subsubItems: [
                        { name: 'Plain Singing Bowls', path: '/products/singing-bowls/handmade/plain' },
                        { name: 'Fullmoon Singing Bowls', path: '/products/singing-bowls/handmade/fullmoon' },
                        { name: 'Healing/Therapy Bowls', path: '/products/singing-bowls/handmade/healing' },
                        { name: 'Note & color Singing Bowls', path: '/products/singing-bowls/handmade/note-color' },
                        { name: 'Chakra & Zodiac Singing Bowl', path: '/products/singing-bowls/handmade/chakra-zodiac' },
                        { name: 'Engraved Singing Bowls', path: '/products/singing-bowls/handmade/engraved' },
                        { name: 'Large Healing Bowls', path: '/products/singing-bowls/handmade/large' },
                        { name: 'Lingam Singing Bowls', path: '/products/singing-bowls/handmade/lingam' },
                        { name: 'Hand Singing Bowls', path: '/products/singing-bowls/handmade/hand' },
                        { name: 'Himalayas Bowls', path: '/products/singing-bowls/handmade/himalayas' },
                    ]
                },

                {
                    name: 'Machine made Singing Bowls', path: '/products/singing-bowls/machinemade', subsubItems: [
                        { name: 'Note Healing Bowls', path: '/products/singing-bowls/machinemade/note-healing' },
                        { name: 'Chakra Set Bowls', path: '/products/singing-bowls/machinemade/chakra' },
                        { name: 'Himalayas Gift Bowls', path: '/products/singing-bowls/machinemade/himalayas-gift' },
                        { name: 'Hand Hammered Bowls', path: '/products/singing-bowls/machinemade/hand-hammered' },
                    ]
                },

                {
                    name: 'Singing Bowl Accessories', path: '/products/singing-bowls/accessories', subsubItems: [
                        { name: 'Sticks and Mallets', path: '/products/singing-bowls/accessories/sticks&mallets' },
                        { name: 'Bowls Pillows', path: '/products/singing-bowls/accessories/pillows' },
                        { name: 'Himalayas Accessories', path: '/products/singing-bowls/accessories/himalayas' },
                    ]
                },

            ]
        },

        {
            name: ' Himalayas Ritual Items', path: '/products/ritual-items', subItems: [
                { name: 'Tibetan Prayer Wheel', path: '/products/ritual-items/prayer-wheel' },
                { name: 'Tibetan Prayer Flags', path: '/products/ritual-items/prayer-flags' },
                { name: 'Malas and Balas', path: '/products/ritual-items/mala&bala' },
                {
                    name: 'Himalayas Wooden Product', path: '/products/ritual-items/wooden-products', subsubItems: [
                        { name: 'Wooden windows', path: '/products/ritual-items/woodenproducts/windows' },
                        { name: 'Wooden mask', path: '/products/ritual-items/woodenproducts/mask' },
                    ]
                },
                {
                    name: 'Incenses and Burners', path: '/products/ritual-items/incenses&burners', subsubItems: [
                        { name: 'Himalayas Incenses', path: '/products/ritual-items/incenses&burners/inceses' },
                        { name: 'Incenses burners', path: '/products/ritual-items/incenses&burners/burners' },
                    ]
                },
                { name: 'Himalayas Felt Products', path: '/products/ritual-items/felt-products' },
                {
                    name: 'Himalayas Living Collections', path: '/products/ritual-items/living-collections', subsubItems: [
                        { name: "Gorkhali Khukhuri", path: "/products/ritual-items/living-collections/gorkhali-khukuri" }
                    ]
                },

            ]
        },

        { name: 'Statues', path: '/products/statues' },

        {
            name: 'Himalayas Art and Paintings', path: '/products/himalayas-art&paintings', subItems: [
                { name: 'Thangkas and Paintings', path: '/products/himalayas-art&paintings/thankas&paintings' },
                { name: 'Canvas and Art', path: '/products/himalayas-art&paintings/canvas&arts' },
            ]
        },

        {
            name: 'Himalayas Hemp', path: '/products/himalayas-hemp', subItems: [
                { name: 'Hemp Bags and Accessories', path: '/products/himalayas-hemp/bags&accessories' },
                { name: 'Himalayas Hemp Wear', path: '/products/himalayas-hemp/hemp-wear' },
                { name: 'Hemp Wellness & Decor', path: '/products/himalayas-hemp/wellness&decor' },
            ]
        },

        { name: 'Himalayas Crystals', path: '/products/himalayas-crystals' },

        {
            name: 'Healing Collections', path: '/products/himalayas-healingcollections', subItems: [
                { name: 'Sound Healing Courses', path: '/products/healing-collections/sound-healing-courses' },
                { name: 'Gongs', path: '/products/healing collections/gongs' },
                { name: 'Bell and Tingsha', path: '/products/healing-collections/bell&tingsha' },
                { name: 'Shamic Drump', path: '/products/healing-collections/shamic-drump' },
            ]
        },
    ]

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    return (
        <div className="hidden lg:flex w-full  px-4 py-2">

            <div className="flex gap-6 w-full justify-center text-[#111111] text-sm ">
                {navItems.map((item) => (
                    <div key={item.name} className="relative group">

                        <div className="flex items-center gap-1 cursor-pointer font-semibold">
                            <NavLink
                                to={item.path}
                                className={active === item.path ? 'text-[#0B4D81] font-semibold' : 'text-[#111111] hover:text-[#0B4D81]font-semibold'}
                            >
                                {item.name}
                            </NavLink>
                            {item.subItems && <FiChevronDown className="text-[#111111]" />}
                        </div>

                        {item.subItems && (
                            <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                                {item.subItems.map((subItem, index) => (
                                    <div
                                        key={subItem.name}
                                        onMouseEnter={() => setHoveredSubItem(subItem.name)}
                                        onMouseLeave={() => setHoveredSubItem(null)}
                                        className='flex items-center justify-between'
                                    >
                                        <NavLink
                                            to={subItem.path}
                                            state={{ category: subItem.name }}
                                            className="flex px-4 py-2 text-[#111111] hover:bg-gray-200 items-center justify-between w-full"
                                        >
                                            {subItem.name}
                                            {subItem.subsubItems && <FiChevronDown className="text-[#111111] mt-1 -rotate-90" />}
                                        </NavLink>

                                        {subItem.subsubItems && hoveredSubItem === subItem.name && (
                                            <div className="absolute left-64   w-64 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
                                                style={{ top: `${index * 36}px` }}
                                            >
                                                {subItem.subsubItems.map((subsubItem, index) => (
                                                    <div
                                                        onMouseLeave={() => setHoveredSubSubItem(null)}
                                                        className=''>
                                                        <NavLink
                                                            onMouseEnter={() => setHoveredSubSubItem(subsubItem.name)}
                                                            key={subsubItem.name}
                                                            to={subsubItem.path}
                                                            state={{ category: subsubItem.name }}
                                                            className="flex items-center justify-between px-4 py-2 text-[#111111] hover:bg-gray-200"
                                                        >
                                                            {subsubItem.name}
                                                            {subsubItem.subsubsubItems && <FiChevronDown className="text-[#111111] mt-1 -rotate-90" />}
                                                        </NavLink>

                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default ProductHeader


