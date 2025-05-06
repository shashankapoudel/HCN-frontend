import React, { useState } from 'react'
import Blogtable from '../../components/admin/BlogTable';
import BlogModal from '../../components/admin/BlogModal';

const BlogsAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <div className='text-[#323232] p-6 flex flex-col gap-10 '>

            <div className='flex justify-between items-center'>

                <div className='flex gap-2 items-center'>
                    <h1 className='font-semibold'>Blogs</h1>
                    <p className='text-[#03746E] text-sm bg-[#00B0A71A] p-1 '>3 blogs found</p>
                </div>

                <div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='bg-[#03746E] text-[#FFFFFF] py-1 px-4'>
                        + Add new Blog
                    </button>
                </div>

            </div>


            <div>
                <Blogtable />
            </div>


            {
                isModalOpen && (
                    <div>
                        <BlogModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)} />
                    </div>

                )
            }

        </div>
    )
}

export default BlogsAdmin;