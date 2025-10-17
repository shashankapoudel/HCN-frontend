import React, { useEffect, useState } from 'react'
import BASE_URL from '../../config/api'

const Blogtable = ({ onEdit, blogs, setRefresh, refresh }) => {

    const [blogData, setBlogData] = useState([])
    const [activeBlogs, setActiveBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = activeBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.max(1, Math.ceil(activeBlogs.length / blogsPerPage));

    useEffect(() => {
        setBlogData(blogs)
        setActiveBlogs(blogs)
    }, [blogs])

    const date = Date.now()
    console.log(date)
    console.log(blogData)


    const handleDelete = async (blog) => {
        const confirm = window.confirm('Are you sure you want to delete this Blog?')
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
                        <th className="p-3 text-left">Update</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {currentBlogs.map((blog, index) => (

                        < tr key={index}
                            className="border-b px-2">
                            <td className="p-3">{blog.title}</td>
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
        </div >
    )
}

export default Blogtable
