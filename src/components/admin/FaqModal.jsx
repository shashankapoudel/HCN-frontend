import React, { useEffect, useState } from 'react'
import BASE_URL from '../../config/api'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FaqModal = ({ isOpen, onClose, existingData }) => {
    const [category, setCategory] = useState(null)
    const [question, setQuestion] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false);

    const faqcategory = ["Select category", "General", "Products", "Payments", "Shipping and Orders", 'Product Maintenance', 'Refund Policy', 'Customer Support']

    useEffect(() => {

        if (existingData) {
            setCategory(existingData.category)
            setQuestion(existingData.question)
            setAnswer(existingData.answer)
        } else {
            setCategory('')
            setQuestion('')
            setAnswer('')
        }

    }, [existingData])

    const handleSubmit = async () => {
        setIsLoading(true);
        const res = await fetch(existingData
            ? `${BASE_URL}/faq/updatefaq/${existingData._id}`
            : `${BASE_URL}/faq/storefaq`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category, question, answer }),
        })

        const data = await res.json();
        if (res.ok) {
            setAnswer("")
            setCategory("")
            setQuestion("")
            setIsLoading(false);
        } else {
            setError(result.message || 'Could not save Faq');

        }

    }

    if (!isOpen) return null;

    return (
        <div className='p-6 fixed inset-0 flex items-center justify-center bg-black  bg-opacity-50 text-sm'>
            <div className='bg-white p-6 rounded-lg w-1/2  shadow-lg flex flex-col text-[#323232] gap-2'>

                <h1 className='font-semibold text-lg'>Add new FAQs</h1>


                <div className='mt-4'>

                    <div>
                        <label>Select Categories</label>
                        <select
                            className="w-full p-2 border rounded mb-4"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {
                                faqcategory.map((category, index) => (
                                    <option key={index}>{category}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label>Question</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Enter the question here"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Answer</label>
                        <ReactQuill
                            theme="snow"
                            value={answer}
                            onChange={setAnswer}
                            className="mb-4"
                            style={{ height: "180px" }}
                        />
                        {/* <textarea
                            rows={8}
                            type="text"
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Enter the answer here"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        /> */}
                    </div>

                </div>

                <div className="flex justify-start gap-2 mt-4">
                    <button type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-[#FFFFFF] text-[#D9D9D9] rounded w-28 border border-[#D9D9D9]">
                        Cancel
                    </button>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-[#02847D] text-white rounded w-28">
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        ) : "Save"}
                    </button>

                </div>

            </div>

        </div>
    )
}

export default FaqModal;
