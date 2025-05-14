import React, { useEffect, useState } from "react";
import BASE_URL from "../config/api";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([])
    const [selectedBlog, setSelectedBlog] = useState(null)

    const getBlogs = async () => {
        try {
            const res = await fetch(`${BASE_URL}/blog/getblog`);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            console.log("Fetched data:", data);
            setBlogs(data.data);
        } catch (error) {
            console.error("Failed to fetch blogs:", error);
        }
    };

    useEffect(() => {
        getBlogs()
    }, [
    ])

    console.log(blogs)

    return (
        <div className="p-4 lg:p-12 min-h-screen m-2 lg:m-4" >
            {
                selectedBlog ? (
                    <div className=" w-full lg:w-2/3  mx-auto rounded-lg  p-3 lg:p-6">
                        <button
                            onClick={() => setSelectedBlog(null)}
                            className="text-blue-500 mb-4 hover:underline"
                        >
                            &larr; Back to blogs
                        </button>
                        <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
                        <img
                            src={selectedBlog.images[0]}
                            alt={selectedBlog.title}
                            className="w-full rounded-md mb-4 object-contain"
                        />
                        {/* <p className="text-gray-700">{selectedBlog.content}</p> */}
                        <div
                            className="text-gray-700 prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {blogs.length > 0 && (
                            <div className="rounded-lg p-3 lg:p-4">
                                <img
                                    src={blogs[0].images[0]}
                                    alt={blogs[0].title}
                                    className="w-full rounded-md mb-4"
                                />
                                <h2
                                    onClick={() => setSelectedBlog(blogs[0])}
                                    className="text-xl font-bold text-gray-900 mb-2 cursor-pointer"
                                >
                                    {blogs[0].title}
                                </h2>
                            </div>
                        )}


                        <div className="grid gap-2">
                            {blogs.slice(1).map((blog) => (
                                <div
                                    key={blog._id}
                                    className="flex flex-col lg:flex-row rounded-lg p-4 items-start"
                                >
                                    <img
                                        src={blog.images[0]}
                                        alt={blog.title}
                                        className=" w-full lg:w-1/3 rounded-md mr-4 object-cover"
                                    />
                                    <div>
                                        <h3
                                            onClick={() => setSelectedBlog(blog)}
                                            className="text-lg font-bold text-gray-900 mb-2 cursor-pointer">
                                            {blog.title}
                                        </h3>
                                        <p className="text-gray-600">{blog.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
};

export default BlogPage;
