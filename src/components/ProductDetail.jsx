import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Sample product - в бъдещност ще идва от API
  const product = {
    id: 1,
    name: 'Handmade Ceramic Vase - Blue Edition',
    price: '45',
    rating: '4.8',
    reviewCount: '234',
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=800&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop',
      'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=200&h=200&fit=crop',
    ],
    description: 'Beautiful handmade ceramic vase crafted with traditional techniques. Perfect for flowers or as a decorative piece. Each vase is unique and made with love.',
    material: 'Ceramic',
    size: '25cm height × 15cm diameter',
    weight: '800g',
    color: 'Blue',
    stock: '5 in stock',
    
    seller: {
      name: 'Maria Pottery',
      avatar: 'https://i.pravatar.cc/64?img=1',
      rating: '4.9',
      reviews: '234',
      joinedYear: '2021',
      responseTime: '< 1 hour'
    },
    
    shipping: {
      from: 'Sofia, Bulgaria',
      time: '5-10 business days',
      cost: 'Free (over €50)',
      countries: 'Worldwide'
    },
    
    reviews: [
      {
        id: 1,
        author: 'Ana K.',
        avatar: 'https://i.pravatar.cc/32?img=2',
        rating: 5,
        date: '2 weeks ago',
        text: 'Absolutely beautiful! Exceeded my expectations.'
      },
      {
        id: 2,
        author: 'John D.',
        avatar: 'https://i.pravatar.cc/32?img=3',
        rating: 5,
        date: '1 month ago',
        text: 'Perfect packaging, arrived safely. Highly recommended!'
      },
      {
        id: 3,
        author: 'Sofia M.',
        avatar: 'https://i.pravatar.cc/32?img=4',
        rating: 4,
        date: '2 months ago',
        text: 'Great quality, shipping took a bit longer than expected but worth it.'
      }
    ]
  };

  return (
    <div className="bg-white">
      {/* Product Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Images */}
          <div>
            <div className="bg-gray-100 rounded-lg mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`View ${idx + 1}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition"
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-lg">⭐ {product.rating}/5.0</div>
              <span className="text-gray-600">({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-green-800 mb-6">
              €{product.price}
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Specs */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Material:</span>
                <span className="text-gray-700">{product.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Size:</span>
                <span className="text-gray-700">{product.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Weight:</span>
                <span className="text-gray-700">{product.weight}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Color:</span>
                <span className="text-gray-700">{product.color}</span>
              </div>
            </div>

            {/* Stock */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-green-800 mb-4">
                ✓ {product.stock}
              </p>

              {/* Quantity */}
              <div className="flex gap-4 mb-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-xl hover:bg-gray-100"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-0 focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-xl hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <span className="flex items-center text-gray-600">
                  Total: €{product.price * quantity}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg transition">
                🛒 Add to Cart
              </button>
              <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-semibold transition">
                ❤️ Save
              </button>
            </div>

            {/* Shipping Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-2">
              <div className="flex gap-3">
                <span className="text-xl">📦</span>
                <div>
                  <p className="font-semibold text-gray-900">Ships from: {product.shipping.from}</p>
                  <p className="text-sm text-gray-600">{product.shipping.time}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">🌍</span>
                <div>
                  <p className="font-semibold text-gray-900">Ships to: {product.shipping.countries}</p>
                  <p className="text-sm text-gray-600">{product.shipping.cost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seller Card */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{product.seller.name}</h3>
                <p className="text-gray-600">⭐ {product.seller.rating} • {product.seller.reviews} sales • Joined {product.seller.joinedYear}</p>
                <p className="text-sm text-green-700">Responds in {product.seller.responseTime}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-green-800 hover:bg-green-700 text-white rounded-lg font-semibold transition">
                💬 Contact Seller
              </button>
              <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg font-semibold transition">
                👁️ Visit Shop
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
        
        <div className="space-y-4">
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                    <div className="text-yellow-400">
                      {'⭐'.repeat(review.rating)}
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews */}
        <div className="text-center mt-8">
          <button className="text-green-800 font-bold hover:underline">
            View all {product.reviewCount} reviews →
          </button>
        </div>
      </section>

    </div>
  );
}