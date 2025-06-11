
// import React, { useEffect, useState } from "react";
// import BASE_URL from "../config/api";

// const BlogPage = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [selectedBlog, setSelectedBlog] = useState(null);
//     const [active, setActive] = useState("All")
//     const [activeBlogs, setActiveBlogs] = useState([])
//     const categories = ['All', 'History', 'Product Guide', 'Product Benefits', 'Choosing Products', 'Behind the process', 'Ideas', 'Spiritual Guides']

//     const getBlogs = async () => {
//         try {
//             const res = await fetch(`${BASE_URL}/blog/getblog`);
//             if (!res.ok) {
//                 throw new Error(`HTTP error! status: ${res.status}`);
//             }
//             const data = await res.json();
//             console.log("Fetched data:", data);
//             setBlogs(data.data);
//         } catch (error) {
//             console.error("Failed to fetch blogs:", error);
//         }
//     };

//     useEffect(() => {
//         getBlogs();
//     }, []);


//     useEffect(() => {

//         if (active === 'All') {
//             setActiveBlogs(blogs)
//         } else {

//             const blogToShow = blogs.filter((blog) => blog.category === active)
//             setActiveBlogs(blogToShow)
//         }

//     }, [active, blogs])

//     return (
//         <div className="p-4 lg:p-8 min-h-screen">

//             <div className="grid grid-cols-2 lg:flex space-x-4 space-y-2 md:space-y-0 lg:space-x-6 w-full justify-between p-2">
//                 {
//                     categories.map((cat) => (
//                         <button
//                             onClick={() => setActive(cat)}
//                             className={`pb-1 relative font-semibold capitalize text-sm md:text-base transition ${active === cat
//                                 ? 'text-[#bb2821]'
//                                 : 'text-[#999]'
//                                 }`}
//                         >
//                             {cat}
//                             {active === cat && (
//                                 <div className='absolute bottom-0 left-0 w-full h-[3px] bg-[#bb2821] rounded-full' />
//                             )}
//                         </button>
//                     ))
//                 }
//             </div>

//             {selectedBlog ? (
//                 <div className="w-full lg:w-2/3 mx-auto rounded-lg p-3 lg:p-6 ">
//                     <button
//                         onClick={() => setSelectedBlog(null)}
//                         className="text-[#bb2821] mb-4 hover:underline"
//                     >
//                         &larr; Back to blogs
//                     </button>
//                     <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
//                     <img
//                         src={selectedBlog.images[0]}
//                         alt={selectedBlog.title}
//                         className="w-full rounded-md mb-4 object-contain"
//                     />
//                     <div
//                         className="text-gray-700 prose max-w-none"
//                         dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
//                     />
//                 </div>
//             ) : (
//                 <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     {activeBlogs.length > 0 && (
//                         <div
//                             // onClick={() => setSelectedBlog(blogs[0])}
//                             className="rounded-lg p-3 lg:p-4 cursor-pointer">
//                             <img
//                                 src={activeBlogs[0].images[0]}
//                                 alt={activeBlogs[0].title}
//                                 className="w-full h-80 rounded-md mb-4"
//                             />
//                             <h2
//                                 className="text-xl font-bold text-gray-900 mb-2 cursor-pointer"
//                             >
//                                 {activeBlogs[0].title}
//                             </h2>
//                             <p className="text-gray-600">
//                                 {activeBlogs[0].content
//                                     .replace(/<[^>]+>/g, "")
//                                     .substring(0, 200)}...
//                             </p>
//                             <a
//                                 onClick={() => setSelectedBlog(activeBlogs[0])}
//                                 className="underline text-[#bb2821]">Read more</a>
//                         </div>
//                     )}

//                     <div className="grid">
//                         {activeBlogs.slice(1, 4).map((blog) => {
//                             const textContent = blog.content.replace(/<[^>]+>/g, "");
//                             const snippet =
//                                 textContent.length > 200
//                                     ? textContent.substring(0, 200) + "..."
//                                     : textContent;

