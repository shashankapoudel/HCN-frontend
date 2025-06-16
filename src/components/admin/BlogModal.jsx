
import React, { useEffect, useState } from 'react';
import { useDropzone } from "react-dropzone";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import BASE_URL from '../../config/api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const BlogModal = ({ isOpen, onClose, existingData }) => {
    console.log(existingData)

    const categories = ['Select a category', 'History', 'Product Guide', 'Product Benefits', 'Choosing Products', 'Behind the process', 'Ideas', 'Spiritual Guides']

    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("")
    const [images, setImages] = useState([]);
    console.log(existingData._id)

    useEffect(() => {
        if (existingData) {
            setCategory(existingData.category || "")
            setTitle(existingData.title || "");
            setContent(existingData.content || "");
            setImages(existingData.images || []);
        } else {
            setCategory("")
            setTitle("");
            setContent("");
            setImages([]);
        }
    }, [existingData]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/*",
        multiple: true,
        onDrop: (acceptedFiles) => {
            setImages((prev) => [...prev, ...acceptedFiles]);
        },
    });

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData();
        formData.append("category", category);
        formData.append("title", title);
        formData.append("content", content);

        images.forEach((image) => {
            if (image instanceof File) {
                formData.append("images", image);
            } else if (typeof image === "string") {
                formData.append("existingImages", image);
            }
        });

        try {
            const res = await fetch(!existingData ? `${BASE_URL}/blog/sendblog` : `${BASE_URL}/blog/updateblog/${existingData._id}`, {
                method: 'POST',
                body: formData,
            });
            const responseData = await res.json();
            console.log(responseData);
            setCategory("")
            setTitle("");
            setContent("");
            setImages([]);
            onClose();
        } catch (error) {
            console.error("Error uploading blog:", error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className='p-6 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-sm'>
            <div className='bg-white p-6 rounded-lg w-1/2 shadow-lg flex flex-col text-[#323232] gap-2'>

                <h1 className='font-semibold text-lg'>Write new Blog</h1>

                <div className='mt-4'>
                    <label>Blog Categories</label>
                    <select
                        type="text"
                        className="w-full p-2 border rounded mb-4"
                        placeholder="Enter the title"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat, index) => (

                            <option
                                value={cat}
                                key={index}>
                                {cat}
                            </option>
                        ))
                        }
                    </select>


                    <label>Blog Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded mb-4"
                        placeholder="Enter the title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <label className="block font-semibold mb-2">Blog Images <span className="text-red-500">*</span> (Recommendation 1:1)</label>
                    <div {...getRootProps()} className="border-dashed border-2 border-gray-300 p-6 rounded-lg text-center cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <input {...getInputProps()} />
                        <FiUpload className="text-gray-400 mx-auto mb-2" size={24} />
                        <p className="text-gray-600">Drag or click to upload files</p>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                        {images.map((image, index) => {
                            const src = image instanceof File ? URL.createObjectURL(image) : image;
                            return (
                                <div key={index} className="relative">
                                    <img src={src} alt="Preview" className="w-full h-28 object-cover rounded-lg" />
                                    <button onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-white p-1 rounded-full shadow-md">
                                        <FiTrash2 className="text-red-500" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <label>Content</label>
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={setContent}
                        className="mb-4"
                        style={{ height: "180px" }}
                    />
                </div>

                <div className="flex justify-start gap-2 mt-8">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-white text-gray-500 rounded w-28 border border-gray-300">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-[#02847D] text-white rounded w-28">
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                            </svg>
                        ) : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;

