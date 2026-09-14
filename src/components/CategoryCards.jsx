import React from 'react';

export default function CategoryCards() {
  const categories = [
    {
      name: 'Gifts',
      emoji: '🎁',
      count: '2.5K+',
      description: 'Unique gift ideas'
    },
    {
      name: 'Home & Decor',
      emoji: '🏠',
      count: '3.1K+',
      description: 'Beautiful home items'
    },
    {
      name: 'Clothing',
      emoji: '👕',
      count: '4.2K+',
      description: 'Handmade fashion'
    },
    {
      name: 'Other',
      emoji: '✨',
      count: '1.8K+',
      description: 'Various creations'
    }
  ];

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Browse by Category
        </h2>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition cursor-pointer group"
            >
              {/* Emoji Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition">
                {category.emoji}
              </div>

              {/* Category Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4">
                {category.description}
              </p>

              {/* Product Count */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-green-800">
                  {category.count} products
                </span>
                <span className="text-green-800 group-hover:translate-x-1 transition">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}