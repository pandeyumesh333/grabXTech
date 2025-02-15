"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  console.log(windowWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMobileFiltersOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    "all",
    "analysis",
    "measurement",
    "processing",
    "storage",
  ];

  const products = [
    {
      id: 1,
      name: "Advanced Spectrophotometer",
      category: "analysis",
      image: "/digitalSpectrometer.jpg",
      description:
        "High-precision spectral analysis with advanced data processing",
    },
    {
      id: 2,
      name: "Digital Microscope Pro",
      category: "analysis",
      image: "/researchTool.png",
      description: "4K resolution with AI-enhanced image processing",
    },
    {
      id: 3,
      name: "Precision Balance",
      category: "measurement",
      image: "/labEquipment.jpeg",
      description: "Ultra-precise measurement with 0.0001g resolution",
    },
  ];

  const filteredProducts = products
    .filter(
      (product) =>
        selectedCategory === "all" || product.category === selectedCategory
    )
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products.jpg"
            alt="Laboratory Equipment"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-500 mb-4 md:mb-6">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            Discover our range of cutting-edge laboratory equipment
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="sticky top-0 bg-gray-800 py-4 md:py-8 z-20 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-96">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 text-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                className="md:hidden bg-gray-700 p-2 rounded-lg"
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              >
                <FaFilter className="text-yellow-500" />
              </button>
            </div>

            <div
              className={`${
                isMobileFiltersOpen ? "flex" : "hidden"
              } md:flex flex-wrap md:flex-nowrap gap-2 md:gap-4 w-full md:w-auto transition-all duration-300 ease-in-out`}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg capitalize whitespace-nowrap flex-1 md:flex-none text-sm md:text-base ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-yellow-500"
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
      <div className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 rounded-xl overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-2 md:mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-yellow-500">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-400 mb-4">
                    {product.description}
                  </p>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-yellow-500 rounded-lg hover:bg-indigo-700 transition-colors text-sm md:text-base">
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
