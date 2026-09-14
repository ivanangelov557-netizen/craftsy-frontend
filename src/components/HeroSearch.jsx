import React, { useState } from 'react';

export default function HeroSearch() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchQuery);
    // Later: redirect to search results page
  };

  const popularSearches = [
    'Handmade jewelry',
    'Clay pottery',
    'Embroidered textiles',
    'Wooden gifts'
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
          Discover Unique Handcrafted Goods
        </h1>
        
        <p className="text-lg text-center text-gray-600 mb-8">
          Buy directly from independent artisans around the world
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-4 rounded-lg border-2 border-gray-300 focus:border-green-800 focus:outline-none text-lg"
            />
            <button
              type="submit"
              className="bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition"
            >
              🔍 Search
            </button>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="text-center">
          <p className="text-gray-600 text-sm mb-3">
            👍 <span className="font-semibold">Popular searches:</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(search)}
                className="px-4 py-2 bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-800 rounded-full text-sm transition font-medium"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}