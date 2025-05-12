
import React, { useEffect, useState } from 'react';
import { useDropzone } from "react-dropzone";
import { FiUpload, FiTrash2 } from "react-icons/fi";
import BASE_URL from '../../config/api';

const BlogModal = ({ isOpen, onClose, existingData }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [images, setImages] = useState([]); // Contains File or URL strings
    console.log(existingData._id)

    useEffect(() => {
        if (existingData) {
            setTitle(existingData.title || "");
            setContent(existingData.content || "");
            setImages(existingData.images || []);
        } else {
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
        const formData = new FormData();
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
            setTitle("");
            setContent("");
            setImages([]);
            onClose();
        } catch (error) {
            console.error("Error uploading blog:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className='p-6 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-sm z-50'>
            <div className='bg-white p-6 rounded-lg w-1/2 shadow-lg flex flex-col text-[#323232] gap-2'>

                <h1 className='font-semibold text-lg'>Write new Blog</h1>

                <div className='mt-4'>
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
                    <textarea
                        rows={12}
                        className="w-full p-2 border rounded mb-4"
                        placeholder="Enter the content here"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="flex justify-start gap-2 mt-4">
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
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
