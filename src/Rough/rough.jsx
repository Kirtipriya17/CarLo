import React from 'react';

const Rough = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-4 py-2">
        <h2 className="text-gray-800 text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      </div>
      <img className="h-48 w-full object-cover mt-2" src={product.image} alt={product.name} />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-xl">${product.price}</h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Rough;