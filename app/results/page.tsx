"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultsPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("4-week");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const plans = [
    {
      id: "4-week",
      name: "4-week plan",
      originalPrice: "$59.99",
      price: "$2.00",
      period: "per day",
      popular: true,
      amount: 59.99,
    },
    {
      id: "12-week",
      name: "12-week plan",
      originalPrice: "$99.99",
      price: "$1.11",
      period: "per day",
      popular: false,
      amount: 99.99,
    },
    {
      id: "24-week",
      name: "24-week plan",
      originalPrice: "$159.99",
      price: "$0.89",
      period: "per day",
      popular: false,
      amount: 159.99,
    },
  ];

  const handleGetMyPlan = () => {
    const plan = plans.find((p) => p.id === selectedPlan);
    if (!plan) return;
    const params = new URLSearchParams({
      plan: plan.name,
      amount: String(plan.amount),
    });
    router.push(`/payment?${params.toString()}`);
  };

  const benefits = [
    "Elevated self-esteem",
    "Personal step-by-step plan crafted by professionals to meet your goal",
    "Highly effective life-changing tools picked individually for you",
    "Knowledge and skills to build happy relationship in the future",
  ];

  const faqs = [
    {
      question: "Why should I choose this plan?",
      answer:
        "Our personalized plan is designed specifically for your situation based on your quiz responses. It provides proven strategies and techniques that have helped thousands of women successfully reconnect with their partners.",
    },
    {
      question: "How I can benefit from this plan?",
      answer:
        "You'll receive a customized roadmap with daily actions, communication strategies, and personal development exercises. The plan focuses on rebuilding your confidence, improving your relationship skills, and creating lasting positive changes.",
    },
    {
      question: "What do I need to succeed?",
      answer:
        "All you need is commitment to follow the plan and an open mind to personal growth. The plan provides everything else - detailed instructions, daily tasks, and ongoing support to guide you through the process.",
    },
    {
      question: "What if it's hard for me to stay motivated?",
      answer:
        "The plan includes built-in motivation techniques, progress tracking, and regular check-ins to keep you on track. You'll also have access to our support community and resources to help maintain your motivation throughout the journey.",
    },
  ];

  const testimonials = [
    {
      name: "Kate Z",
      reviews: "14 reviews",
      location: "US",
      rating: 5,
      title: "He texted 'I love you'!",
      content:
        "He texted and said he loved me last night. I'm finding my voice and strength again. Now I feel as if I'm healing",
      verified: true,
      daysAgo: 4,
    },
    {
      name: "Sophia B",
      reviews: "1 reviews",
      location: "US",
      rating: 5,
      title: "I couldn't believe, but it works!",
      content:
        "I love this program. It has been very informative, helpful, and supportive. I have had multiple phone calls and dates with my ex after the 'no contact rule.' All went really well and he noticed my emotional growth within 2 months. His anxiety around our relationship is melting away. His statement",
      verified: true,
      daysAgo: 3,
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <h1 className="text-xl font-bold">
            Re<span className="text-purple-500">l</span>
            <span className="text-pink-500">a</span>
            <span className="text-purple-500">t</span>io
          </h1>
          <button
            onClick={handleGetMyPlan}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            GET MY PLAN
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-6 space-y-8">
        {/* Now vs Goal Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">Now</h2>
            <h2 className="text-2xl font-bold text-purple-500">Goal</h2>
          </div>

          <div className="relative">
            <img
              src="/nowgoal.webp"
              alt="Now vs Goal transformation"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Goal:</p>
                <p className="text-purple-500 font-semibold">
                  Stronger Relationship
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Probability of Success:
                </p>
                <p className="text-purple-500 font-semibold">High</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Plan Graph Section */}
        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-700 mb-2">Here is your Personal</p>
            <p className="text-purple-500 font-semibold text-lg">
              Relationship Strengthening Plan
            </p>
          </div>

          <div className="relative">
            <img
              src="/personalplangraph.webp"
              alt="Personal plan progress graph"
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Relationship dynamics decoded...
                </span>{" "}
                Understanding what makes your partnership thrive
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Communication strategies</span>{" "}
                that create deeper connection and understanding
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Proven techniques</span> to
                build lasting intimacy and trust
              </p>
            </div>
          </div>

          {/* ADD FREE PDF Toggle */}
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">❤️</div>
              <div>
                <p className="font-semibold text-gray-900">ADD FREE PDF</p>
                <p className="text-sm text-gray-600">
                  10 social media post templates
                </p>
              </div>
            </div>
            <div className="relative">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="w-12 h-6 bg-purple-500 rounded-full shadow-inner">
                <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-6 transition-transform"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Pricing Plans */}
        <div className="text-center space-y-6">
          <div>
            <p className="text-gray-700 mb-2">Here is your Personal</p>
            <p className="text-purple-500 font-semibold text-lg">
              Relationship Strengthening Plan
            </p>
          </div>

          <div className="space-y-4">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedPlan === plan.id
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 bg-white"
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      most popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedPlan === plan.id
                          ? "border-purple-500 bg-purple-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedPlan === plan.id && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-purple-500">
                        {plan.name}
                      </p>
                      <p className="text-sm text-gray-500 line-through">
                        {plan.originalPrice}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="bg-purple-500 text-white px-3 py-1 rounded-full">
                      <span className="text-lg font-bold">{plan.price}</span>
                      <span className="text-sm ml-1">{plan.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleGetMyPlan}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
          >
            GET MY PLAN
          </button>

          <div className="text-xs text-gray-500 leading-relaxed">
            <p>
              By clicking "Get My Plan" you agree to enroll in a monthly
              subscription to https://getrelatio.com/ service. The 1-month trial
              costs $59.99. If you don't cancel during your 1-month trial, your
              subscription will automatically renew until you cancel and you
              will be billed $59.99 every 1 month. Payments are charged from the
              card you specified here. You can cancel your subscription by
              contacting our customer support team via email at
              support@getrelatio.com.{" "}
              <span className="underline">Subscription Policy</span>
            </p>
          </div>
        </div>

        {/* What you get section */}
        <div className="space-y-6">
          {/* Payment Security */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-sm">Pay safe and secure</span>
            </div>
            <Image
              src="/visa.png"
              alt="visa"
              width={340}
              height={340}
              className="mx-auto"
            />
            {/* <div className="flex justify-center space-x-3">
              <div className="h-8 w-12 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                VISA
              </div>
              <div className="h-8 w-12 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                MC
              </div>
              <div className="h-8 w-12 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                PP
              </div>
              <div className="h-8 w-12 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                JCB
              </div>
              <div className="h-8 w-12 bg-orange-500 rounded text-white text-xs flex items-center justify-center font-bold">
                DC
              </div>
              <div className="h-8 w-12 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">
                AE
              </div>
            </div> */}
          </div>

          {/* Star Rating */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-purple-500 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-gray-900">12,369</p>
              <p className="text-gray-600 font-semibold">5-star rating</p>
              <p className="text-sm text-gray-500 mt-2">
                Based on Relatio clients reviews and feedback
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              What you get?
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Women Love Relatio Section */}
        <div className="space-y-6">
          <h3 className="text-center text-xl font-semibold">
            <span className="text-purple-500">Women</span>{" "}
            <span className="text-pink-500">💖</span>{" "}
            <span className="text-purple-500">Relatio</span>
          </h3>

          <div className="space-y-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-4 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{testimonial.reviews}</span>
                      <span>•</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-green-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    {testimonial.verified && (
                      <span className="text-xs text-gray-500">• Verified</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-400">
                    {testimonial.daysAgo} days ago
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {testimonial.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 text-center">
            FAQ
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-3">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left py-2"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {index + 1}. {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedFaq === index && (
                  <div className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 30-Day Money-Back Guarantee */}
        <div className="bg-white border-2 border-blue-500 rounded-lg p-6 text-center space-y-4">
          <h3 className="text-xl font-bold text-gray-900">
            30-Day Money-Back Guarantee
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Our plan is backed by a 100% money-back guarantee. We are so
            confident about our program that we guarantee a full refund within
            30 days after purchase if you don't see positive transformation in
            your intimate wellbeing and can prove that you followed your plan as
            directed.
          </p>

          <div className="flex justify-center">
            <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
              <div className="bg-black text-yellow-400 rounded-full w-30 h-30 flex items-center justify-center text-xs font-bold">
                <div className="text-center">
                  <div>100%</div>
                  <div>GUARANTEED</div>
                  <div className="text-yellow-300">MONEY BACK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
