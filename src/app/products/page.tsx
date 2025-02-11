import React from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Spectrophotometer X1000",
      category: "Analytics",
      description: "High-precision spectral analysis equipment",
      features: [
        "Advanced optics",
        "Digital interface",
        "Automated calibration",
      ],
    },
    {
      id: 2,
      name: "Centrifuge Pro Series",
      category: "Lab Equipment",
      description: "Professional-grade laboratory centrifuge",
      features: ["Variable speed", "Digital controls", "Safety lock system"],
    },
    {
      id: 3,
      name: "Microscope Elite",
      category: "Research",
      description: "Advanced digital microscopy system",
      features: ["4K imaging", "Digital zoom", "Auto-focus"],
    },
    // Add more products as needed
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                {product.category}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {product.description}
              </p>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
