import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);


    // const toggleVisibility = () => {
    //     if (window.pageYOffset > 1600) {
    //         setIsVisible(true);
    //     } else {
    //         setIsVisible(false);
    //     }
    // };

    const toggleVisibility = () => {
        const threshold = 100;
        if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - threshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-7 right-24">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-4  font-extrabold text-xl bg-[#bb2821]  text-white rounded-full shadow-lg  transition-all duration-300"
                >
                    <FaChevronUp />

                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
