import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">🎨 CRAFTSY</h3>
            <p className="text-sm">
              Bulgaria's first marketplace for handmade artisan goods. Buy directly from creators.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-bold mb-4">Shop</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Browse Products</a></li>
              <li><a href="#" className="hover:text-white transition">Categories</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition">Sales</a></li>
            </ul>
          </div>

          {/* Sell */}
          <div>
            <h4 className="text-white font-bold mb-4">Sell with Us</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Open a Shop</a></li>
              <li><a href="#" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-white transition">Returns</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Legal */}
          <div className="text-sm">
            <p className="mb-2">© 2024 Craftsy Platform. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition">Cookie Policy</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center">
            <p className="text-sm font-semibold text-white mb-3">
              Subscribe to our newsletter
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="bg-green-800 hover:bg-green-700 text-white px-4 py-2 rounded font-semibold text-sm transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <p className="text-sm font-semibold text-white mb-3">Follow us</p>
            <div className="flex justify-center md:justify-end gap-4 text-xl">
              <a href="#" className="hover:text-white transition">f</a>
              <a href="#" className="hover:text-white transition">𝕏</a>
              <a href="#" className="hover:text-white transition">📷</a>
              <a href="#" className="hover:text-white transition">in</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}