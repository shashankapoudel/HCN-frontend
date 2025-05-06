import { IoMdCart, IoMdPaperPlane, IoMdTime, IoMdCheckmarkCircleOutline } from "react-icons/io";

const OrderConfirmation = () => {
    const steps = [
        { label: "Order Confirmed", date: "Wed, 11th Jan", icon: <IoMdCart />, active: true },
        { label: "Order Dispatched", date: "Wed, 11th Jan", icon: <IoMdPaperPlane />, active: true },
        { label: "Out for Delivery", date: "Wed, 11th Jan", icon: <IoMdTime />, active: false },
        { label: "Delivered", date: "Expected by, Mon 16th", icon: <IoMdCheckmarkCircleOutline />, active: false },
    ];

    return (
        <div className="flex flex-col justify-start items-center text-center px-6 mb-6">
            <h2 className="text-2xl font-bold">Hey James! 👋</h2>
            <p className="text-gray-500 mt-2">
                Your order (<span className="font-medium">#HCN1234</span>) has been dispatched.{' '}
                <a href="#" className="text-blue-500 font-medium">Contact us</a> for further inquiry.
            </p>

            {/* Progress Bar */}
            <div className="flex flex-col lg:flex-row items-center justify-between mt-8 w-full relative gap-4">
                {steps.map((step, index) => (
                    <div key={index} className="relative flex flex-col items-center text-sm w-full lg:w-auto gap-2">

                        {/* Step Icon */}
                        <div className={`w-12 h-12 flex items-center justify-center rounded-full text-2xl border-2 
                            ${step.active ? "border-green-500 text-green-500" : "border-gray-300 text-gray-400"}`}>
                            {step.icon}
                        </div>

                        {/* Step Label */}
                        <p className={`mt-2 ${step.active ? "text-green-500 font-medium" : "text-gray-400"}`}>
                            {step.label}
                        </p>
                        <p className="text-gray-500 text-sm">{step.date}</p>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-teal-500 text-white px-6 py-2 rounded">Continue Shopping</button>
                <button className="border border-gray-400 text-gray-600 px-6 py-2 rounded">Report Issue</button>
            </div>
        </div>
    );
};

export default OrderConfirmation;