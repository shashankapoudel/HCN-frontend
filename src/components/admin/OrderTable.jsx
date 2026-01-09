
const OrderTable = ({ searchQuery, filterStatus, sortOrder }) => {

    const orders = [
        { id: "HCN1234", product: "Product Name 1", customer: "Subash K Rana", address: "Canada", amount: "$283.01", date: "2024-09-05 | 08:17", status: "Processing" },
        { id: "HCN1235", product: "Product Name 2", customer: "Krishna Man Gurung", address: "Germany", amount: "$218.78", date: "2024-10-19 | 23:34", status: "Delivered" },
        { id: "HCN1236", product: "Product Name 3", customer: "Prachabda Yadav", address: "Australia", amount: "$202.87", date: "2024-12-19 | 22:45", status: "Canceled" },
        { id: "HCN1237", product: "Product Name 4", customer: "Radha Krishna Katel", address: "Japan", amount: "$601.13", date: "2024-07-22 | 14:38", status: "Pending" },
        { id: "HCN1238", product: "Product Name 5", customer: "Bambuja Das", address: "France", amount: "$779.58", date: "2024-07-14 | 16:58", status: "Pending" },
    ];

    const filteredOrders = orders.filter((order) =>
        (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase())
        ) && (filterStatus ? order.status === filterStatus : true)
    )

    const sortedOrders = [...filteredOrders].sort((a, b) =>
        sortOrder === "asc"
            ? parseFloat(a.amount.replace("$", "")) - parseFloat(b.amount.replace("$", ""))
            : parseFloat(b.amount.replace("$", "")) - parseFloat(a.amount.replace("$", ""))
    );



    return (
        <div className="w-full overflow-hidden border rounded-lg  text-sm">
            <table className="w-full border-collapse overflow-hidden">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="p-3 text-left">Order ID</th>
                        <th className="p-3 text-left">Product Name</th>
                        <th className="p-3 text-left">Customer Name</th>
                        <th className="p-3 text-left">Address</th>
                        <th className="p-3 text-left">Amount</th>
                        <th className="p-3 text-left">Order Date</th>
                        <th className="p-3 text-left">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {sortedOrders.length > 0 ? (

                        sortedOrders.map((order) => (
                            <tr
                                key={order.id} className="border-b">
                                <td className="p-3">{order.id}</td>
                                <td className="p-3">{order.product}</td>
                                <td className="p-3">{order.customer}</td>
                                <td className="p-3">{order.address}</td>
                                <td className="p-3">{order.amount}</td>
                                <td className="p-3">{order.date}</td>
                                
                                <td className="p-3">
                                    <select className="border px-2 py-1 rounded">
                                        <option>{order.status}</option>
                                        <option>Processing</option>
                                        <option>Delivered</option>
                                        <option>Canceled</option>
                                        <option>Pending</option>
                                    </select>
                                </td>

                            </tr>

                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center p-3">No orders found</td>
                        </tr>

                    )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderTable;
