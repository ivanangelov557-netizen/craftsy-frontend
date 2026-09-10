import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-green-800">
          🎨 CRAFTSY
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Buy
          </a>
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Sell
          </a>
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Categories
          </a>
          <a href="#" className="text-gray-700 hover:text-green-800 font-medium">
            Contact
          </a>
        </div>

        {/* Right Side - Auth & Language */}
        <div className="flex gap-4 items-center">
          <button className="text-gray-700 hover:text-green-800">
            🌐 EN
          </button>
          <button className="bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Login
          </button>
        </div>

      </nav>
    </header>
  );
}