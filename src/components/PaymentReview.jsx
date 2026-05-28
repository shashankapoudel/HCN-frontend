import { FaTrashAlt, FaEdit, FaLock } from "react-icons/fa";

const PaymentReview = ({ nextStep, prevStep, formData, setFormData }) => {
  const items = formData?.items || [];

  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item._id !== id);

    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const handleQuantityChange = (id, type) => {
    const updatedItems = items.map((item) => {
      if (item._id === id) {
        let updatedQuantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;

        if (updatedQuantity < 1) updatedQuantity = 1;

        return {
          ...item,
          quantity: updatedQuantity,
        };
      }

      return item;
    });

    setFormData({
      ...formData,
      items: updatedItems,
    });
  };

  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const shipping = 1250;
  const tax = 1250;

  const total = subtotal + shipping + tax;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-[#101828] text-center">
          Review Your Order
        </h2>

        <p className="text-[#667085] text-center mt-2">
          Please review your products and order details before proceeding to
          payment
        </p>
      </div>

      {/* Empty State */}
      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-2xl font-semibold text-[#101828]">
            Your cart is empty
          </h2>

          <p className="text-[#667085] mt-2">
            Please add products before checkout.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Products */}
          <div className="lg:col-span-2 bg-white border rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-6">Order Items</h3>

            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="border rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-4 hover:shadow-md transition-all duration-300"
                >
                  {/* Product */}
                  <div className="flex gap-4">
                    <img
                      src={item.images?.[0]}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl border"
                    />

                    <div className="flex flex-col justify-center">
                      <h4 className="font-semibold text-[#101828]">
                        {item.name}
                      </h4>

                      <p className="text-sm text-[#667085]">{item.category}</p>

                      <p className="text-sm text-[#667085] mt-1">
                        ${item.price.toFixed(2)} each
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, "decrease")
                          }
                          className="w-8 h-8 rounded-lg border hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="font-medium">{item.quantity}</span>

                        <button
                          onClick={() =>
                            handleQuantityChange(item._id, "increase")
                          }
                          className="w-8 h-8 rounded-lg border hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-4">
                    <h3 className="text-lg font-bold text-[#101828]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </h3>

                    <div className="flex gap-3">
                      <button className="text-[#005EFF] hover:scale-110 transition">
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleRemoveItem(item._id)}
                        className="text-[#FF4040] hover:scale-110 transition"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#FAFAFA] border rounded-2xl shadow-sm p-6 h-fit sticky top-24">
            <h3 className="text-xl font-semibold mb-6">Order Summary</h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-[#667085]">Subtotal</span>

                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#667085]">Shipping</span>

                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#667085]">Tax</span>

                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Secure */}
            <div className="flex items-center gap-2 bg-[#ECFDF3] text-[#027A48] p-3 rounded-lg mt-6 text-sm">
              <FaLock />

              <span>Secure encrypted checkout</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 mt-8">
              <button
                onClick={nextStep}
                className="bg-[#0B4D81] hover:bg-[#093a63] text-white py-3 rounded-xl font-medium transition"
              >
                Proceed to Payment
              </button>

              <button
                onClick={prevStep}
                className="border border-[#D0D5DD] text-[#344054] py-3 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentReview;
