// import React, { useState } from "react";
// import PersonalInfo from "../components/PersonalInfo";
// import ShippingAddress from "../components/ShippingAddress";
// import PaymentReview from "../components/PaymentReview";
// import OrderConfirmation from "../components/OrderConfirmation";
// import StepSideBar from "../components/StepSideBar";
// import TotalOrder from "../components/TotalOrder";
// import BASE_URL from "../config/api";
// import { useLocation } from "react-router-dom";

// const Order = () => {
//   const location = useLocation();
//   const { cartItems, subTotal } = location.state || {};
//   const { name, price } = location.state || {};

//   const [formData, setFormData] = useState({
//     personalInfo: {},
//     shippingAddress: {},
//     items: [],
//   });

//   const [step, setStep] = useState(1);
//   const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
//   const prevStep = () => setStep((prev) => Math.min(prev - 1, 1));

//   const handleSubmit = async () => {
//     try {
//       const res = await fetch(`${BASE_URL}/order/createorder`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ formData }),
//       });
//       if (res.ok) {
//         alert("Order placed successfully!");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//     }
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <PersonalInfo
//             nextStep={nextStep}
//             formData={formData}
//             setFormData={setFormData}
//             name={name}
//             price={price}
//           />
//         );
//       case 2:
//         return (
//           <ShippingAddress
//             nextStep={nextStep}
//             prevStep={prevStep}
//             formData={formData}
//             setFormData={setFormData}
//             total={subTotal}
//           />
//         );
//       case 3:
//         return (
//           <PaymentReview
//             nextStep={nextStep}
//             prevStep={prevStep}
//             formData={formData}
//             setFormData={setFormData}
//           />
//         );
//       case 4:
//         return <OrderConfirmation />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex justify-center items-center  m-2 px-2 lg:px-8">
//       <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 w-full  min-h-screen">
//         <StepSideBar step={step} />
//         {renderStep()}
//         <TotalOrder
//           total={subTotal}
//           step={step}
//           nextStep={nextStep}
//           prevStep={prevStep}
//         />
//       </div>
//     </div>
//   );
// };

// export default Order;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import StepSideBar from "../components/StepSideBar";
import CheckoutForm from "../components/CheckoutForm";
import ReviewPayment from "../components/ReviewPayment";
import OrderConfirmation from "../components/OrderConfirmation";

const Order = () => {
  const location = useLocation();

  const { cartItems = [] } = location.state || {};

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    personalInfo: {},
    shippingAddress: {},
    paymentMethod: "",
    items: cartItems,
  });

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <CheckoutForm
            nextStep={nextStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 2:
        return (
          <ReviewPayment
            nextStep={nextStep}
            prevStep={prevStep}
            formData={formData}
            setFormData={setFormData}
          />
        );

      case 3:
        return <OrderConfirmation />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#101828]">Secure Checkout</h1>

          <p className="text-[#667085] mt-2">
            Complete your order in a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <StepSideBar step={step} />
          </div>

          <div className="lg:col-span-9">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
