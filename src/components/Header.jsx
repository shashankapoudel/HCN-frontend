
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { CiShoppingCart } from "react-icons/ci";
import SearchBox from './SearchBox';
import ProductHeader from './ProductHeader';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const [hoveredSubSubItem, setHoveredSubSubItem] = useState(null);

    const productNavItems = [
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
    ];



    const mainNavItems = [
        {
            name: 'About Us', path: '/about',
            subItems: [
                { name: 'Our Story', path: '/about/story' },
                { name: 'Our Team', path: '/about/team' }
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'FAQs', path: '/faqs' },
        { name: 'Contact', path: '/contact' }
    ];

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);



    return (
        <div className="flex flex-col w-full fixed top-0 z-50">


            <div className='flex items-center justify-center p-2 bg-[#bb2821] text-[#FFFFFF] text-sm font-medium'>
                Free holiday offer until April 23, 2025
            </div>


            <div className="hidden lg:flex gap-6 py-2 px-3 bg-[#EBEBEB] text-[#111111] justify-center items-center">

                <div>
                    <ProductHeader />
                </div>

                <div className='flex gap-5'>

                    {/* <div className='flex gap-2 text-[#111111]'>
                        <a href='https://www.facebook.com/himalayascraftnepal/' target="_blank" rel="noopener noreferrer">
                            <SlSocialFacebook />
                        </a>
                        <a href='https://www.instagram.com/himalayascraftnepal/' target="_blank" rel="noopener noreferrer">
                            <SlSocialInstagram />
                        </a>
                        <a href='https://www.tiktok.com/@himalayascraftnepal/' target="_blank" rel="noopener noreferrer">
                            <PiTiktokLogoLight />
                        </a>
                    </div> */}

                    <div className='flex gap-2 text-sm mt-5'>
                        <p>Thamel,Kathmandu</p>
                        <a href="tel:+9779849779322" className='hover:underline'>+977-9849779322</a>
                    </div>

                </div>

            </div>


            <div className="flex py-2 items-center justify-between text-base px-4 bg-[#FFFFFF] shadow-md">

                <div
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={() => navigate('/')}>
                    <img
                        src='/Images/Logo.png'
                        className='object-cover w-64'
                        alt="Logo"
                        loading='lazy'
                    />
                </div>


                <div className="hidden lg:flex gap-12 items-start text-sm border-b border-l border-r border-gray-100 rounded-b-lg p-4 bg-[#F7F7F7]">
                    {mainNavItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <NavLink
                                to={item.path}
                                className={active === item.path ? 'text-[#0B4D81] font-semibold' : 'text-[#111111] hover:text-[#0B4D81]'}
                            >
                                {item.name}
                            </NavLink>

                            {item.subItems && (
                                <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                                    {item.subItems.map((subItem, index) => (
                                        <NavLink
                                            key={subItem.name}
                                            to={subItem.path}
                                            state={{ category: subItem.name }}
                                            className="flex px-4 py-2 text-[#111111] hover:bg-gray-200 w-full"
                                        >
                                            {subItem.name}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>

                    ))}
                </div>

                <div className='w-2/3 md:w-1/5'>
                    <SearchBox />
                </div>

                <div className='flex gap-5 items-center'>

                    <button onClick={() => navigate('/trackorder')} className='hidden lg:flex bg-[#0B4D81] text-[#FFFFFF] px-2 py-2 hover:bg-[#093a63] transition-colors duration-200 text-sm'>
                        Track my Order
                    </button>

                    <button
                        onClick={() => navigate('/cart')}
                        className='hidden lg:flex items-center border border-[#0B4D81] gap-1 py-2 px-2 bg-[#FFFFFF] hover:bg-[#E6F1F8] transition-colors duration-200 text-[#0B4D81] text-sm'
                    >
                        <CiShoppingCart className='font-bold' />
                        My Cart
                    </button>

                    <button className="text-2xl lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>


            {menuOpen && (
                <div className=" fixed top-0 right-0 w-2/3 h-screen bg-[#0B4D81] text-white p-5 z-50 transition-transform">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-lg font-semibold'>Menu</h1>
                        <button className="text-2xl" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                            <FiX />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-4 mt-6">
                        {[...productNavItems, ...mainNavItems].map(item => (
                            <div key={item.name} className="relative group">

                                <NavLink
                                    to={item.path}
                                    onClick={() => setMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `flex items-center text-sm justify-between ${isActive ? 'text-[#00B0A7] font-semibold' : 'text-[#FFFFFF] hover:text-[#00ADA4]'
                                        }`
                                    }
                                >
                                    {item.name}
                                    {item.subItems && <FiChevronDown className="text-lg mt-1" />}
                                </NavLink>

                                {item.subItems && (
                                    <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
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
                                                    className="flex px-2 py-2 text-gray-800 hover:bg-gray-200 items-center justify-between w-full text-sm"
                                                >
                                                    {subItem.name}
                                                    {subItem.subsubItems && <FiChevronDown className="text-gray-600 mt-1 -rotate-90 text-lg" />}
                                                </NavLink>

                                                {subItem.subsubItems && hoveredSubItem === subItem.name && (
                                                    <div className="absolute left-40  w-40 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
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
                                                                    className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                                >
                                                                    {subsubItem.name}

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
                        ))}
                    </ul>

                </div>
            )}


        </div>
    );
};

export default Header;
