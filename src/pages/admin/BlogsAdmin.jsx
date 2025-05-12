import React, { useEffect, useState } from 'react'
import Blogtable from '../../components/admin/BlogTable';
import BlogModal from '../../components/admin/BlogModal';
import BASE_URL from '../../config/api';

const BlogsAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedBlog, setSelectedBlog] = useState("")
    const [blogs, setBlogs] = useState([])


    const getBlogs = async () => {
        const res = await fetch(`${BASE_URL}/blog/getblog`, {
            method: 'GET'
        })
        const data = await res.json()
        setBlogs(data.data)

    }

    useEffect(() => {
        getBlogs()
    }, [])
    const blogno = blogs.length;
    console.log(blogno)

    const handleEdit = (blog) => {
        setSelectedBlog(blog)
        setIsModalOpen(true)
    }

    const handleOpen = () => {
        setIsModalOpen(true)
        setSelectedBlog("")
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        getBlogs()
    }

    return (
        <div className='text-[#323232] p-6 flex flex-col gap-10 '>

            <div className='flex justify-between items-center'>

                <div className='flex gap-2 items-center'>
                    <h1 className='font-semibold'>Blogs</h1>
                    <p className='text-[#03746E] text-sm bg-[#00B0A71A] p-1 '>{blogno} blogs found</p>
                </div>

                <div>
                    <button
                        onClick={handleOpen}
                        className='bg-[#03746E] text-[#FFFFFF] py-1 px-4'>
                        + Add new Blog
                    </button>
                </div>

            </div>


            <div>
                <Blogtable
                    onEdit={handleEdit}
                    blogs={blogs}

                />
            </div>


            {
                isModalOpen && (
                    <div>
                        <BlogModal
                            isOpen={isModalOpen}
                            onClose={handleModalClose}
                            existingData={selectedBlog}
                        />
                    </div>

                )
            }

        </div>
    )
}

export default BlogsAdmin;