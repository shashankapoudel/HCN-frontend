import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import BASE_URL from "../config/api";

export default function FAQ() {
    const categories = ["General", "Products", 'Product Maintenance', 'Customer Support', "Payment", "Shipping and Orders", 'Refund Policy']

    const [openIndex, setOpenIndex] = useState(null);
    const [category, setCategory] = useState('Customer Support')
    const [active, setActive] = useState('Customer Support')
    const [faqData, setFaqData] = useState([])


    useEffect(() => {
        const getFaq = async () => {
            const res = await fetch(`${BASE_URL}/faq/getfaq`, {
                method: 'GET'
            })
            const data = await res.json()
            console.log(data)
            setFaqData(data.data)
        }
        getFaq()
    }, [])

    const handleCategory = (item) => {
        setCategory(item)
        setActive(item)
    }

    const filteredFaqs = faqData.filter((data) => data.category === category)


    return (
        <div className="px-4 lg:px-8 text-gray-600 w-full min-h-screen tracking-wide leading-relaxed">

            <div className="w-full flex flex-col-reverse lg:flex-row gap-3 lg:gap-8 px-2 lg:px-4">

                <div className="flex flex-col w-full  lg:w-1/2 p-0 lg:p-4 gap-2 mt-4 lg:mt-16  ">
                    <div className="flex flex-col items-start gap-2 text-sm tracking-wide w-full">
                        <h2 className="text-base font-bold mb-2 text-[#0B4D81] w-full">Frequently Asked Questions(FAQs)</h2>
                        <p className=" mb-4 text-sm text-[#606060] leading-loose tracking-wide">
                            Have Questions?
                            Here you'll find answers to the most commonly asked and valued questions by our partners.
                            We’ve put together helpful information to guide you through our services, processes, and policies—so you can find what you need quickly and easily.
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-8 ">

                        <div className="flex flex-col lg:flex-row  gap-8">

                            <div className="flex flex-col gap-2 w-full lg:w-1/3">
                                {["General", "Products", "Product Maintenance"].map((cat, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategory(cat)}
                                        className={`flex items-center justify-between px-2 border py-2 text-sm text-[#606060] rounded-md ${active === cat ? 'bg-[#0B4D81] text-white' : 'bg-[#F1F1F1]'}`}
                                    >
                                        {cat}
                                        <FaChevronDown />
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col gap-2 w-full lg:w-1/3
                             items-center justify-center">
                                <button
                                    onClick={() => handleCategory("Customer Support")}
                                    className={`flex items-center justify-between px-2 border py-8 text-sm text-[#606060] rounded-md w-full ${active === "Customer Support" ? 'bg-[#0B4D81] text-white' : 'bg-[#F1F1F1]'}`}
                                >
                                    Customer Support
                                    <FaChevronDown />
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 w-full lg:w-1/3">
                                {["Payments", "Shipping and Orders", "Refund Policy"].map((cat, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleCategory(cat)}
                                        className={`flex items-center justify-between px-2 border py-2 text-sm text-[#606060] rounded-md ${active === cat ? 'bg-[#0B4D81] text-white' : 'bg-[#F1F1F1]'}`}
                                    >
                                        {cat}
                                        <FaChevronDown />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full">
                            {
                                category && (
                                    <div className="w-full flex flex-col gap-2">
                                        {
                                            filteredFaqs.map((faq, index) => (
                                                <div key={index}
                                                    className="bg-[#F9F9F9] p-4 text-sm"
                                                >
                                                    <button
                                                        className="flex justify-between text-sm lg:text-base w-full font-light"
                                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                                    >
                                                        {faq.question}
                                                        {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                                    </button>
                                                    {openIndex === index && <p className="text-[#606060] mt-4 font-light p-2">{faq.answer}</p>}
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>


                <div className=" w-full lg:w-1/2 mb-0 lg:mb-8 ">
                    <div className="flex items-start">
                        <img
                            src="/Images/faq3.png"
                            className="object-cover w-full h-full p-2"
                            loading="lazy"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
