import React, { useEffect, useState } from 'react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useLocation } from 'react-router-dom';

const Gallery = () => {

    const imageList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg']

    const [activeImages, setActiveImages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const ImagesPerPage = 14;
    const [isImageOpen, setImageOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")


    // const location = useLocation();

    // useEffect(() => {
    //     setImageOpen(false);
    //     setSelectedImage("");
    // }, [location.pathname]);


    useEffect(() => {
        setActiveImages(imageList)
    }, [imageList])

    const indexOfLastImg = currentPage * ImagesPerPage;

    const indexOdFirstImg = indexOfLastImg - ImagesPerPage
    const currentImages = activeImages.slice(indexOdFirstImg, indexOfLastImg)
    const totalPages = Math.max(1, Math.ceil(activeImages.length / ImagesPerPage));


    const handleImageClick = (image, index) => {
        setSelectedImage({ image: `/Images/Gallery/${image}`, index });
        setImageOpen(true)

    }

    const previous = () => {
        const newIndex = (selectedImage.index - 1 + activeImages.length) % activeImages.length;
        setSelectedImage({ image: `/Images/Gallery/${activeImages[newIndex]}`, index: newIndex });
    };

    const next = () => {
        const newIndex = (selectedImage.index + 1) % activeImages.length;
        setSelectedImage({ image: `/Images/Gallery/${activeImages[newIndex]}`, index: newIndex });
    };


    return (
        <div className="p-8 min-h-screen">

            <div className='columns-3 md:columns-3 lg:columns-4 gap-1'>

                {currentImages.map((img, index) => (
                    <img
                        key={index}
                        src={`/Images/Gallery/${img}`}
                        alt={`Gallery ${index}`}
                        className="w-full h-auto object-cover rounded-lg p-1"
                        onClick={() => handleImageClick(img, index)}
                    />
                ))}
            </div>


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
                    const page = num + 1;
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
                    );
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


            {
                isImageOpen && (
                    <div className='flex fixed inset-0 items-center justify-between p-2 bg-black bg-opacity-65 pt-0  lg:pt-36'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                previous();
                            }}
                            className='text-white bg-black bg-opacity-50 p-0 lg:p-2 rounded-full hover:bg-opacity-70
                         transition'
                        >
                            <GrFormPrevious className='text-2xl' />
                        </button>

                        <div
                            className="flex items-center justify-center   bg-opacity-70">

                            <div className="relative max-w-2xl p-4">
                                <img
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                    src={selectedImage.image}

                                />

                                <button
                                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-xl hover:bg-opacity-70 transition text-4xl w-16"
                                    onClick={() => {
                                        setImageOpen(false);
                                        setTimeout(() => {
                                            setSelectedImage("");
                                        }, 200);
                                    }}

                                >
                                    &times;
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                next();
                            }}
                            className='text-white bg-black bg-opacity-75 p-0 lg:p-2 rounded-full hover:bg-opacity-70 transition text-3xl font-extrabold'
                        >
                            <GrFormNext className='text-2xl' />
                        </button>

                    </div>
                )
            }

        </div>
    )
}

export default Gallery;
