// src/components/ProductTable.js
const ProductTable = ({ setShowModal }) => {
  // Mock data for demonstration
  const products = [
    { id: 1, name: 'Product 1', price: '$100', category: 'Category 1' },
    { id: 2, name: 'Product 2', price: '$150', category: 'Category 2' },
  ];

  return (
    <table className="min-w-full bg-white shadow-md rounded mt-4">
      <thead>
        <tr>
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Price</th>
          <th className="py-2 px-4">Category</th>
          <th className="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id} className="border-b">
            <td className="py-2 px-4">{product.name}</td>
            <td className="py-2 px-4">{product.price}</td>
            <td className="py-2 px-4">{product.category}</td>
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

export default ProductTable;
