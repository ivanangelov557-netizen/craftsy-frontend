import React from 'react';
import { useCartStore } from '../store/cartStore';

export default function ShoppingCart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 10;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Discover amazing handmade products and add them to your cart!
          </p>
          
          <a
            href="/"
            className="inline-block bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition"
          >
            Continue Shopping →
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-4 py-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Shopping Cart ({cart.length} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-6 flex gap-6 items-start"
                >
                  
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      By {item.sellerName}
                    </p>
                    <p className="text-2xl font-bold text-green-800">
                      €{item.price}
                    </p>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(0, item.quantity - 1)
                        )
                      }
                      className="px-3 py-2 hover:bg-gray-200"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                      className="w-12 text-center border-0 focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-3 py-2 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>

                  {/* Total for item */}
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-2">
                      Total:
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      €{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 font-bold text-xl"
                  >
                    ✕
                  </button>

                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-8">
              
              <a
                href="/"
                className="text-green-800 font-bold hover:underline"
              >
                ← Continue Shopping
              </a>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">€{subtotal.toFixed(2)}</span>
              </div>

              {/* Shipping */}
              <div className="flex justify-between mb-6 pb-6 border-b">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold">
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `€${shipping.toFixed(2)}`
                  )}
                </span>
              </div>

              {/* Shipping Info */}
              {shipping > 0 && (
                <p className="text-sm text-gray-600 mb-4 bg-blue-50 p-3 rounded">
                  📦 Free shipping on orders over €50!
                </p>
              )}

              {/* Total */}
              <div className="flex justify-between mb-6 text-lg">
                <span className="font-bold text-gray-900">Total:</span>
                <span className="text-2xl font-bold text-green-800">
                  €{total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded-lg font-bold text-lg transition mb-3">
                💳 Proceed to Checkout
              </button>

              {/* Clear Cart Button */}
              <button
                onClick={() => clearCart()}
                className="w-full bg-red-100 hover:bg-red-200 text-red-800 py-3 rounded-lg font-bold transition"
              >
                Clear Cart
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}