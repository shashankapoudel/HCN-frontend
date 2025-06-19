
import React, { useState, useEffect } from 'react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const GalleryCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const navigate = useNavigate();

    const images = [
        '/Images/OurStory1.jpg',
        '/Images/OurStory2.jpg',
        '/Images/OurStory3.jpg',
        '/Images/OurStory4.jpg',
        '/Images/team1.jpg',
    ];

    const imagesPerPage = 3;

    // useEffect(() => {
    //     let interval;
    //     if (!isHovered) {
    //         interval = setInterval(() => {
    //             setCurrentIndex((prev) => (prev >= images.length - imagesPerPage ? 0 : prev + 1));
    //         }, 5000);
    //     }
    //     return () => clearInterval(interval);
    // }, [isHovered, imagesPerPage, images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= images.length - imagesPerPage ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex <= 0 ? images.length - imagesPerPage : prevIndex - 1
        );
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage('');
    };

    const handleImageClick = (index) => {
        const middleIndex = Math.floor(imagesPerPage / 2);
        const newCurrentIndex = index - middleIndex;

        if (newCurrentIndex < 0) {
            setCurrentIndex(0);
        } else if (newCurrentIndex > images.length - imagesPerPage) {
            setCurrentIndex(images.length - imagesPerPage);
        } else {
            setCurrentIndex(newCurrentIndex);
        }
        if (index === currentIndex + middleIndex) {
            openModal(images[index]);
        }
    };

    return (
        <div className='p-4 relative'>
            <h1 className='text-center text-3xl font-semibold text-[#111111]'>Gallery</h1>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-4 bg-[#FFFFFF] p-2 lg:p-4 border rounded-xl'>

                <button
                    className='text-white bg-[#bb2821] bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
                    onClick={prevSlide}
                >
                    <GrFormPrevious />
                </button>

                <div className='overflow-hidden w-full'>

                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(-${currentIndex * (100 / imagesPerPage)}%)` }}
                    >
                        {images.map((image, idx) => (
                            <div
                                key={idx}
                                className={`w-full flex-shrink-0 transition-all duration-300 ease-in-out ${idx === currentIndex + 1 ? 'scale-125 z-10' : 'scale-90 blur-sm'
                                    }`}
                                style={{ width: `${100 / imagesPerPage}%` }}
                            >
                                <img
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    onClick={() => handleImageClick(idx)}
                                    className='object-cover rounded-md shadow-lg w-full hover:scale-105 cursor-pointer lg:h-96 h-40 md:h-64'
                                    src={image}
                                    alt={`Gallery image ${idx + 1}`}
                                    loading='lazy'
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className='text-white bg-[#bb2821] bg-opacity-50 p-0 lg:p-1 rounded-full hover:bg-opacity-70 transition'
                    onClick={nextSlide}
                >
                    <GrFormNext />
                </button>
            </div>
            <div className='flex items-end justify-end'>
                <button
                    onClick={() => navigate('/gallery')}
                    className='underline text-[#bb2821]'

                >
                    See more
                </button>
            </div>

            {isModalOpen && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
                    onClick={closeModal}
                >
                    <div className='relative max-w-4xl w-full p-4'>
                        <img
                            className='w-full h-auto max-h-[80vh] object-contain rounded-lg'
                            src={selectedImage}
                            alt='Enlarged gallery image'
                            loading='lazy'
                        />
                        <button
                            className='absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition'
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default GalleryCard;