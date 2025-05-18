
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { CiShoppingCart } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { PiTiktokLogoLight } from "react-icons/pi";
import SearchBox from './SearchBox';

const Header = () => {
    const navItems = [
        {
            name: 'About Us', path: '/about',
            subItems: [
                { name: 'Our Story', path: '/about/story' },
                { name: 'Our Team', path: '/about/team' }
            ]
        },
        {
            name: 'Products', path: '/products',
            subItems: [
                {
                    name: 'Singing Bowls', path: '/products/singing-bowls', subsubItems: [
                        {
                            name: 'Old/Antique Singing Bowls', path: '/products/singing-bowls/antique', subsubsubItems: [
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
                            name: 'Handmade Singing Bowls', path: '/products/singing-bowls/handmade', subsubsubItems: [
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
                            name: 'Machine made Singing Bowls', path: '/products/singing-bowls/machinemade', subsubsubItems: [
                                { name: 'Note Healing Bowls', path: '/products/singing-bowls/machinemade/note-healing' },
                                { name: 'Chakra Set Bowls', path: '/products/singing-bowls/machinemade/chakra' },
                                { name: 'Himalayas Gift Bowls', path: '/products/singing-bowls/machinemade/himalayas-gift' },
                                { name: 'Hand Hammered Bowls', path: '/products/singing-bowls/machinemade/hand-hammered' },
                            ]
                        },
                        {
                            name: 'Singing Bowl Accessories', path: '/products/singing-bowls/accessories', subsubsubItems: [
                                { name: 'Sticks and Mallets', path: '/products/singing-bowls/accessories/sticks&mallets' },
                                { name: 'Bowls Pillows', path: '/products/singing-bowls/accessories/pillows' },
                                { name: 'Himalayas Accessories', path: '/products/singing-bowls/accessories/himalayas' },
                            ]
                        },
                    ]
                },

                {
                    name: ' Himalayas Ritual Items', path: '/products/ritual-items', subsubItems: [
                        { name: 'Tibetan Prayer Wheel', path: '/products/ritual-items/prayer-wheel' },
                        { name: 'Tibetan Prayer Flags', path: '/products/ritual-items/prayer-flags' },
                        { name: 'Malas and Balas', path: '/products/ritual-items/mala&bala' },
                        {
                            name: 'Himalayas Wooden Product', path: '/products/ritual-items/wooden-products', subsubsubItems: [
                                { name: 'Wooden windows', path: '/products/ritual-items/woodenproducts/windows' },
                                { name: 'Wooden mask', path: '/products/ritual-items/woodenproducts/mask' },
                            ]
                        },
                        {
                            name: 'Incenses and Burners', path: '/products/ritual-items/incenses&burners', subsubsubItems: [
                                { name: 'Himalayas Incenses', path: '/products/ritual-items/incenses&burners/inceses' },
                                { name: 'Incenses burners', path: '/products/ritual-items/incenses&burners/burners' },
                            ]
                        },
                        { name: 'Himalayas Felt Products', path: '/products/ritual-items/felt-products' },
                        {
                            name: 'Himalayas Living Collections', path: '/products/ritual-items/living-collections', subsubsubItems: [
                                { name: "Gorkhali Khukhuri", path: "/products/ritual-items/living-collections/gorkhali-khukuri" }
                            ]
                        },

                    ]
                },

                { name: 'Statues', path: '/products/statues' },

                {
                    name: 'Himalayas Art and Paintings', path: '/products/himalayas-art&paintings', subsubItems: [
                        { name: 'Thangkas and Paintings', path: '/products/himalayas-art&paintings/thankas&paintings' },
                        { name: 'Canvas and Art', path: '/products/himalayas-art&paintings/canvas&arts' },
                    ]
                },

                {
                    name: 'Himalayas Hemp', path: '/products/himalayas-hemp', subsubItems: [
                        { name: 'Hemp Bags and Accessories', path: '/products/himalayas-hemp/bags&accessories' },
                        { name: 'Himalayas Hemp Wear', path: '/products/himalayas-hemp/hemp-wear' },
                        { name: 'Hemp Wellness & Decor', path: '/products/himalayas-hemp/wellness&decor' },
                    ]
                },

                { name: 'Himalayas Crystals', path: '/products/himalayas-crystals' },

                {
                    name: 'Himalayas Healing Collections', path: '/products/himalayas-healingcollections', subsubItems: [
                        { name: 'Sound Healing Courses', path: '/products/healing-collections/sound-healing-courses' },
                        { name: 'Gongs', path: '/products/healing collections/gongs' },
                        { name: 'Bell and Tingsha', path: '/products/healing-collections/bell&tingsha' },
                        { name: 'Shamic Drump', path: '/products/healing-collections/shamic-drump' },
                    ]
                },
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Testimonials', path: '/testimonials' },

        { name: 'FAQs', path: '/faqs' },
        { name: 'Contact', path: '/contact' }
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
    const [hoveredSubItem, setHoveredSubItem] = useState(null);
    const [hoveredSubSubItem, setHoveredSubSubItem] = useState(null);

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    return (
        <div className="flex flex-col w-full fixed top-0 z-50">

            <div className='flex items-center justify-center p-3 bg-[#0B4D81] text-[#FFFFFF] text-sm font-medium'>
                <p className='text-center'>Free holiday offer until April 23, 2025 | Free holiday offer until April 23, 2025</p>
            </div>

            <div className="hidden lg:flex  py-3 px-10 justify-between bg-[#EBEBEB] text-[#111111] w-full">
                <div className="flex gap-12 items-center  text-sm">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            <div className="flex items-center gap-1 cursor-pointer">
                                <NavLink
                                    to={item.path}
                                    className={active === item.path ? 'text-[#0B4D81] font-semibold' : 'text-gray-800 hover:text-[#0B4D81]'}
                                >
                                    {item.name}
                                </NavLink>
                                {item.subItems && <FiChevronDown className="text-gray-600 mt-1" />}
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
                                                className="flex px-4 py-2 text-gray-800 hover:bg-gray-200 items-center justify-between w-full"
                                            >
                                                {subItem.name}
                                                {subItem.subsubItems && <FiChevronDown className="text-gray-600 mt-1 -rotate-90" />}
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
                                                                className="flex items-center justify-between px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                            >
                                                                {subsubItem.name}
                                                                {subsubItem.subsubsubItems && <FiChevronDown className="text-gray-600 mt-1 -rotate-90" />}
                                                            </NavLink>
                                                            {
                                                                subsubItem.subsubsubItems && hoveredSubSubItem === subsubItem.name && (
                                                                    <div className="absolute left-64   w-64 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
                                                                        style={{
                                                                            top: `${index * 36


                                                                                }px`
                                                                        }}
                                                                    >
                                                                        {subsubItem.subsubsubItems.map((subsubsubItem) => (
                                                                            <NavLink
                                                                                key={subsubsubItem.name}
                                                                                to={subsubsubItem.path}
                                                                                state={{ category: subsubsubItem.name }}
                                                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                                            >
                                                                                {subsubsubItem.name}
                                                                            </NavLink>
                                                                        ))
                                                                        }
                                                                    </div>
                                                                )
                                                            }

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
                </div>

                <div className='flex gap-6 text-[#0B4D81]'>
                    <a href='https://www.facebook.com/himalayascraftnepal/' target="_blank" rel="noopener noreferrer">
                        <SlSocialFacebook />
                    </a>
                    <a href='https://www.instagram.com/himalayascraftnepal/' target="_blank" rel="noopener noreferrer">
                        <SlSocialInstagram />
                    </a>
                    <a href='https://www.tiktok.com/@himalayascraftnepal/' target="_blank" rel="noopener noreferrer">
                        <PiTiktokLogoLight />
                    </a>
                </div>

                <div className='flex gap-4 text-sm'>
                    <p>Thamel, Kathmandu,</p>
                    <a href="tel:+9779851013923" className='hover:underline'>+977-9851013923</a>
                </div>
            </div>

            <div className="flex py-3 items-center justify-between text-base px-4 md:px-10 bg-[#FFFFFF]">
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/')}>
                    <img src='/Images/image.png' className='object-cover w-12 h-12' alt="Logo" />
                    <p className='hidden md:flex text-[#0B4D81] font-bold text-sm'>Himalayas Craft Nepal</p>
                </div>

                <div className='w-2/3 md:w-1/3'>
                    <SearchBox />
                </div>

                <div className='flex gap-5 items-center'>
                    <button onClick={() => navigate('trackorder')} className='hidden lg:flex bg-[#0B4D81] text-[#FFFFFF] px-4 py-2'>
                        Track my Order
                    </button>
                    <button
                        onClick={() => navigate('/cart')}
                        className='hidden lg:flex items-center border border-[#0B4D81] gap-1 py-2 px-3 bg-[#FFFFFF] text-[#0B4D81]'
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
                        {navItems.map((item) => (
                            <div key={item.name} className="relative group">

                                <NavLink
                                    to={item.path}
                                    className={`flex items-center text-sm justify-between active === item.path ? 'text-[#00B0A7] font-semibold' : 'text-[#FFFFFF] hover:text-[#00ADA4]'`}
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
                                                                    {subsubItem.subsubsubItems && <FiChevronDown className="text-gray-600 mt-1 -rotate-90 text-lg" />}
                                                                </NavLink>
                                                                {
                                                                    subsubItem.subsubsubItems && hoveredSubSubItem === subsubItem.name && (
                                                                        <div className="absolute left-40 w-40 bg-white border rounded-lg shadow-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out"
                                                                            style={{
                                                                                top: `${index * 36


                                                                                    }px`
                                                                            }}
                                                                        >
                                                                            {subsubItem.subsubsubItems.map((subsubsubItem) => (
                                                                                <NavLink
                                                                                    key={subsubsubItem.name}
                                                                                    to={subsubsubItem.path}
                                                                                    state={{ category: subsubsubItem.name }}
                                                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                                                >
                                                                                    {subsubsubItem.name}
                                                                                </NavLink>
                                                                            ))
                                                                            }
                                                                        </div>
                                                                    )
                                                                }

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

