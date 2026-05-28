// CheckoutForm.jsx

import React, { useState } from "react";
import { getNames } from "country-list";

const CheckoutForm = ({ nextStep, formData, setFormData }) => {
  const countries = getNames();

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    street: "",
    zip: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = () => {
    setFormData({
      ...formData,
      personalInfo: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
      },

      shippingAddress: {
        country: data.country,
        state: data.state,
        city: data.city,
        street: data.street,
        zip: data.zip,
      },
    });

    nextStep();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-8">
      <h2 className="text-2xl font-bold mb-8">Customer Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <select
          name="country"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        >
          <option>Select Country</option>

          {countries.map((country) => (
            <option key={country}>{country}</option>
          ))}
        </select>

        <input
          type="text"
          name="state"
          placeholder="State / Province"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />

        <input
          type="text"
          name="street"
          placeholder="Street Address"
          onChange={handleChange}
          className="border p-3 rounded-xl md:col-span-2"
        />

        <input
          type="text"
          name="zip"
          placeholder="ZIP / Postal Code"
          onChange={handleChange}
          className="border p-3 rounded-xl"
        />
      </div>

      <button
        onClick={handleContinue}
        className="mt-8 bg-[#0B4D81] text-white px-8 py-3 rounded-xl hover:bg-[#093a63]"
      >
        Continue
      </button>
    </div>
  );
};

export default CheckoutForm;
