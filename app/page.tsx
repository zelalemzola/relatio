import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>

        {/* Content */}
        <div className="relative px-6 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl text-center">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                Re<span className="text-blue-400">la</span>
                <span className="text-pink-400">t</span>
                <span className="text-purple-400">io</span>
              </h1>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Transform Your Relationship
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                In Just 3 Minutes
              </span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed">
              Get your personalized plan to strengthen your bond, improve
              communication, and create the loving relationship you deserve
            </p>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-gray-300">• 120,000+ success stories</span>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link
                href="/quiz"
                className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-2xl"
              >
                Start Your Free Assessment
              </Link>
              <p className="text-sm text-gray-300">
                ✨ Takes only 3 minutes • 100% personalized • Instant results
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-white">120K+</div>
                <div className="text-sm text-gray-300">Happy Couples</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">94%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">3 Min</div>
                <div className="text-sm text-gray-300">Quick Assessment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Relatio?
            </h3>
            <p className="text-xl text-gray-600">
              Science-backed strategies tailored to your unique relationship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Personalized Plan
              </h4>
              <p className="text-gray-600">
                Get a custom roadmap based on your specific relationship
                dynamics and goals
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Results
              </h4>
              <p className="text-gray-600">
                Start seeing improvements in your relationship within days, not
                months
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Proven Methods
              </h4>
              <p className="text-gray-600">
                Evidence-based techniques used by relationship experts worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
