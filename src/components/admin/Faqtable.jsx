
import React, { useEffect, useState } from 'react'
import BASE_URL from '../../config/api'

const Faqtable = ({ faqno, setFaqno, onEdit, refresh, setRefresh }) => {
    const [faqData, setFaqData] = useState([])
    const [activeFaqs, setActiveFaqs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const faqsPerPage = 9
    const indexOfLastFaq = currentPage * faqsPerPage
    const indexOfFirstFaq = indexOfLastFaq - faqsPerPage
    const currentFaqs = activeFaqs.slice(indexOfFirstFaq, indexOfLastFaq)
    const totalPages = Math.max(1, Math.ceil(activeFaqs.length / faqsPerPage))

    useEffect(() => {
        const getFaq = async () => {
            try {
                const res = await fetch(`${BASE_URL}/faq/getfaq`, {
                    method: 'GET',
                })
                const data = await res.json()
                setFaqData(data.data)
                setActiveFaqs(data.data)
            } catch (error) {
                console.error('Failed to fetch FAQs:', error)
            }
        }
        getFaq()
    }, [refresh])

    useEffect(() => {
        setFaqno(faqData.length)
    }, [faqData, setFaqno])

    const handleDelete = async (faq) => {
        const confirm = window.confirm('Are you sure you want to delete this FAQ?')
        if (!confirm) return

        try {
            const res = await fetch(`${BASE_URL}/faq/deletefaq/${faq._id}`, {
                method: 'DELETE',
            })
            if (res.ok) {
                alert('FAQ deleted')
                setRefresh((prev) => !prev)
            } else {
                alert('Failed to delete FAQ')
            }
        } catch (error) {
            console.error('Delete failed:', error)
            alert('An error occurred while deleting.')
        }
    }

    return (
        <div>
            <table className="w-full border-collapse overflow-hidden text-sm">
                <thead>
                    <tr className="bg-[#F5F6FA] border-b px-2">
                        <th className="p-3 text-left">S.N</th>
                        <th className="p-3 text-left">Category</th>
                        <th className="p-3 text-left">Question</th>
                        <th className="p-3 text-left">Answer</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentFaqs.map((faq, index) => (
                        <tr key={index} className="border-b px-2">
                            {/* <td className="p-3">{index + 1}</td> */}
                            <td className="p-3">{indexOfFirstFaq + index + 1}</td>

                            <td className="p-3">{faq.category}</td>
                            <td className="p-3">{faq.question}</td>
                            <td className="p-3">{faq.answer}</td>
                            <td className="p-3 flex gap-2">
                                <button
                                    className="text-blue-500"
                                    onClick={() => onEdit(faq)}
                                >
                                    ✏️
                                </button>
                                <button
                                    onClick={() => handleDelete(faq)}
                                    className="text-red-500"
                                >
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center mt-6 space-x-2 flex-wrap">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                >
                    Prev
                </button>

                {[...Array(totalPages).keys()].map((num) => {
                    const page = num + 1
                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 border rounded ${page === currentPage
                                ? 'bg-[#bb2821] text-white'
                                : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                        >
                            {page}
                        </button>
                    )
                })}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-white text-[#333] hover:bg-[#bb2821] hover:text-white'}`}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Faqtable
