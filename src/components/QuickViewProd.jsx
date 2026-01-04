import React, { useState } from "react";
import QuickViewModal from "./QuickViewModal";

const QuickViewProd = ({ product }) => {
  const [quickviewproduct, setQuickviewproduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleQuickViewClick = (e) => {
    e.stopPropagation(); // 🔥 prevent parent navigation
    setQuickviewproduct(product);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setQuickviewproduct(null);
  };

  return (
    <>
      {/* Eye Button */}
      <div className="absolute top-5 right-2 flex flex-col space-y-4 
                      opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button
          onClick={handleQuickViewClick}
          className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          👁️
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <QuickViewModal
          isModalOpen={isModalOpen}
          onClose={handleClose}
          quickviewproduct={quickviewproduct}
        />
      )}
    </>
  );
};

export default QuickViewProd;
