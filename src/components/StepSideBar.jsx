// import { FaShippingFast } from "react-icons/fa";

// const StepSidebar = ({ step }) => {
//   const SideBar = [
//     { text: "Enter your personal information", icon: <FaShippingFast /> },
//     { text: "Enter your Shipping Address", icon: <FaShippingFast /> },
//     { text: "Payment & Review", icon: <FaShippingFast /> },
//     { text: "Order Confirmation", icon: <FaShippingFast /> },
//   ];

//   return (
//     <div className="flex items-center justify-center p-2 lg:p-4 mt-4 lg:mt-10 w-full md:w-1/4">
//       <ul className="flex flex-col justify-center items-center md:items-end gap-10 w-full ">
//         {SideBar.map((bar, index) => (
//           <div
//             key={index}
//             className={`relative  ${step >= index + 1 ? "text-[#0B4D81]" : "text-[#667085]"}`}
//           >
//             {index !== SideBar.length - 1 && (
//               <span
//                 className={`absolute right-1/2 md:right-0 top-full h-10 border-l-2  ${step > index + 1 ? "border-[#0B4D81]" : "border-[#606060]"} justify-center items-center md:items-end `}
//               ></span>
//             )}

//             <li
//               className={`py-2 flex flex-col lg:flex-row items-center gap-2 lg:gap-4 ${
//                 step >= index + 1 ? "text-[#0B4D81]" : "text-gray-500"
//               }`}
//             >
//               <div className="flex flex-col ">
//                 <span className="text-center md:text-end  font-bold text-base">
//                   Step {index + 1}:
//                 </span>
//                 <span className="text-center md:text-end  text-sm ">
//                   {bar.text}
//                 </span>
//               </div>
//               <div>
//                 <span className="text-center text-2xl lg:text-3xl">
//                   {bar.icon}
//                 </span>
//               </div>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default StepSidebar;

// StepSideBar.jsx

import { FaUser, FaCreditCard, FaCheckCircle } from "react-icons/fa";

const StepSideBar = ({ step }) => {
  const steps = [
    {
      id: 1,
      title: "User Information",
      icon: <FaUser />,
    },
    {
      id: 2,
      title: "Review & Payment",
      icon: <FaCreditCard />,
    },
    {
      id: 3,
      title: "Confirmation",
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 sticky top-24">
      <h2 className="text-2xl font-bold text-[#101828] mb-8">Checkout</h2>

      <div className="flex flex-col gap-8">
        {steps.map((item, index) => {
          const isActive = step === item.id;
          const isCompleted = step > item.id;

          return (
            <div key={item.id} className="flex items-center gap-4 relative">
              {index !== steps.length - 1 && (
                <div
                  className={`absolute left-5 top-10 w-[2px] h-12 ${
                    isCompleted ? "bg-[#0B4D81]" : "bg-gray-200"
                  }`}
                />
              )}

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all duration-300
                ${
                  isCompleted
                    ? "bg-[#0B4D81] text-white"
                    : isActive
                      ? "bg-[#E6F1F8] border-2 border-[#0B4D81] text-[#0B4D81]"
                      : "bg-gray-100 text-gray-500"
                }
                `}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className={`font-medium ${
                    isActive ? "text-[#101828]" : "text-[#667085]"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-xs text-[#98A2B3]">Step {item.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepSideBar;
