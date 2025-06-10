import React, { useState, useEffect } from "react";

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
        const threshold = 100; // px before bottom where visibility triggers
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
        <div className="fixed bottom-20 left-2">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="p-4 bg-transparent font-extrabold text-5xl bg-blue-500 text-[#a7594d] rounded-full shadow-lg  transition-all duration-300"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;