import { QuizQuestionType } from "@/lib/quiz-data";
import { useState } from "react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: any;
  onAnswer: (answer: any) => void;
  onContinue: () => void;
  partnerGender?: string;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  onContinue,
  partnerGender,
}: QuizQuestionProps) {
  const [textInput, setTextInput] = useState<string>(
    typeof selectedAnswer === "string" ? selectedAnswer : "",
  );

  const handleMultiSelect = (value: string) => {
    const currentSelections = Array.isArray(selectedAnswer)
      ? selectedAnswer
      : [];
    let newSelections;

    if (currentSelections.includes(value)) {
      newSelections = currentSelections.filter((item) => item !== value);
    } else {
      if (currentSelections.length < (question.maxSelections || 3)) {
        newSelections = [...currentSelections, value];
      } else {
        return; // Don't allow more selections than max
      }
    }

    onAnswer(newSelections);
  };

  const handleTextInputChange = (value: string) => {
    setTextInput(value);
    onAnswer(value);
  };

  if (question.type === "text-input") {
    return (
      <div className="text-center space-y-6 px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            value={textInput}
            onChange={(e) => handleTextInputChange(e.target.value)}
            placeholder={question.placeholder}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-center"
          />

          <div className="text-xs text-gray-500">
            <p>We respect your privacy and ensure all information is</p>
            <p>kept secure</p>
          </div>

          {textInput.trim() && (
            <button
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }

  if (question.type === "rating-scale") {
    return (
      <div className="text-center space-y-6 px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-4">
          <div className="flex justify-center space-x-3">
            {Array.from({ length: question.ratingRange?.max || 5 }, (_, i) => {
              const value = i + 1;
              return (
                <button
                  key={value}
                  onClick={() => onAnswer(value)}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 font-semibold transition-colors text-sm ${
                    selectedAnswer === value
                      ? "border-purple-500 bg-purple-500 text-white"
                      : "border-gray-300 text-gray-600 hover:border-purple-300"
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between text-xs sm:text-sm text-gray-500 px-2">
            <span>{question.ratingRange?.minLabel}</span>
            <span>{question.ratingRange?.maxLabel}</span>
          </div>
        </div>
      </div>
    );
  }

  if (question.type === "text-only") {
    return (
      <div className="text-center space-y-6 px-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className={`w-full p-3 sm:p-4 rounded-xl border transition-colors text-center ${
                selectedAnswer === option.value
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-gray-700 text-sm sm:text-base">
                {option.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === "multi-select") {
    const currentSelections = Array.isArray(selectedAnswer)
      ? selectedAnswer
      : [];
    const hasSelections = currentSelections.length > 0;

    return (
      <div className="relative min-h-screen">
        <div className="text-center space-y-8 pb-24">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {question.title}
            </h2>
            {question.subtitle && (
              <p className="text-gray-600">{question.subtitle}</p>
            )}
          </div>

          <div className="space-y-4">
            {question.options?.map((option, index) => {
              const isSelected = currentSelections.includes(option.value);
              return (
                <button
                  key={index}
                  onClick={() => handleMultiSelect(option.value)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-colors ${
                    isSelected
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{option.emoji}</span>
                    <span className="text-gray-700">{option.text}</span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      isSelected
                        ? "border-purple-500 bg-purple-500"
                        : "border-gray-300"
                    }`}
                  >
                    {isSelected && (
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
                </button>
              );
            })}
          </div>
        </div>

        {hasSelections && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="max-w-md mx-auto">
              <button
                onClick={onContinue}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (question.type === "age-selection") {
    return (
      <div className="text-center space-y-6 px-4">
        <div>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight">
            LET'S CREATE YOUR PERSONAL
          </h1>
          <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
            PLAN TO STRENGTHEN YOUR RELATIONSHIP
          </h1>
          <p className="text-base text-gray-600">Take a 3-minute quiz</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className="bg-white rounded-xl p-3 border border-gray-200 hover:border-purple-500 transition-colors"
            >
              <div className="mb-3">
                <div className="w-full h-20 sm:h-24 rounded-lg mb-2 overflow-hidden">
                  <img
                    src={`/${option.value}.png`}
                    alt={option.text}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-3 rounded-lg font-medium text-sm">
                {option.text}
              </div>
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-400 space-y-1 px-2">
          <p>
            By proceeding further, you agree to our Terms of Use, Privacy Policy
            and Cookie Policy.
          </p>
        </div>
      </div>
    );
  }

  if (question.type === "partner-selection") {
    return (
      <div className="text-center space-y-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Let's tailor your plan
        </h2>
        <p className="text-gray-600">Your partner is:</p>

        <div className="space-y-4">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className={`w-full flex items-center space-x-3 p-4 rounded-2xl border transition-colors ${
                selectedAnswer === option.value
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-2xl">{option.emoji}</span>
              <span className="text-gray-700">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === "social-proof") {
    // Gender-specific testimonials
    const maleTestimonials = [
      {
        name: "Michael R",
        location: "US",
        rating: 5,
        title: "Finally understand my wife better",
        content:
          "This program opened my eyes to what my wife really needs. Our relationship has never been stronger. Highly recommend!",
        verified: true,
        daysAgo: 3,
      },
      {
        name: "David K",
        location: "CA",
        rating: 5,
        title: "Game changer for our marriage",
        content:
          "I was skeptical at first, but the techniques really work. My wife says I'm a completely different person now - in the best way!",
        verified: true,
        daysAgo: 7,
      },
    ];

    const femaleTestimonials = [
      {
        name: "Sarah M",
        location: "US",
        rating: 5,
        title: "Our communication improved so much!",
        content:
          "After following the plan for just 2 weeks, my husband and I are talking more openly than we have in years. The techniques really work!",
        verified: true,
        daysAgo: 5,
      },
      {
        name: "Jessica L",
        location: "CA",
        rating: 5,
        title: "Saved our marriage",
        content:
          "We were on the brink of separation, but this program helped us reconnect. We're stronger than ever now. Thank you Relatio!",
        verified: true,
        daysAgo: 8,
      },
    ];

    // Choose testimonials based on partner gender (if user has a male partner, they are likely female, so show female testimonials)
    const testimonials =
      partnerGender === "man" ? femaleTestimonials : maleTestimonials;

    return (
      <div className="text-center space-y-6 px-4">
        <div>
          <p className="text-purple-600 text-lg font-medium">120,000+ people</p>
          <p className="text-gray-700">have chosen Relatio</p>
        </div>

        <div className="relative">
          <img
            src="/120,000people.png"
            alt="120,000+ people have chosen Relatio"
            className="w-full max-w-xs mx-auto"
          />
        </div>

        <div>
          <p className="text-gray-600 text-sm">
            We've helped thousands of couples
          </p>
          <p className="text-gray-600 text-sm">
            strengthen their relationships
          </p>
        </div>

        {/* Testimonials */}
        <div className="space-y-4 mt-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-4 text-left"
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{testimonial.location}</span>
                    {testimonial.verified && (
                      <>
                        <span>•</span>
                        <span>Verified</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {testimonial.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            onAnswer("continue");
            onContinue();
          }}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
        >
          Continue
        </button>
      </div>
    );
  }

  if (question.type === "decision-making") {
    return (
      <div className="text-center space-y-8">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-4">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className={`w-full flex items-center space-x-3 p-4 rounded-2xl border transition-colors ${
                selectedAnswer === option.value
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-2xl">{option.emoji}</span>
              <span className="text-gray-700">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (question.type === "elements") {
    return (
      <div className="text-center space-y-6 px-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="grid grid-cols-2 gap-3">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className={`p-3 rounded-xl border transition-colors ${
                selectedAnswer === option.value
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="mb-3">
                <div className="w-full h-16 sm:h-20 rounded-lg mb-2 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.text}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    selectedAnswer === option.value
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedAnswer === option.value && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
                <span className="text-gray-700 font-medium text-sm">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default question type with emoji options
  return (
    <div className="text-center space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">{question.title}</h2>

      <div className="space-y-4">
        {question.options?.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.value)}
            className={`w-full flex items-center space-x-3 p-4 rounded-2xl border transition-colors ${
              selectedAnswer === option.value
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <span className="text-2xl">{option.emoji}</span>
            <span className="text-gray-700">{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
