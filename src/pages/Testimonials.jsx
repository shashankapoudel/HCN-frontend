import React from "react";

const testimonials = [
    {
        name: "Evan Hamilton",
        handle: "@evanhamilton",
        text: "Big gracias to @Bizzabo. We're running all ticketing through their awesome platform for our event. #cmxsummit",
        avatar: "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png"
    },
    {
        name: "eventistrybyaelecia",
        handle: "@eventistrybyal",
        text: "@Bizzabo It's like you read my mind with the new Session feature. Thank you!",
        avatar: "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png"
    },
    {
        name: "eventistrybyaelecia",
        handle: "@eventistrybyal",
        text: "@Bizzabo It's like you read my mind with the new Session feature. Thank you!",
        avatar: "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png"
    },
    {
        name: "eventistrybyaelecia",
        handle: "@eventistrybyal",
        text: "@Bizzabo It's like you read my mind with the new Session feature. Thank you!",
        avatar: "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png"
    },
    {
        name: "David Spinks",
        handle: "@DavidSpinks",
        text: "I love my @Bizzabo :) Easy platform to use, fantastic staff and nothing but great results!",
        avatar: "https://transplant.org.au/wp-content/uploads/2018/06/James-avatar-for-website.png"
    }
];

export default function TestimonialsPage() {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B4D81] to-[#bb2821] opacity-70 z-0" />

            <div className="relative z-10 flex flex-col items-center px-4 pt-20">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-[white]">
                    YOU ARE <br className="block md:hidden" />
                    <span className="text-[white]">THE CENTER OF OUR UNIVERSE</span>
                </h1>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white shadow-xl rounded-2xl p-4">
                            <div className="flex items-start gap-4">
                                <img
                                    src={t.avatar}
                                    alt={t.name}
                                    className="w-16 h-16 rounded-full"
                                    loading="lazy"
                                />
                                <div>
                                    <p className="font-semibold">{t.name} <span className="text-gray-500">{t.handle}</span></p>
                                    <p className="text-sm text-gray-700 mt-1">{t.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[url('/rocket-bg.png')] bg-no-repeat bg-bottom bg-contain pointer-events-none z-0" />
            </div>
        </div>
    );
}