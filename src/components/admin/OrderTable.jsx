// import { useEffect, useState } from "react";
// import BASE_URL from "../../config/api";

// const OrderTable = ({ searchQuery, filterStatus, sortOrder }) => {
//   const [orders, setOrders] = useState([]);

//   const getAllOrders = async () => {
//     const res = await fetch(`${BASE_URL}/orders/getAllOrders`);
//     const data = await res.json();
//     console.log(data);
//     setOrders(data.data);
//   };

//   useEffect(() => {
//     getAllOrders();
//   }, []);

//   const filteredOrders = orders.filter(
//     (order) =>
//       (order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         order.customer.name
//           .toLowerCase()
//           .includes(searchQuery.toLowerCase())) &&
//       (filterStatus ? order.status === filterStatus : true),
//   );

//   const sortedOrders = [...filteredOrders].sort((a, b) =>
//     sortOrder === "asc"
//       ? parseFloat(a.amount.replace("$", "")) -
//         parseFloat(b.amount.replace("$", ""))
//       : parseFloat(b.amount.replace("$", "")) -
//         parseFloat(a.amount.replace("$", "")),
//   );

//   return (
//     <div className="w-full overflow-hidden border rounded-lg  text-sm">
//       <table className="w-full border-collapse overflow-hidden">
//         <thead>
//           <tr className="bg-gray-100 border-b">
//             <th className="p-3 text-left">Order ID</th>
//             <th className="p-3 text-left">Product Name</th>
//             <th className="p-3 text-left">Customer Name</th>
//             <th className="p-3 text-left">Address</th>
//             <th className="p-3 text-left">Amount</th>
//             <th className="p-3 text-left">Order Date</th>
//             <th className="p-3 text-left">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {sortedOrders.length > 0 ? (
//             sortedOrders.map((order) => (
//               <tr key={order.id} className="border-b">
//                 <td className="p-3">{order.id}</td>
//                 <td className="p-3">{order.product}</td>
//                 <td className="p-3">{order.customer}</td>
//                 <td className="p-3">{order.address}</td>
//                 <td className="p-3">{order.amount}</td>
//                 <td className="p-3">{order.date}</td>

//                 <td className="p-3">
//                   <select className="border px-2 py-1 rounded">
//                     <option>{order.status}</option>
//                     <option>Processing</option>
//                     <option>Delivered</option>
//                     <option>Canceled</option>
//                     <option>Pending</option>
//                   </select>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="text-center p-3">
//                 No orders found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderTable;

import { useEffect, useState } from "react";
import BASE_URL from "../../config/api";

const OrderTable = ({ searchQuery, filterStatus, sortOrder }) => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    try {
      const res = await fetch(`${BASE_URL}/orders/getAllOrders`);
      const data = await res.json();

      console.log("ORDERS:", data);

      setOrders(data.data || []);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    const search = searchQuery.toLowerCase();

    const orderID = (order.orderID || "").toLowerCase();
    const customerName = (order.customer?.name || "").toLowerCase();

    const matchesSearch =
      orderID.includes(search) || customerName.includes(search);

    const matchesStatus = filterStatus
      ? order.orderStatus === filterStatus
      : true;

    return matchesSearch && matchesStatus;
  });

  // Sort orders by total amount
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    const amountA = Number(a.totalAmount) || 0;
    const amountB = Number(b.totalAmount) || 0;

    return sortOrder === "asc" ? amountA - amountB : amountB - amountA;
  });

  return (
    <div className="w-full overflow-hidden border rounded-lg text-sm">
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
              <tr key={order.orderID} className="border-b">
                <td className="p-3">{order.orderID}</td>

                <td className="p-3">
                  {order.items?.map((item, index) => (
                    <div key={index}>
                      {index + 1}. {item.name || item.productName || "Product"}
                    </div>
                  ))}
                </td>

                <td className="p-3">{order.customer?.name || "N/A"}</td>

                <td className="p-3">
                  {order.shippingAddress?.street}, {order.shippingAddress?.city}
                  , {order.shippingAddress?.state},{" "}
                  {order.shippingAddress?.country}, {order.shippingAddress?.zip}
                </td>

                <td className="p-3">
                  {order.currency?.toUpperCase()}{" "}
                  {Number(order.totalAmount || 0).toFixed(2)}
                </td>

                <td className="p-3">
                  {order.createdAt
                    ? new Date(order.createdAt).toLocaleDateString()
                    : "N/A"}
                </td>

                <td className="p-3">
                  <select
                    value={order.orderStatus || "pending"}
                    onChange={(e) => {
                      console.log(
                        "Change status:",
                        order.orderID,
                        e.target.value,
                      );
                    }}
                    className="border px-2 py-1 rounded"
                  >
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="delivered">Delivered</option>
                    <option value="canceled">Canceled</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center p-3">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
