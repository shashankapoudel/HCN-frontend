import React, { useEffect, useState } from "react";
import BASE_URL from "../config/api"; // Adjust path if needed

const OfferPopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${BASE_URL}/newsletter/getsubscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (res.ok) {
        setEmail("");
        setError("");
        setIsOpen(false); // Close popup after successful subscription
      } else {
        setError(result.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    }
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-xl font-bold text-gray-600 hover:text-red-500 z-10"
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="/Images/OurStory5.jpg"
            alt="Offer"
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
          <div className="text-center">
            <p className="text-lg font-bold">
              <span className="text-2xl">Get </span>
              <br />
              <strong className="text-2xl md:text-4xl text-[#a7594d]">
                Your First Healing Instruments
              </strong>
              <br />
              In USD $200
            </p>

            <p className="font-semibold text-sm md:text-base mt-5">
              Use code:
              <span className="text-xl md:text-2xl text-[#a7594d] font-bold ml-2">
                HIMALAYA2025
              </span>
              <br />
              at checkout
            </p>
          </div>

          <div className="mt-8">
            <p className="text-center md:text-left text-gray-700 text-sm mb-3">
              Subscribe to our newsletter
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#bb2821]"
              />

              <button
                onClick={handleSubmit}
                className="bg-[#bb2821] text-white py-3 rounded-md hover:bg-[#093a63] transition-colors duration-300"
              >
                Subscribe Now
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopUp;
