// ReviewPayment.jsx

import { FaTrashAlt, FaLock } from "react-icons/fa";

const ReviewPayment = ({ nextStep, prevStep, formData, setFormData }) => {
  const items = formData.items || [];

  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = 1250;
  const tax = 1250;

  const total = subtotal + shipping + tax;

  const handleQuantity = (id, type) => {
    const updatedItems = items.map((item) => {
      if (item._id === id) {
        let quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;

        if (quantity < 1) quantity = 1;

        return {
          ...item,
          quantity,
        };
      }

      return item;
    });

    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item._id !== id);

    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  /**
   * PAYMENT FUNCTION
   */
  const handlePlaceOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/payment/create", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          amount: total,

          currency: "USD",

          customerName: formData.fullName,

          customerEmail: formData.email,

          customerPhone: formData.phone,

          shippingAddress: {
            address1: formData.address,
            city: formData.city,
            countryCode: "NP",
            postalCode: formData.postalCode,
          },

          items: items,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        // Redirect customer to payment page
        window.location.href = data.paymentURL;
      } else {
        alert(data.message || "Payment Failed");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
        <h2 className="text-2xl font-bold mb-6">Review Your Order</h2>

        <div className="space-y-5">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row justify-between gap-4 border rounded-2xl p-4"
            >
              <div className="flex gap-4">
                <img
                  src={item.images[0]}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover border"
                />

                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>

                  <p className="text-[#667085]">{item.category}</p>

                  <p className="font-medium mt-1">${item.price}</p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => handleQuantity(item._id, "decrease")}
                      className="w-8 h-8 border rounded-lg"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleQuantity(item._id, "increase")}
                      className="w-8 h-8 border rounded-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col justify-between items-end">
                <p className="font-bold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUMMARY */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 h-fit sticky top-24">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>

            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>

            <span>${shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>

            <span>${tax.toFixed(2)}</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>

            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-[#ECFDF3] text-[#027A48] rounded-xl p-3 flex items-center gap-2 mt-6">
          <FaLock />

          <span className="text-sm">Secure Checkout</span>
        </div>

        <div className="flex flex-col gap-3 mt-8">
          <button
            onClick={handlePlaceOrder}
            className="bg-[#0B4D81] hover:bg-[#093a63] text-white py-3 rounded-xl"
          >
            Place Order
          </button>

          <button onClick={prevStep} className="border py-3 rounded-xl">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPayment;
