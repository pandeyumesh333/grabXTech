"use client";

import Image from "next/image";
import {
  FaFlask,
  FaMicroscope,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/futuristic lab.jfif"
            alt="Modern Laboratory"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 mb-6 leading-tight">
              Transforming Science Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                {" "}
                Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-yellow-500 mb-8">
              Leading provider of cutting-edge laboratory equipment and
              scientific solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/products")}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-yellow-500 rounded-lg font-semibold transition-all"
              >
                Explore Products
              </button>
              <button
                onClick={() => router.push("/about")}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-500 rounded-lg font-semibold backdrop-blur-sm transition-all"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Labs Equipped" },
              { number: "50+", label: "Countries Served" },
              { number: "1000+", label: "Products" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-yellow-500">
              Our Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive laboratory solutions designed to meet the evolving
              needs of modern research facilities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 ">
            {[
              {
                icon: <FaFlask className="w-8 h-8" />,
                title: "Lab Equipment",
                description:
                  "State-of-the-art instruments for precise analysis",
                image: "/lab equipment.jfif",
              },
              {
                icon: <FaMicroscope className="w-8 h-8" />,
                title: "Research Tools",
                description: "Advanced tools for groundbreaking discoveries",
                image: "/research tools.jfif",
              },
              {
                icon: <FaChartLine className="w-8 h-8" />,
                title: "Data Analytics",
                description: "Powerful analytics for meaningful insights",
                image: "/data analytics.jfif",
              },
            ].map((solution, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-indigo-400 mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-500">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-yellow-500">
                Why Choose GrabX Tech
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <FaClock className="w-6 h-6 text-indigo-400" />,
                    title: "24/7 Support",
                    description: "Round-the-clock technical assistance",
                  },
                  {
                    icon: <FaCheckCircle className="w-6 h-6 text-indigo-400" />,
                    title: "Quality Assured",
                    description: "ISO certified equipment and processes",
                  },
                  {
                    icon: <FaHeadset className="w-6 h-6 text-indigo-400" />,
                    title: "Expert Consultation",
                    description: "Dedicated team of scientific experts",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2 text-yellow-500">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/Free Vector _ Polygonal wireframe handshake abstract blue composition as symbol friendship and business partnership vector illustration.jfif"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8">
            Ready to Transform Your Laboratory?
          </h2>
          <button
            onClick={() => router.push("/contact")}
            className="px-8 py-4 bg-yellow-500 text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-all"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
