import React, { useState } from 'react'
import PersonalInfo from '../components/PersonalInfo'
import ShippingAddress from '../components/ShippingAddress'
import PaymentReview from '../components/PaymentReview'
import OrderConfirmation from '../components/OrderConfirmation'
import StepSideBar from '../components/StepSideBar'
import TotalOrder from '../components/totalOrder'
import BASE_URL from '../config/api'

const Order = () => {

    const [formData, setFormData] = useState({
        personalInfo: {},
        shippingAddress: {},
        items: [],
    });

    const [step, setStep] = useState(1)
    const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
    const prevStep = () => setStep((prev) => Math.min(prev - 1, 1));


    const handleSubmit = async () => {
        try {
            const res = await fetch(`${BASE_URL}/order/createorder`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            })
            if (res.ok) {
                alert("Order placed successfully!");

            }
        } catch (error) {

            console.error("Error placing order:", error);
        }
    }

    const renderStep = () => {
        switch (step) {
            case 1:
                return <PersonalInfo
                    nextStep={nextStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 2:
                return <ShippingAddress
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}

                />;
            case 3:
                return <PaymentReview
                    nextStep={nextStep}
                    prevStep={prevStep}
                    formData={formData}
                    setFormData={setFormData}
                />;
            case 4:
                return <OrderConfirmation />;
            default:
                return null;
        }
    }

    return (
        <div className='flex justify-center items-center  m-2 px-2 lg:px-8'>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 w-full  min-h-screen'>
                <StepSideBar step={step} />
                {renderStep()}
                <TotalOrder step={step} nextStep={nextStep} prevStep={prevStep} />
            </div>

        </div>
    )
}

export default Order






