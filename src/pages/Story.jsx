import React from 'react'
import WhyHCN from '../components/WhyHCN'



const Story = () => {

    const Images = [
        '/Images/homeImage.png',
        '/Images/homeImage.png',
        '/Images/homeImage.png',
        '/Images/homeImage.png',
        '/Images/homeImage.png',
        '/Images/homeImage.png',
    ]


    return (
        <div className='p-8 min-h-screen'>

            <div className='flex flex-col gap-16 '>


                <div className='grid grid-cols-3 gap-1'>
                    {Images.map((img, index) => (
                        <img
                            src={img}
                            className="object-cover w-full mb-0"
                            alt="Home"
                        />
                    ))
                    }
                </div>

                <div className='flex gap-8'>
                    <div className='w-full lg:w-1/2  p-4'>
                        <h1 className='text-[#0B4D81] text-xl font-semibold'>Himalayas Craft Nepal(HCN)</h1>
                        <p className='text-[#666666] mt-2 font-medium font-poppins  lg:tracking-wide tracking-normal text-justify max-w-4xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo error ad hic cumque, similique tenetur, ipsum, aliquam alias nostrum magnam quos ducimus unde quam architecto perspiciatis numquam eaque consequuntur temporibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, iusto? Corrupti dignissimos nulla iure saepe eveniet perferendis! Tempore laudantium fugiat corporis esse nostrum vitae rerum error doloremque, dicta quod repellendus.</p>
                    </div>

                    <div className='w-full lg:w-1/2 '>
                        <img
                            src='/Images/homeImage.png'
                            className="object-cover p-4 rounded-md"
                            alt="Home"
                        />
                    </div>
                </div>


                {/* //Why choose HCN */}
                <div className='p-4 '>
                    <WhyHCN />
                </div>


            </div>
        </div>
    )
}

export default Story
