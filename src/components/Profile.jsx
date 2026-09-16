import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function Profile() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Sample purchase history
  const purchases = [
    {
      id: 1,
      product: 'Handmade Ceramic Vase',
      price: 45,
      date: '2024-01-15',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      product: 'Knitted Wool Blanket',
      price: 89,
      date: '2024-01-10',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1600185365926-3a12a148e11e?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      product: 'Wooden Jewelry Box',
      price: 125,
      date: '2024-01-05',
      status: 'Delivered',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-6 mb-6">
            <img
              src={user.avatar}
              alt={user.username}
              className="w-24 h-24 rounded-full border-4 border-green-800"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">
                {user.username}
              </h1>
              <p className="text-gray-600">📧 {user.email}</p>
              <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-100 hover:bg-red-200 text-red-800 px-6 py-2 rounded-lg font-semibold transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-800">
              {purchases.length}
            </div>
            <p className="text-gray-600">Orders</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-800">
              €{purchases.reduce((sum, p) => sum + p.price, 0)}
            </div>
            <p className="text-gray-600">Total Spent</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-800">
              ⭐ 4.9
            </div>
            <p className="text-gray-600">Rating</p>
          </div>
        </div>

        {/* Purchase History */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Purchase History
          </h2>

          <div className="space-y-4">
            {purchases.map((purchase) => (
              <div
                key={purchase.id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <img
                  src={purchase.image}
                  alt={purchase.product}
                  className="w-16 h-16 object-cover rounded"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    {purchase.product}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {new Date(purchase.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <p className="font-bold text-gray-900">€{purchase.price}</p>
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ {purchase.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Account Settings
          </h2>

          <div className="space-y-4">
            <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <p className="font-semibold text-gray-900">🔐 Change Password</p>
              <p className="text-sm text-gray-600">Update your password</p>
            </button>

            <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <p className="font-semibold text-gray-900">📍 Saved Addresses</p>
              <p className="text-sm text-gray-600">Manage your delivery addresses</p>
            </button>

            <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <p className="font-semibold text-gray-900">🔔 Notifications</p>
              <p className="text-sm text-gray-600">Manage your notification preferences</p>
            </button>

            <button className="w-full text-left px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <p className="font-semibold text-gray-900">⚙️ Privacy Settings</p>
              <p className="text-sm text-gray-600">Control your privacy settings</p>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}