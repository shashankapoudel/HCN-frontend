import { FaTrashAlt, FaEdit } from "react-icons/fa";

const PaymentReview = ({ nextStep, prevStep }) => {
    const items = [
        {
            id: 1,
            name: "Full Moon Singing Bowl",
            category: "Singing Bowl",
            quantity: 3,
            price: 250.0,
            image: "/Images/homeImage.png",
        },
        {
            id: 2,
            name: "Full Moon Singing Bowl",
            category: "Singing Bowl",
            quantity: 3,
            price: 250.0,
            image: "/Images/homeImage.png",
        },
        {
            id: 3,
            name: "Full Moon Singing Bowl",
            category: "Singing Bowl",
            quantity: 3,
            price: 250.0,
            image: "/Images/homeImage.png",
        },
        {
            id: 4,
            name: "Full Moon Singing Bowl",
            category: "Singing Bowl",
            quantity: 3,
            price: 250.0,
            image: "/Images/homeImage.png",
        },
        {
            id: 5,
            name: "Full Moon Singing Bowl",
            category: "Singing Bowl",
            quantity: 3,
            price: 250.0,
            image: "/Images/homeImage.png",
        },
    ];

    return (
        <div className="w-1/2">
            <p className="text-[#667085] text-center mb-4 text-sm">
                Enter your shipping details below to ensure accurate and timely delivery
            </p>
            <div className="flex flex-col  p-6 bg-[#FAFAFA] w-full">
                <div className="rounded-lg ">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between text-sm py-4"
                        >
                            <div className="flex gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-auto h-12 object-cover"
                                    loading="lazy"
                                />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-gray-800">{item.name}</p>
                                    <p className="text-gray-500 text-sm">{item.category}</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <span className="text-[#667085]">x{item.quantity}</span>
                                <span className="text-[#667085] font-semibold">${item.price.toFixed(2)}</span>
                                <button className="text-[#005EFF] text-sm">
                                    <FaEdit />
                                </button>
                                <button className="text-[#FF4040] text-sm">
                                    <FaTrashAlt />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentReview;

