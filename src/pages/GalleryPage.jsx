import React, { useEffect, useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Gallery = () => {
  const imageList = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
  ];

  const [activeImages] = useState(imageList);
  const [currentPage, setCurrentPage] = useState(1);

  const ImagesPerPage = 14;

  const [isImageOpen, setImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const indexOfLastImg = currentPage * ImagesPerPage;
  const indexOfFirstImg = indexOfLastImg - ImagesPerPage;

  const currentImages = activeImages.slice(indexOfFirstImg, indexOfLastImg);
  const totalPages = Math.max(
    1,
    Math.ceil(activeImages.length / ImagesPerPage),
  );

  const handleImageClick = (image, index) => {
    setSelectedImage({
      image: `/Images/Gallery/${image}`,
      index,
    });
    setImageOpen(true);
  };

  const closeModal = () => {
    setImageOpen(false);
    setTimeout(() => setSelectedImage(null), 150);
  };

  const previous = () => {
    const newIndex =
      (selectedImage.index - 1 + activeImages.length) % activeImages.length;

    setSelectedImage({
      image: `/Images/Gallery/${activeImages[newIndex]}`,
      index: newIndex,
    });
  };

  const next = () => {
    const newIndex = (selectedImage.index + 1) % activeImages.length;

    setSelectedImage({
      image: `/Images/Gallery/${activeImages[newIndex]}`,
      index: newIndex,
    });
  };

  return (
    <div className="p-4 lg:p-8 min-h-screen">
      {/* IMAGE GRID */}
      <div className="columns-1 md:columns-3 lg:columns-4 gap-1">
        {currentImages.map((img, index) => (
          <img
            key={index}
            src={`/Images/Gallery/${img}`}
            alt={`Gallery ${index}`}
            className="w-full h-auto object-cover rounded-lg p-1 cursor-pointer"
            onClick={() => handleImageClick(img, index)}
          />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-6 space-x-2 flex-wrap">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white hover:bg-[#bb2821] hover:text-white"
          }`}
        >
          Prev
        </button>

        {[...Array(totalPages).keys()].map((num) => {
          const page = num + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 border rounded ${
                page === currentPage
                  ? "bg-[#bb2821] text-white"
                  : "bg-white hover:bg-[#bb2821] hover:text-white"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white hover:bg-[#bb2821] hover:text-white"
          }`}
        >
          Next
        </button>
      </div>

      {/* MODAL */}
      {isImageOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-between bg-black bg-opacity-80"
          onClick={closeModal}
        >
          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              previous();
            }}
            className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
          >
            <GrFormPrevious className="text-3xl" />
          </button>

          {/* IMAGE */}
          <div
            className="flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-w-3xl p-4">
              <img
                className="w-full max-h-[80vh] object-contain rounded-lg"
                src={selectedImage.image}
                alt="Preview"
              />

              {/* CLOSE */}
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-60 p-2 rounded-lg text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70"
          >
            <GrFormNext className="text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
