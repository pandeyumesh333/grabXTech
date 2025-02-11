"use client";

import Image from "next/image";
import { FaGlobeAmericas, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started with a vision to revolutionize laboratory equipment"
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded operations to 25+ countries"
    },
    {
      year: "2018",
      title: "Innovation Center",
      description: "Launched state-of-the-art R&D facility"
    },
    {
      year: "2023",
      title: "Industry Leader",
      description: "Recognized as leading provider of lab solutions"
    }
  ];

  const values = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries in scientific equipment development"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working together with scientists and researchers"
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "Global Impact",
      description: "Making scientific advancement accessible worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/aboutus.jfif"
            alt="Laboratory Team"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About GrabX Tech</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Leading the way in laboratory innovation and scientific excellence since 2010.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/mission.jfif"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                At GrabX Tech, we&apos;re dedicated to advancing scientific discovery through innovative laboratory solutions. Our mission is to empower researchers and scientists with cutting-edge equipment and unwavering support.
              </p>
              <p className="text-gray-300">
                We believe that great science requires great tools, and we&apos;re committed to providing the very best to our global community of researchers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-white text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600"></div>
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="bg-gray-800 p-6 rounded-xl">
                      <div className="text-indigo-400 font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-white text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-xl text-center">
                <div className="text-indigo-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}