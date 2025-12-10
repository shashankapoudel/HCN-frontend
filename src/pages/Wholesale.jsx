import React from 'react'

const Wholesale = () => {
    const Images = [
        '/Images/OurStory3.jpg',
        '/Images/OurStory1.jpg',
        '/Images/OurStory2.jpg',
        '/Images/OurStory2.jpg',
        '/Images/OurStory2.jpg',
    ]

    return (
        <div className='min-h-screen p-8 w-full flex '>

            <div className='w-1/2 border'>

                <p>

                </p>

            </div>

            <div className='w-1/2 border columns-1 md:columns-3 lg:columns-3 gap-1 p-2'>

                {
                    Images.map((img) => (
                        <img
                            src={img}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Wholesale
