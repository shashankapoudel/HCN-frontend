// import { FaShippingFast } from "react-icons/fa";


// const StepSidebar = ({ step }) => {
//     const SideBar = [
//         { text: 'Enter your personal information', icon: <FaShippingFast /> },
//         { text: 'Enter your Shipping Address', icon: <FaShippingFast /> },
//         { text: 'Payment & Review', icon: <FaShippingFast /> },
//         { text: 'Order Confirmation', icon: <FaShippingFast /> },
//     ]

//     return (
//         <div className="flex items-center justify-center p-2 mt-10 w-1/4 border">
//             <ul
//                 className="flex flex-col justify-center items-center md:items-end gap-10"
//             >
//                 {SideBar.map((bar, index) => (
//                     <div>

//                         <li
//                             key={index}
//                             className={`py-2 flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-4 ${step === index + 1 ? "" : ""}`}
//                         >
//                             <div className="flex flex-col">
//                                 <span className="text-center md:text-end  text-[#323232] font-bold text-base"> Step {index + 1}:</span>
//                                 <span className="text-center md:text-end text-[#667085]  text-sm">{bar.text}</span>
//                             </div>
//                             <div>
//                                 <span className="text-center md:text-end text-[#667085] text-2xl lg:text-3xl ">{bar.icon}</span>
//                             </div>

//                         </li>

//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default StepSidebar;



import { FaShippingFast } from "react-icons/fa";

const StepSidebar = ({ step }) => {
    const SideBar = [
        { text: 'Enter your personal information', icon: <FaShippingFast /> },
        { text: 'Enter your Shipping Address', icon: <FaShippingFast /> },
        { text: 'Payment & Review', icon: <FaShippingFast /> },
        { text: 'Order Confirmation', icon: <FaShippingFast /> },
    ];

    return (
        <div className="flex items-center justify-center p-2 lg:p-4 mt-4 lg:mt-10 w-full md:w-1/4">
            <ul className="flex flex-col justify-center items-center md:items-end gap-10 w-full ">
                {SideBar.map((bar, index) => (
                    <div key={index} className={`relative  ${step >= index + 1 ? "text-[#00ADA4]" : "text-[#667085]"}`}>

                        {index !== SideBar.length - 1 && (
                            <span className={`absolute right-1/2 md:right-0 top-full h-10 border-l-2  ${step > index + 1 ? "border-[#00ADA4]" : "border-[#606060]"} justify-center items-center md:items-end `}></span>
                        )}

                        <li
                            className={`py-2 flex flex-col lg:flex-row items-center gap-2 lg:gap-4 ${step >= index + 1 ? "text-[#00ADA4]" : "text-gray-500"
                                }`}
                        >
                            <div className="flex flex-col ">
                                <span className="text-center md:text-end  font-bold text-base">
                                    Step {index + 1}:
                                </span>
                                <span className="text-center md:text-end  text-sm ">
                                    {bar.text}
                                </span>
                            </div>
                            <div>
                                <span className="text-center text-2xl lg:text-3xl">
                                    {bar.icon}
                                </span>
                            </div>
                        </li>
                    </div>
                ))}
            </ul>
        </div >
    );
};

export default StepSidebar;


