import React, { useEffect, useState } from 'react'
import BASE_URL from '../../config/api'

const Blogtable = ({ onEdit, blogs }) => {

    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const getBlog = async () => {

            const res = await fetch(`${BASE_URL}/blog/getblog`, {
                method: 'GET'
            })
            const data = await res.json()
            console.log(data)
            setBlogData(data.data)
        }
        getBlog()
    }, [])

    const date = Date.now()
    console.log(date)
    console.log(blogData)


    const handleDelete = async (blog) => {
        const confirm = window.confirm('Are you sure you want to delete this FAQ?')
        if (!confirm) return

        const res = await fetch(`${BASE_URL}/blog/delete/${blog._id}`, {
            method: 'DELETE'
        })
        if (res.ok) {
            alert('Blog deleted')
            setRefresh(prev => !prev)
        }
    }

    return (
        <div>
            <table className="w-full border-collapse overflow-hidden text-sm">

                <thead >
                    <tr className="bg-[#F5F6FA] border-b px-2">
                        <th className="p-3 text-left">Blog title</th>
                        {/* <th className="p-3 text-left">Content</th> */}
                        <th className="p-3 text-left">Update</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => (

                        < tr key={index}
                            className="border-b px-2">
                            <td className="p-3">{blog.title}</td>
                            {/* <td className="p-3">{blog.content}</td> */}
                            <td className="p-3">{date}</td>
                            <td className="p-3 flex gap-2">
                                <button
                                    onClick={() => onEdit(blog)}
                                    className="text-blue-500">✏️</button>
                                <button
                                    onClick={() => handleDelete(blog)}
                                    className="text-[#D70000]">🗑️</button>
                            </td>

                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Blogtable
