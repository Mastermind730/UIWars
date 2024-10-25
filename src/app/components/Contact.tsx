"use client";
import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-xl my-10 mx-auto p-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        Get in Touch
      </h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition duration-200"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-white mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition duration-200"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-white mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            required
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 transition duration-200"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-800 font-semibold py-2 rounded-md hover:bg-yellow-500 transition duration-200 transform hover:scale-105"
        >
          Submit Form
        </button>
      </form>
      {result && (
        <div className="mt-4 text-center text-white">
          <span>{result}</span>
        </div>
      )}
    </div>
  );
}
