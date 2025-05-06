import React from "react";

const TrackedOrderInfo = () => {
    return (
        <div className="flex flex-col items-center mt-16 min-h-screen  w-full">
            <div className=" rounded-lg w-1/2 text-center">
                <h2 className="text-2xl font-bold mb-2">
                    Hey <span className="text-black">James!</span> 👋
                </h2>
                <p className="text-gray-600 text-sm">
                    Your order (<span className="font-semibold">#HCN1234</span>) has been dispatched.{" "}
                    <a href="#" className="text-blue-500 underline">Contact us</a> for further inquiry.
                </p>

                {/* Progress Bar with Line */}
                <div className="relative flex items-center justify-between mt-6 w-full">
                    {/* Progress Line */}
                    <div className="absolute top-2/3 left-0 w-full h-1 bg-gray-300 z-0"></div>
                    <div className="absolute top-2/3 left-0 w-1/3 h-1 bg-green-500 z-10"></div>

                    <Step title="Order Confirmed" date="Wed, 11th Jan" completed />
                    <Step title="Order Dispatched" date="Wed, 11th Jan" completed />
                    <Step title="Out for Delivery" date="Wed, 11th Jan" />
                    <Step title="Delivered" date="Expected by, Mon 16th" />
                </div>

                <div className="mt-6 flex gap-4 justify-center">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
                        Continue to shopping
                    </button>
                    <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded-md hover:bg-teal-50">
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    );
};

const Step = ({ title, date, completed }) => {
    return (
        <div className="relative flex flex-col items-center gap-6">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${completed ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500"}`}>
                {completed ? "✔" : "•"}
            </div>
            <p className={`text-sm font-semibold ${completed ? "text-green-600" : "text-gray-400"}`}>
                {title}
            </p>
            <p className="text-xs text-gray-500 mt-2">{date}</p>
        </div>
    );
};

export default TrackedOrderInfo;
