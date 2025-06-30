import { useEffect, useState } from "react";
import { Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronDown } from 'react-icons/fi';
import { CiLogout } from "react-icons/ci";

const AdminLayout = ({ setAdmin }) => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    const navigate = useNavigate()


    const navItems = [
        { name: 'Dashboard', route: '/admin' },
        { name: 'Orders', route: '/admin/orders', icon: <RxDashboard /> },
        { name: 'Products', route: '/admin/productlist', icon: <MdOutlineProductionQuantityLimits /> },
        { name: 'Settings', route: '/admin/settings', icon: <IoSettingsOutline /> },
        {
            name: 'Contents', route: '/admin/contents', icon: <IoSettingsOutline />,
            subItems: [
                { name: 'FAQs', path: '/admin/contents/faqs' },
                { name: 'Blogs', path: '/admin/contents/blogs' },
            ]
        },
    ];

    useEffect(() => {
        setActive(location.pathname);
    }, [location]);

    const handleLogout = () => {
        setAdmin(false)
        navigate('/admin')
    }

    return (
        <div className="w-full bg-[#F7F7F7]">
            <div className="w-full bg-[#FFFFFF] p-4">
                <h2 className="text-xl font-semibold text-[#00B0A7]">Himalayas Craft Nepal</h2>
            </div>

            <div className="flex">

                {/* Sidebar */}
                <div className="w-1/5 bg-[#FFFFFF] text-[#323232] min-h-screen p-5">
                    <div className="mt-5 gap-4 flex flex-col justify-between items-start p-2 w-full">

                        <div>
                            <button className="bg-[#02847D] w-full p-2 text-[#FFFFFf]">
                                +Add new product
                            </button>
                        </div>

                        <div className="gap-4 flex flex-col w-full">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative">
                                    <button
                                        onMouseEnter={() => setDropdownOpen(item.name)}

                                        className={`w-full p-2 text-start font-semibold text-sm flex justify-between ${active === item.route ? 'bg-gray-100' : ''}`}
                                    >
                                        <NavLink to={item.route} className="flex gap-1">
                                            {item.icon}
                                            {item.name}
                                        </NavLink>
                                        {item.subItems && <FiChevronDown className="text-gray-600 mt-1" />}
                                    </button>

                                    {item.subItems && dropdownOpen === item.name && (
                                        <div
                                            onMouseLeave={() => setDropdownOpen(null)}
                                            className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                                            {item.subItems.map((subItem) => (
                                                <NavLink
                                                    key={subItem.name}
                                                    to={subItem.path}
                                                    state={{ category: subItem.name }}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                                >
                                                    {subItem.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="w-full p-2">
                            <button
                                onClick={handleLogout}
                                className="text-start flex  items-center bg-[#CE2D000D] gap-2 w-full py-3 px-2 text-[#CE2D00]"><CiLogout />
                                Logout</button>
                        </div>

                    </div>
                </div>

                {/* Main part */}
                <div className="flex-1 m-4 bg-[#FFFFFF]">
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default AdminLayout;
