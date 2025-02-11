"use client";

import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    "all",
    "analysis",
    "measurement",
    "processing",
    "storage"
  ];

  const products = [
    {
      id: 1,
      name: "Advanced Spectrophotometer",
      category: "analysis",
      image: "/Spectrophotometer manufacturer.jfif",
      description: "High-precision spectral analysis with advanced data processing"
    },
    {
      id: 2,
      name: "Digital Microscope Pro",
      category: "analysis",
      image: "/microscope.jfif",
      description: "4K resolution with AI-enhanced image processing"
    },
    {
      id: 3,
      name: "Precision Balance",
      category: "measurement",
      image: "/balance.jfif",
      description: "Ultra-precise measurement with 0.0001g resolution"
    },
    // Add more products as needed
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products-hero.jpg"
            alt="Laboratory Equipment"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl font-bold text-white mb-6">Our Products</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Discover our range of cutting-edge laboratory equipment
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                    <span className="text-indigo-400 font-semibold">{product.price}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}