import React, { useState } from 'react'

const AccessorisUpload = () => {

    const [decision, setDecision] = useState()
    const accessoriesCategory = ['', '', '', '', '', '']

    return (

        <div>

            <div>
                <label className="text-[#344054] text-sm font-bold">Do you want accessories?</label>
                <div className="flex space-x-2 mt-2">
                    {["Yes", "No"].map((required) => (
                        <label key={required} className="flex items-center gap-1">
                            <input
                                type="radio"
                                
                                name="required"
                                value={required}
                                checked={decision === required}
                                onChange={(e) => setDecision(e.target.value)}
                                className="border p-2 border-[#D0D5DD] rounded-md text-sm"
                            />
                            <span className="text-sm px-2">{required}</span>
                        </label>
                    ))}
                </div>
            </div>



        </div>

    )
}

export default AccessorisUpload
