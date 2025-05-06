import React, { useEffect, useState } from 'react'
import BASE_URL from '../../config/api'

const Faqtable = ({ faqno, setFaqno, onEdit, refresh, setRefresh }) => {

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

    setFaqno(faqData.length)
    console.log(faqno)

    const handleDelete = async (faq) => {
        const confirm = window.confirm('Are you sure you want to delete this FAQ?')
        if (!confirm) return

        const res = await fetch(`${BASE_URL}/faq/deletefaq/${faq._id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            alert('FAQ deleted')
            setRefresh(prev => !prev)
        }
    }

    return (
        <div>
            <table className="w-full border-collapse overflow-hidden text-sm">

                <thead>
                    <tr className="bg-[#F5F6FA] border-b px-2">
                        <th className="p-3 text-left">Category</th>
                        <th className="p-3 text-left">Question</th>
                        <th className="p-3 text-left">Answer</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {faqData.map((faq, index) => (

                        < tr key={index}
                            className="border-b px-2">
                            <td className="p-3">{faq.category}</td>
                            <td className="p-3">{faq.question}</td>
                            <td className="p-3">{faq.answer}</td>
                            {/* <td className="p-3">{date}</td> */}
                            <td className="p-3 flex gap-2">
                                <button
                                    className="text-blue-500"
                                    onClick={() => onEdit(faq)}
                                >✏️</button>
                                <button
                                    onClick={() => handleDelete(faq)}
                                    className="text-red-500">🗑️</button>
                            </td>

                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Faqtable
