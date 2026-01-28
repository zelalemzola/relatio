"use client";

import { useState } from "react";

export default function ExNamePage() {
  const [name, setName] = useState("");

  const handleContinue = () => {
    if (name.trim()) {
      // Store ex's name and redirect to results
      localStorage.setItem("exName", name);
      window.location.href = "/results";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold">
            Re<span className="text-blue-500">l</span>
            <span className="text-pink-500">a</span>
            <span className="text-purple-500">t</span>io
          </h1>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            What's your Ex's name?
          </h2>

          {/* Name input */}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-center"
          />
        </div>

        {/* Privacy text */}
        <div className="mb-8 text-xs text-gray-500">
          <p>We respect your privacy and ensure all information is</p>
          <p>kept secure</p>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!name.trim()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
