const FilterBar = ({ searchQuery, setSearchQuery, filterStatus, setFilterStatus, sortOrder, setSortOrder }) => {
    return (
        <div className="w-full flex items-center gap-3  p-3 rounded-lg text-sm">

            <button className="bg-[#00B0A71A] text-[#03746E] px-1 lg:px-3 py-1 rounded-lg  ">34 new orders</button>

            <select className="border px-3 py-1 rounded">
                <option>Price</option>
            </select>

            <select
                className="border px-3 py-1 rounded"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>

            <input
                value={searchQuery}
                type="text"
                placeholder="Search order"
                className="border px-3 py-1 rounded"
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <select
                className="border px-3 py-1 rounded"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
            >
                <option value="">All Statuses</option>
                <option value="Processing">Processing</option>
                <option value="Delivered">Delivered</option>
                <option value="Canceled">Canceled</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );
};

export default FilterBar;
