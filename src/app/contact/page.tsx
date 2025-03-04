"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isMounted, setIsMounted] = useState(false);

  // Ensuring this runs only on the client-side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering mismatched SSR & client content

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();
      console.log("success", data);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      console.error("error: ", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      details: "Kokan Vaibhav Society, Near N. G. Park, Dahisar(E), Mumbai - 40068",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Contact Numbers",
      details: "+91 8976006264\n+91 9076099461",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Addresses",
      details: "grabxtechia@gmail.com",
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Business Hours",
      details: "Monday - Saturday: 9AM - 6PM \n Sunday: Closed",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/company/grabx-tech/",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      url: "https://www.facebook.com/grabx.tech",
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      url: "https://youtube.com/@grabxtech?si=hs6yhZfIsjq_mJX7",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      url: "https://www.instagram.com/grabxtech?igsh=MWJzeXo2cjQyZmZzMg==",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <h1 className="text-5xl font-bold text-yellow-500 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Get in touch with our expert team for personalized laboratory
            solutions
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <div className="text-indigo-400 mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-300 whitespace-pre-line">
                  {info.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-yellow-500 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-yellow-500 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-yellow-500 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-yellow-500 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 text-yellow-500 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 text-yellow-500 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-indigo-600 text-yellow-500 rounded-lg font-semibold hover:bg-indigo-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-yellow-500 mb-6">
            Connect With Us
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
