"use client"
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Contact Me</h1>
          <p className="text-lg text-gray-300">
            Have a question or just want to connect? I would love to hear from you!
          </p>
        </div>

        <div className="lg:flex lg:justify-center">
          <div className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-teal-400 mb-6">Send me a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-700 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your Email Address"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 bg-gray-700 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Your Message"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-400 to-gray-900 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-gradient-to-l hover:from-gray-900 hover:to-teal-400 transform hover:scale-105 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
