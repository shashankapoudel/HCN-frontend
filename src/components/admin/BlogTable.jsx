import React from 'react'

const Blogtable = () => {


    const BlogData = [
        {
            title: "General",
            content: "Yes, all our singing bowls and accessories are handmade by skilled artisans."
        },

        {
            title: "General",
            content: "Yes, all our singing bowls and accessories are handmade by skilled artisans."
        },

        {
            title: "General",
            content: "Yes, all our singing bowls and accessories are handmade by skilled artisans."
        },

        {
            title: "General",
            content: "Yes, all our singing bowls and accessories are handmade by skilled artisans."
        },

        {
            title: "General",
            content: "Yes, all our singing bowls and accessories are handmade by skilled artisans."
        },




    ];

    const date = Date.now()
    console.log(date)


    return (
        <div>
            <table className="w-full border-collapse overflow-hidden text-sm">

                <thead >
                    <tr className="bg-[#F5F6FA] border-b px-2">
                        <th className="p-3 text-left">Blog title</th>
                        <th className="p-3 text-left">Content</th>
                        <th className="p-3 text-left">Update</th>
                        <th className="p-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {BlogData.map((blog, index) => (

                        < tr key={index}
                            className="border-b px-2">
                            <td className="p-3">{blog.title}</td>
                            <td className="p-3">{blog.content}</td>
                            <td className="p-3">{date}</td>
                            <td className="p-3 flex gap-2">
                                <button
                                    className="text-blue-500">✏️</button>
                                <button
                                    onClick={() => handleDelete(faq)}
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
