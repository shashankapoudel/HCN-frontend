import { useEffect, useState } from "react";
import { getNames } from "country-list";

const ShippingAddress = ({
  nextStep,
  prevStep,
  formData,
  setFormData,
  total,
}) => {
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [countries, setCountries] = useState([]);
  const [stateProvince, setStateProvince] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const countryNames = getNames();
    setCountries(countryNames);
  }, []);

  const handleNext = () => {
    if (
      !country ||
      !zip ||
      !stateProvince ||
      !city ||
      !street ||
      !paymentMethod
    ) {
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);

      return;
    }

    setFormData({
      ...formData,
      shippingAddress: {
        country,
        zip,
        stateProvince,
        city,
        street,
        apartment,
        paymentMethod,
      },
    });

    nextStep();
  };

  return (
    <div className="flex flex-col p-4 mt-12 lg:mt-20">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-center">
          Shipping Address
        </h2>

        <p className="text-[#667085] text-center text-sm">
          Enter your shipping details below to ensure accurate and timely
          delivery
        </p>
      </div>

      <div className="space-y-6 text-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col w-full">
            <label className="text-[#344054] text-sm">
              Country *
            </label>

            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border p-2 w-full rounded text-sm"
            >
              <option value="">Select Country</option>

              {countries.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label className="text-[#344054] text-sm">
              ZIP/Postal Code *
            </label>

            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="border p-2 border-[#D0D5DD] rounded-md text-sm"
              placeholder="Enter your Zip/postal code"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[#344054] text-sm">
            State/Province *
          </label>

          <input
            type="text"
            value={stateProvince}
            onChange={(e) => setStateProvince(e.target.value)}
            className="border p-2 border-[#D0D5DD] rounded-md text-sm"
            placeholder="Select or enter state/province"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[#344054] text-sm">
            City *
          </label>

          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border p-2 border-[#D0D5DD] rounded-md text-sm"
            placeholder="Enter your city name"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[#344054] text-sm">
            Street Address *
          </label>

          <input
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="border p-2 border-[#D0D5DD] rounded-md text-sm"
            placeholder="Enter your Street address"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[#344054] text-sm">
            Apartment/Suite (Optional)
          </label>

          <input
            type="text"
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className="border p-2 border-[#D0D5DD] rounded-md text-sm"
            placeholder="Apartment, suite, unit, etc"
          />
        </div>

        <div>
          <label className="text-[#344054] text-sm">
            Payment Method
          </label>

          <div className="flex flex-wrap gap-4 mt-2">
            {["Debit/Credit Card", "PayPal", "Bank Transfer"].map(
              (method) => (
                <label
                  key={method}
                  className="flex items-center gap-2"
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) =>
                      setPaymentMethod(e.target.value)
                    }
                  />

                  <span className="text-sm">{method}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-white text-gray-500 px-6 py-2 rounded border"
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          className="bg-[#0B4D81] text-white px-6 py-2 rounded hover:bg-[#093a63]"
        >
          Payment : ${total}
        </button>
      </div>

      {showToast && (
        <div className="fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow-lg">
          ⚠️ Please fill all required fields to proceed.
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;