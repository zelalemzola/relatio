"use client";

import { useState } from "react";
import { setReportDraft } from "@/lib/report-utils";

export default function EmailCollectionPage() {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    if (email.trim()) {
      localStorage.setItem("userEmail", email);
      setReportDraft({ email: email.trim() });
      window.location.href = "/results";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">
            Re<span className="text-blue-500">l</span>
            <span className="text-pink-500">a</span>
            <span className="text-purple-500">t</span>io
          </h1>
        </div>

        {/* Main content */}
        <div className="mb-8">
          <p className="text-gray-700 mb-2">Enter your email to get</p>
          <p className="text-gray-700 mb-4">personal</p>
          <p className="text-blue-500 font-semibold text-lg">
            Get Your Ex Back Plan
          </p>
        </div>

        {/* Email input */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>
        </div>

        {/* Privacy text */}
        <div className="mb-8 text-xs text-gray-500">
          <p>We respect your privacy. By submitting your email</p>
          <p>
            address, you accept our{" "}
            <span className="underline">Terms & Conditions</span> and
          </p>
          <p>
            <span className="underline">Privacy Policy</span>
          </p>
        </div>

        {/* Continue button */}
        <button
          onClick={handleContinue}
          disabled={!email.trim()}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
