import React, { useState } from 'react'
import Faqtable from '../../components/admin/Faqtable';
import FaqModal from '../../components/admin/FaqModal';

const FaqsAdmin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [faqno, setFaqno] = useState("")
    const [selectedFaq, setSelectedFaq] = useState("")
    const [refresh, setRefresh] = useState(false)



    const handleEdit = (faq) => {
        setSelectedFaq(faq)
        setIsModalOpen(true)
    }

    return (
        <div className='text-[#323232] p-6 flex flex-col gap-10 '>

            <div className='flex justify-between items-center'>

                <div className='flex gap-2 items-center'>
                    <h1 className='font-semibold'>Frequently Added Questions(FAQs)</h1>
                    <p className='text-[#03746E] text-sm bg-[#00B0A71A] p-1 '>{faqno} Faqs found</p>
                </div>

                <div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className='bg-[#03746E] text-[#FFFFFF] py-1 px-4'>
                        + Add new FAQ
                    </button>
                </div>

            </div>


            <div>
                <Faqtable
                    faqno={faqno}
                    setFaqno={setFaqno}
                    onEdit={handleEdit}
                    refresh={refresh}
                    setRefresh={setRefresh}
                />
            </div>

            {
                isModalOpen && (
                    <div>
                        <FaqModal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            existingData={selectedFaq}
                        />
                    </div>

                )
            }

        </div>
    )
}

export default FaqsAdmin;
