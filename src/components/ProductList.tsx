"use client";
import { Heart, Search, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

const ProductList = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Premium Sneakers",
      price: "Rp. 450.000",
      originalPrice: "Rp. 600.000",
      description: "Comfortable and stylish premium sneakers",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      isNew: true,
      discount: 25,
    },
    {
      id: 2,
      name: "Classic Loafers",
      price: "Rp. 320.000",
      description: "Elegant classic loafers for formal occasions",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.6,
      isNew: false,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "Rp. 380.000",
      originalPrice: "Rp. 480.000",
      description: "High-performance running shoes",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      isNew: false,
      discount: 20,
    },
    {
      id: 4,
      name: "Casual Boots",
      price: "Rp. 520.000",
      description: "Durable casual boots for everyday wear",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      hoverImage:
        "https://images.pexels.com/photos/1070360/pexels-photo-1070360.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.7,
      isNew: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          onMouseEnter={() => setHoveredProduct(product.id)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="relative overflow-hidden">
            {product.discount && (
              <div className="absolute top-3 left-3 bg-red-400 text-white px-2 py-1 rounded-full text-xs font-semibold z-20">
                -{product.discount}%
              </div>
            )}

            {product.isNew && (
              <div className="absolute top-3 right-3 bg-pink-400 text-white px-2 py-1 rounded-full text-xs font-semibold z-20">
                New
              </div>
            )}

            <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 hover:bg-pink-50">
              <Heart className="w-4 h-4 text-gray-600 hover:text-pink-400" />
            </button>

            <div className="relative h-72 bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: hoveredProduct === product.id ? 0 : 1 }}
              />
              <img
                src={product.hoverImage}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-colors">
                  Quick View
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-1 mb-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-gray-700">
                {product.rating}
              </span>
              <span className="text-xs text-gray-500">(127 reviews)</span>
            </div>

            <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 mb-4 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold text-gray-900">
                {product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>

            <button className="w-full bg-gradient-to-r from-pink-400 to-red-400 text-white py-3 px-4 rounded-xl font-medium hover:from-pink-500 hover:to-red-500 transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
