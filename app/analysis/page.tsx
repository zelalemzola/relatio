"use client";

import { useState, useEffect } from "react";

export default function AnalysisPage() {
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupAnswered, setPopupAnswered] = useState(false);

  useEffect(() => {
    // Simulate progress loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Redirect to email collection after analysis completes
          setTimeout(() => {
            window.location.href = "/email-collection";
          }, 1000);
          return 100;
        }

        // Show popup at 24% progress
        if (prev >= 24 && !showPopup && !popupAnswered) {
          setShowPopup(true);
        }

        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [showPopup, popupAnswered]);

  const handlePopupAnswer = (answer: "yes" | "no") => {
    setShowPopup(false);
    setPopupAnswered(true);
    // Store the answer if needed
    localStorage.setItem("finishInclined", answer);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold">
          Re<span className="text-blue-500">l</span>
          <span className="text-pink-500">a</span>
          <span className="text-purple-500">t</span>io
        </h1>
      </div>

      {/* Progress Circle */}
      <div className="relative mb-8">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="#3b82f6"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 50}`}
            strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
            className="transition-all duration-300 ease-out"
          />
        </svg>
        {/* Progress text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-900">{progress}%</span>
        </div>
      </div>

      {/* Status text */}
      <div className="text-center mb-12">
        <p className="text-gray-600 mb-2">Collecting your responses</p>
        <p className="text-gray-500">Analyzing your results</p>
      </div>

      {/* Social proof */}
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-blue-500 mb-2">120,000+ people</p>
        <p className="text-gray-700 font-semibold">have chosen our app</p>
      </div>

      {/* Testimonial */}
      <div className="bg-white rounded-lg shadow-sm p-6 max-w-md w-full">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
          <div>
            <p className="font-semibold text-gray-900">Kate Z</p>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">14 reviews</span>
              <span className="text-sm text-gray-500">US</span>
            </div>
          </div>
        </div>

        {/* Stars */}
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-green-500 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-gray-500">Verified</span>
          <span className="ml-auto text-sm text-gray-400">4 days ago</span>
        </div>

        <h3 className="font-bold text-gray-900 mb-2">
          He texted 'I love you'!
        </h3>
        <p className="text-gray-600 text-sm">
          He texted and said he loved me last night. I'm finding my voice and
          strength again. Now I feel as if I'm healing
        </p>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <p className="text-sm text-gray-500 mb-4 text-center">
              To move forward, specify
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
              Are you inclined to finish what you have started?
            </h3>

            <div className="flex gap-4">
              <button
                onClick={() => handlePopupAnswer("yes")}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>
                <span className="text-gray-700">Yes</span>
              </button>

              <button
                onClick={() => handlePopupAnswer("no")}
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                <span className="text-gray-700">No</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
