// src/components/OrderTable.js
const OrderTable = ({ setShowModal }) => {
  // Mock data for demonstration
  const orders = [
    { id: 1, orderNumber: 'ORD123', customer: 'John Doe', total: '$200' },
    { id: 2, orderNumber: 'ORD456', customer: 'Jane Smith', total: '$300' },
  ];

  return (
    <table className="min-w-full bg-white shadow-md rounded mt-4">
      <thead>
        <tr>
          <th className="py-2 px-4">Order Number</th>
          <th className="py-2 px-4">Customer</th>
          <th className="py-2 px-4">Total</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id} className="border-b">
            <td className="py-2 px-4">{order.orderNumber}</td>
            <td className="py-2 px-4">{order.customer}</td>
            <td className="py-2 px-4">{order.total}</td>
            <td className="py-2 px-4">
              <button
                className="text-blue-500 mr-2"
                onClick={() => setShowModal(true)}
              >
                Edit
              </button>
              <button className="text-red-500">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderTable;
