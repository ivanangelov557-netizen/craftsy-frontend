import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Handmade Ceramic Vase',
      price: '45',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=400&fit=crop',
      rating: '4.8',
      sellerName: 'Maria Pottery',
      sellerAvatar: 'https://i.pravatar.cc/32?img=1',
      sellerRating: '4.9',
      sellerReviews: '234',
      isNew: true
    },
    {
      id: 2,
      name: 'Knitted Wool Blanket',
      price: '89',
      image: 'https://images.unsplash.com/photo-1600185365926-3a12a148e11e?w=400&h=400&fit=crop',
      rating: '4.7',
      sellerName: 'Sofia Textiles',
      sellerAvatar: 'https://i.pravatar.cc/32?img=2',
      sellerRating: '4.8',
      sellerReviews: '156',
      isNew: false
    },
    {
      id: 3,
      name: 'Wooden Jewelry Box',
      price: '125',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
      rating: '5.0',
      sellerName: 'Ivan Wood Crafts',
      sellerAvatar: 'https://i.pravatar.cc/32?img=3',
      sellerRating: '5.0',
      sellerReviews: '342',
      isNew: true
    },
    {
      id: 4,
      name: 'Hand-Stitched Leather Bag',
      price: '175',
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop',
      rating: '4.9',
      sellerName: 'Elena Leather',
      sellerAvatar: 'https://i.pravatar.cc/32?img=4',
      sellerRating: '4.9',
      sellerReviews: '278',
      isNew: false
    },
    {
      id: 5,
      name: 'Embroidered Wall Art',
      price: '65',
      image: 'https://images.unsplash.com/photo-1578926314433-c6761db3fbb6?w=400&h=400&fit=crop',
      rating: '4.6',
      sellerName: 'Petya Embroidery',
      sellerAvatar: 'https://i.pravatar.cc/32?img=5',
      sellerRating: '4.7',
      sellerReviews: '189',
      isNew: true
    },
    {
      id: 6,
      name: 'Handpainted Ceramic Plate',
      price: '34',
      image: 'https://images.unsplash.com/photo-1578149102327-432bedf27311?w=400&h=400&fit=crop',
      rating: '4.5',
      sellerName: 'Artist Studio BG',
      sellerAvatar: 'https://i.pravatar.cc/32?img=6',
      sellerRating: '4.6',
      sellerReviews: '98',
      isNew: false
    },
    {
      id: 7,
      name: 'Natural Soap Set',
      price: '28',
      image: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?w=400&h=400&fit=crop',
      rating: '4.8',
      sellerName: 'Eco Beauty',
      sellerAvatar: 'https://i.pravatar.cc/32?img=7',
      sellerRating: '4.9',
      sellerReviews: '412',
      isNew: false
    },
    {
      id: 8,
      name: 'Macramé Wall Hanging',
      price: '52',
      image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&h=400&fit=crop',
      rating: '4.7',
      sellerName: 'Boho Crafts',
      sellerAvatar: 'https://i.pravatar.cc/32?img=8',
      sellerRating: '4.8',
      sellerReviews: '224',
      isNew: true
    }
  ];

  return (
    <section className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition">
            View All Products →
          </button>
        </div>

      </div>
    </section>
  );
}