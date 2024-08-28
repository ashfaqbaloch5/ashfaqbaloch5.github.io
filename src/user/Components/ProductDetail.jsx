import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  // Retrieve the passed product from location state
  const product = location.state?.product;

  // Handle the case where no product is passed (fallback logic)
  if (!product) {
    return <div>No product selected</div>;
  }

  const handleBuyNow = () => {
    const productDetails = {
      name: product.name,
      imgSrc: product.imgSrc,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };

    navigate('/checkout', { state: { product: productDetails } });
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const handleColorSelect = (color) => setSelectedColor(color);
  const handleSizeSelect = (size) => setSelectedSize(size);
  const toggleWishlist = () => setAddedToWishlist(!addedToWishlist);

  const getPriceNumber = (price) => parseFloat(price);

  return (
    <div className="p-8 px-4">
      <div className="text-sm text-gray-500 mb-4">
        Account / Gaming / {product.name}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <img
              src={product.imgSrc}
              alt="Thumb 1"
              className="border"
            />
            <img
              src={product.imgSrc}
              alt="Thumb 2"
              className="border"
            />
            <img
              src={product.imgSrc}
              alt="Thumb 3"
              className="border"
            />
            <img
              src={product.imgSrc}
              alt="Thumb 4"
              className="border"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center my-2">
            <div className="text-yellow-500">★★★★☆</div>
            <div className="ml-2 text-gray-500">{product.reviews}</div>
            <div className="ml-4 text-green-500">In stock</div>
          </div>
          <div className="text-2xl font-bold mb-4">${getPriceNumber(product.price)}</div>
          <p className="text-gray-500 mb-4">
            PlayStation 5 Controller Skin High-quality vinyl with air channel release for easy bubble-free install & mess free removal. Pressure sensitive.
          </p>

          <div className="mb-4">
            <span className="font-semibold">Colours:</span>
            <div className="flex items-center mt-2">
              <div
                className={`w-8 h-8 bg-red-600 rounded-full cursor-pointer mr-2 ${
                  selectedColor === 'red' ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => handleColorSelect('red')}
              ></div>
              <div
                className={`w-8 h-8 bg-gray-300 rounded-full cursor-pointer mr-2 ${
                  selectedColor === 'gray' ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => handleColorSelect('gray')}
              ></div>
              <div
                className={`w-8 h-8 bg-black rounded-full cursor-pointer ${
                  selectedColor === 'black' ? 'ring-4 ring-blue-500' : ''
                }`}
                onClick={() => handleColorSelect('black')}
              ></div>
            </div>
            {selectedColor && <p className="text-sm text-gray-500">Selected Color: {selectedColor}</p>}
          </div>

          <div className="mb-4">
            <span className="font-semibold">Size:</span>
            <div className="flex items-center mt-2 space-x-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`border px-4 py-2 rounded ${
                    selectedSize === size ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && <p className="text-sm text-gray-500">Selected Size: {selectedSize}</p>}
          </div>

          <div className="flex items-center mb-4">
            <span className="font-semibold mr-4">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                className="px-4 py-2"
                onClick={decrementQuantity}
              >-</button>
              <div className="px-4 py-2">{quantity}</div>
              <button
                className="px-4 py-2"
                onClick={incrementQuantity}
              >+</button>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <button className="bg-red-600 text-white px-6 py-2 rounded" onClick={handleBuyNow}>
              Buy Now
            </button>
            <button
              className={`border px-6 py-2 rounded ${
                addedToWishlist ? 'text-red-600' : ''
              }`}
              onClick={toggleWishlist}
            >
              {addedToWishlist ? '❤ Added to Wishlist' : '❤ Add to Wishlist'}
            </button>
          </div>

          <div className="text-gray-500 mb-2">
            <div>🚚 Free Delivery</div>
            <div>↩️ Return Delivery (Free 30 Days Delivery Returns)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
