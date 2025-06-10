import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloatingButton = () => {
    return (
        <a
            href="https://wa.me/9779849779322?text=Hello%20Himalayas%20Craft%20Nepal!"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50"
        >
            <FaWhatsapp size={28} />
        </a>
    );
};

export default WhatsAppFloatingButton;
