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
            name: 'Singing Bowls', path: '/singing-bowls', subItems: [

                {
                    name: 'Old/Antique Singing Bowls', path: '/singing-bowls/antique', subsubItems: [
                        { name: 'Jambati Singing Bowls', path: '/singing-bowls/antique/jambati' },
                        { name: 'Manipuri Singing Bowls', path: '/singing-bowls/antique/jambati' },
                        { name: 'Naga Singing Bowls', path: '/singing-bowls/antique/naga' },
                        { name: 'Ultabati Singing Bowls', path: '/singing-bowls/antique/ultabati' },
                        { name: 'Thadobati Singing Bowls', path: '/singing-bowls/antique/thadobati' },
                        { name: 'Lingman Singing Bowls', path: '/singing-bowls/antique/lingman' },
                        { name: 'Mani Singing Bowls', path: '/singing-bowls/antique/mani' },
                        { name: 'Old Singing Bowls', path: '/singing-bowls/antique/old' },
                    ]
                },

                {
                    name: 'Handmade Singing Bowls', path: '/singing-bowls/handmade', subsubItems: [
                        { name: 'Plain Singing Bowls', path: '/singing-bowls/handmade/plain' },
                        { name: 'Fullmoon Singing Bowls', path: '/singing-bowls/handmade/fullmoon' },
                        { name: 'Healing/Therapy Bowls', path: '/singing-bowls/handmade/healing' },
                        { name: 'Note & color Singing Bowls', path: '/singing-bowls/handmade/note-color' },
                        { name: 'Chakra & Zodiac Singing Bowl', path: '/singing-bowls/handmade/chakra-zodiac' },
                        { name: 'Engraved Singing Bowls', path: '/singing-bowls/handmade/engraved' },
                        { name: 'Large Healing Bowls', path: '/singing-bowls/handmade/large' },
                        { name: 'Lingam Singing Bowls', path: '/singing-bowls/handmade/lingam' },
                        { name: 'Hand Singing Bowls', path: '/singing-bowls/handmade/hand' },
                        { name: 'Himalayas Bowls', path: '/singing-bowls/handmade/himalayas' },
                    ]
                },

                {
                    name: 'Machine made Singing Bowls', path: '/singing-bowls/machinemade', subsubItems: [
                        { name: 'Note Healing Bowls', path: '/singing-bowls/machinemade/note-healing' },
                        { name: 'Chakra Set Bowls', path: '/singing-bowls/machinemade/chakra' },
                        { name: 'Himalayas Gift Bowls', path: '/singing-bowls/machinemade/himalayas-gift' },
                        { name: 'Hand Hammered Bowls', path: '/singing-bowls/machinemade/hand-hammered' },
                    ]
                },

                {
                    name: 'Singing Bowl Accessories', path: '/singing-bowls/accessories', subsubItems: [
                        { name: 'Sticks and Mallets', path: '/singing-bowls/accessories/sticks&mallets' },
                        { name: 'Bowls Pillows', path: '/singing-bowls/accessories/pillows' },
                        { name: 'Himalayas Accessories', path: '/singing-bowls/accessories/himalayas' },
                    ]
                },

            ]
        },

        {
            name: ' Himalayas Ritual Items', path: '/ritual-items', subItems: [
                { name: 'Tibetan Prayer Wheel', path: '/ritual-items/prayer-wheel' },
                { name: 'Tibetan Prayer Flags', path: '/ritual-items/prayer-flags' },
                { name: 'Malas and Balas', path: '/ritual-items/mala&bala' },
                {
                    name: 'Himalayas Wooden Product', path: '/ritual-items/wooden-products', subsubItems: [
                        { name: 'Wooden windows', path: '/ritual-items/woodenproducts/windows' },
                        { name: 'Wooden mask', path: '/ritual-items/woodenproducts/mask' },
                    ]
                },
                {
                    name: 'Incenses and Burners', path: '/ritual-items/incenses&burners', subsubItems: [
                        { name: 'Himalayas Incenses', path: '/ritual-items/incenses&burners/inceses' },
                        { name: 'Incenses burners', path: '/ritual-items/incenses&burners/burners' },
                    ]
                },
                { name: 'Himalayas Felt Products', path: '/ritual-items/felt-products' },
                {
                    name: 'Himalayas Living Collections', path: '/ritual-items/living-collections', subsubItems: [
                        { name: "Gorkhali Khukhuri", path: "/ritual-items/living-collections/gorkhali-khukuri" }
                    ]
                },

            ]
        },

        { name: 'Statues', path: '/statues' },

        {
            name: 'Himalayas Art and Paintings', path: '/himalayas-art&paintings', subItems: [
                { name: 'Thangkas and Paintings', path: '/himalayas-art&paintings/thankas&paintings' },
                { name: 'Canvas and Art', path: '/himalayas-art&paintings/canvas&arts' },
            ]
        },

        {
            name: 'Himalayas Hemp', path: '/himalayas-hemp', subItems: [
                { name: 'Hemp Bags and Accessories', path: '/himalayas-hemp/bags&accessories' },
                { name: 'Himalayas Hemp Wear', path: '/himalayas-hemp/hemp-wear' },
                { name: 'Hemp Wellness & Decor', path: '/himalayas-hemp/wellness&decor' },
            ]
        },

        { name: 'Himalayas Crystals', path: '/himalayas-crystals' },

        {
            name: 'Healing Collections', path: '/himalayas-healingcollections', subItems: [
                { name: 'Sound Healing Courses', path: '/healing-collections/sound-healing-courses' },
                { name: 'Gongs', path: '/healing collections/gongs' },
                { name: 'Bell and Tingsha', path: '/healing-collections/bell&tingsha' },
                { name: 'Shamic Drump', path: '/healing-collections/shamic-drump' },
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


