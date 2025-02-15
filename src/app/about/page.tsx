"use client";

import Image from "next/image";
import { FaGlobeAmericas, FaLightbulb, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description:
        "Started with a vision to revolutionize laboratory equipment",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded operations to 25+ countries",
    },
    {
      year: "2018",
      title: "Innovation Center",
      description: "Launched state-of-the-art R&D facility",
    },
    {
      year: "2023",
      title: "Industry Leader",
      description: "Recognized as leading provider of lab solutions",
    },
  ];

  const values = [
    {
      icon: <FaLightbulb className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Innovation",
      description: "Pushing boundaries in scientific equipment development",
    },
    {
      icon: <FaUsers className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Collaboration",
      description: "Working together with scientists and researchers",
    },
    {
      icon: <FaGlobeAmericas className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Global Impact",
      description: "Making scientific advancement accessible worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about2.jpg"
            alt="Laboratory Team"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-yellow-500 mb-4 md:mb-6">
            About GrabX Tech
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
            Leading the way in laboratory innovation and scientific excellence
            since 2010.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 md:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden order-2 md:order-1">
              <Image
                src="/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-yellow-500">
                Our Mission
              </h2>
              <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                At GrabX Tech, we&apos;re dedicated to advancing scientific
                discovery through innovative laboratory solutions. Our mission
                is to empower researchers and scientists with cutting-edge
                equipment and unwavering support.
              </p>
              <p className="text-gray-300 text-base md:text-lg">
                We believe that great science requires great tools, and
                we&apos;re committed to providing the very best to our global
                community of researchers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-12 md:py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-yellow-500 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {!isMobile && (
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-600"></div>
            )}
            <div className="space-y-8 md:space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-start md:items-center
                    ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-8 lg:pl-16" : "md:pr-8 lg:pr-16"
                    }`}
                  >
                    <div className="bg-gray-800 p-4 md:p-6 rounded-xl">
                      <div className="text-indigo-400 font-bold mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-yellow-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 md:py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-yellow-500 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 md:p-8 rounded-xl text-center"
              >
                <div className="text-indigo-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-yellow-500">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
