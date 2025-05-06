import React, { useState } from 'react'
import FilterBar from '../../components/admin/FilterBar'
import OrderTable from '../../components/admin/OrderTable'


const Orders = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [sortOrder, setSortOrder] = useState("asc")
    const [filterStatus, setFilterStatus] = useState("")

    return (
        <div className='p-4'>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Orders</h2>
                <FilterBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                />
            </div>

            <OrderTable
                searchQuery={searchQuery}
                sortOrder={sortOrder}
                filterStatus={filterStatus}
            />
        </div>
    )
}

export default Orders
