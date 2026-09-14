import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
      
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition"
        />
        
        {/* Badge */}
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            New
          </div>
        )}
      </div>

      {/* Seller Info */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img
            src={product.sellerAvatar}
            alt={product.sellerName}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">
              {product.sellerName}
            </p>
            <p className="text-xs text-gray-600">
              ⭐ {product.sellerRating} ({product.sellerReviews})
            </p>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-green-800">
            €{product.price}
          </div>
          <div className="text-sm text-gray-600">
            ⭐ {product.rating}/5.0
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 bg-green-800 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition">
            🛒 Add to Cart
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              isSaved
                ? 'bg-red-100 text-red-800'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isSaved ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

    </div>
  );
}