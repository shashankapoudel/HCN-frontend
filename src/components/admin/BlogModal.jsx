import React, { useState } from 'react'

const BlogModal = ({ isOpen, onClose }) => {

    const [title, setTitle] = useState(null)
    const [content, setContent] = useState(null)


    if (!isOpen) return null;

    return (
        <div className='p-6 fixed inset-0 flex items-center justify-center bg-black  bg-opacity-50 text-sm'>
            <div className='bg-white p-6 rounded-lg w-1/2  shadow-lg flex flex-col text-[#323232] gap-2'>

                <h1 className='font-semibold text-lg'>Write new Blog</h1>


                <div className='mt-4'>

                    <div>
                        <label>Blog Title</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Enter the question here"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Content</label>
                        <textarea
                            rows={12}
                            type="text"
                            className="w-full p-2 border rounded mb-4"
                            placeholder="Enter the answer here"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
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
                        // onClick={handleSubmit}
                        className="px-4 py-2 bg-[#02847D] text-[#FFFFFF] rounded w-28">
                        Save
                    </button>
                </div>

            </div>

        </div>
    )
}

export default BlogModal