//                             return (
//                                 <div
//                                     key={blog._id}
//                                     className="flex flex-col lg:flex-row rounded-lg p-3 items-start cursor-pointer"
//                                 >
//                                     <img
//                                         src={blog.images[0]}
//                                         alt={blog.title}
//                                         className="w-full lg:w-36 rounded-md mr-4 object-cover"
//                                     />
//                                     <div>
//                                         <h3
//                                             className="text-lg font-bold text-gray-900 mb-2 cursor-pointer"
//                                         >
//                                             {blog.title}
//                                         </h3>
//                                         <p className="text-gray-600 text-sm">{snippet}</p>
//                                         <a
//                                             onClick={() => setSelectedBlog(blog)}
//                                             className="underline text-[#bb2821]">Read more</a>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     <div className="grid w-full">
//                         {activeBlogs.slice(4).map((blog) => {
//                             const textContent = blog.content.replace(/<[^>]+>/g, "");
//                             const snippet =
//                                 textContent.length > 200
//                                     ? textContent.substring(0, 200) + "..."
//                                     : textContent;

//                             return (
//                                 <div
//                                     key={blog._id}
//                                     className="flex flex-col lg:flex-row rounded-lg p-3 items-start cursor-pointer"
//                                 >
//                                     <img
//                                         src={blog.images[0]}
//                                         alt={blog.title}
//                                         className="w-full lg:w-1/3 rounded-md mr-4 object-cover"
//                                     />
//                                     <div>
//                                         <h3
//                                             className="text-lg font-bold text-gray-900 mb-2 cursor-pointer"
//                                         >
//                                             {blog.title}
//                                         </h3>
//                                         <p className="text-gray-600">{snippet}</p>
//                                         <a
//                                             onClick={() => setSelectedBlog(blog)}
//                                             className="underline text-[#0B4D81]">Read more</a>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>


//                 </div>
//             )}
//         </div>
//     );
// };

// export default BlogPage;



import React, { useEffect, useState } from "react";
import BASE_URL from "../config/api";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [active, setActive] = useState("All")
    const [activeBlogs, setActiveBlogs] = useState([])
    const categories = ['All', 'History', 'Product Guide', 'Product Benefits', 'Choosing Products', 'Behind the process', 'Ideas', 'Spiritual Guides']

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
        getBlogs();
    }, []);


    useEffect(() => {

        if (active === 'All') {
            setActiveBlogs(blogs)
        } else {

            const blogToShow = blogs.filter((blog) => blog.category === active)
            setActiveBlogs(blogToShow)
        }

    }, [active, blogs])

    return (
        <div className="p-4 lg:p-8 min-h-screen">
            <h1 className="text-center text-3xl font-bold text-[#111111] ">Our Blogs</h1>

            <div className="grid grid-cols-2 lg:flex space-x-4 space-y-2 md:space-y-0 lg:space-x-6 w-full justify-between p-2 mt-3">
                {
                    categories.map((cat) => (
                        <button
                            onClick={() => setActive(cat)}
                            className={`pb-1 relative font-semibold capitalize text-sm md:text-base transition ${active === cat
                                ? 'text-[#bb2821]'
                                : 'text-[#999]'
                                }`}
                        >
                            {cat}
                            {active === cat && (
                                <div className='absolute bottom-0 left-0 w-full h-[3px] bg-[#bb2821] rounded-full' />
                            )}
                        </button>
                    ))
                }
            </div>

            {selectedBlog ? (
                <div className="w-full lg:w-2/3 mx-auto rounded-lg p-3 lg:p-6 ">
                    <button
                        onClick={() => setSelectedBlog(null)}
                        className="text-[#bb2821] mb-4 hover:underline"
                    >
                        &larr; Back to blogs
                    </button>
                    <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
                    <img
                        src={selectedBlog.images[0]}
                        alt={selectedBlog.title}
                        className="w-full rounded-md mb-4 object-contain"
                    />
                    <div
                        className="text-gray-700 prose max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
                    />
                </div>
            ) : (

                <div className="grid grid-cols-3 gap-4 p-4">
                    {activeBlogs.map((blog) => {
                        const textContent = blog.content.replace(/<[^>]+>/g, "");
                        const snippet =
                            textContent.length > 160
                                ? textContent.substring(0, 160) + "..."
                                : textContent;

                        return (
                            <div
                                key={blog._id}
                                onClick={() => setSelectedBlog(blog)}
                                className="flex flex-col rounded-lg p-4 items-start cursor-pointer"
                            >
                                <img
                                    src={blog.images[0]}
                                    alt={blog.title}
                                    className="w-full  rounded-md mr-4 object-cover"
                                />
                                <div>
                                    <h3
                                        className="text-lg font-bold text-gray-900 mb-2 cursor-pointer"
                                    >
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{snippet}</p>
                                    <a
                                        // onClick={() => setSelectedBlog(blog)}
                                        className="underline text-[#bb2821]">Read more</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default BlogPage;






