import React from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Benko Cat Dog Food",
    price: "$20.00",
    rating: "4.9",
    imgSrc: "image_url_here",
    reviews: "(49)",
  },
  {
    id: 2,
    name: "Canon 600 DSLR Camera",
    price: "$320.00",
    rating: "4.8",
    imgSrc: "image_url_here",
    reviews: "(33)",
  },
  // ... other products
];

const SomeProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="px-4">
      <h2 className="text-xl font-bold mb-4">Explore Our Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.imgSrc} alt={product.name} className="mb-4" />
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <p className="text-yellow-500">
              Rating: {product.rating} {product.reviews}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SomeProducts;
