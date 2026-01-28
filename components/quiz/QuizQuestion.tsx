import { QuizQuestionType } from "@/lib/quiz-data";
import { useState } from "react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: any;
  onAnswer: (answer: any) => void;
  onContinue: () => void;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onAnswer,
  onContinue,
}: QuizQuestionProps) {
  const [multiSelectAnswers, setMultiSelectAnswers] = useState<string[]>(
    Array.isArray(selectedAnswer) ? selectedAnswer : [],
  );
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

    setMultiSelectAnswers(newSelections);
    onAnswer(newSelections);
  };

  const handleTextInputChange = (value: string) => {
    setTextInput(value);
    onAnswer(value);
  };

  if (question.type === "text-input") {
    return (
      <div className="text-center space-y-8">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-6">
          <input
            type="text"
            value={textInput}
            onChange={(e) => handleTextInputChange(e.target.value)}
            placeholder={question.placeholder}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-center"
          />

          <div className="text-xs text-gray-500">
            <p>We respect your privacy and ensure all information is</p>
            <p>kept secure</p>
          </div>

          {textInput.trim() && (
            <button
              onClick={onContinue}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors"
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
      <div className="text-center space-y-8">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-6">
          <div className="flex justify-center space-x-4">
            {Array.from({ length: question.ratingRange?.max || 5 }, (_, i) => {
              const value = i + 1;
              return (
                <button
                  key={value}
                  onClick={() => onAnswer(value)}
                  className={`w-12 h-12 rounded-full border-2 font-semibold transition-colors ${
                    selectedAnswer === value
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-gray-300 text-gray-600 hover:border-blue-300"
                  }`}
                >
                  {value}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between text-sm text-gray-500 px-2">
            <span>{question.ratingRange?.minLabel}</span>
            <span>{question.ratingRange?.maxLabel}</span>
          </div>
        </div>
      </div>
    );
  }

  if (question.type === "text-only") {
    return (
      <div className="text-center space-y-8">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className={`w-full p-4 rounded-2xl border transition-colors text-center ${
                selectedAnswer === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <span className="text-gray-700">{option.text}</span>
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
                      ? "border-blue-500 bg-blue-50"
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
                        ? "border-blue-500 bg-blue-500"
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
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-full font-medium hover:bg-blue-700 transition-colors"
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
      <div className="text-center space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            LET'S CREATE YOUR PERSONAL
          </h1>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            PLAN TO REKINDLE YOUR LOVE
          </h1>
          <p className="text-lg text-gray-600">Take a 3-minute quiz</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <div className="mb-4">
                <div className="w-full h-32 rounded-xl mb-3 overflow-hidden">
                  <img
                    src={`/${option.value}.png`}
                    alt={option.text}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-blue-600 text-white py-3 px-4 rounded-xl font-medium">
                {option.text}
              </div>
            </button>
          ))}
        </div>

        <div className="text-xs text-gray-400 space-y-1">
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
                  ? "border-blue-500 bg-blue-50"
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
    return (
      <div className="text-center space-y-8">
        <div>
          <p className="text-blue-600 text-lg font-medium">120,000+ people</p>
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
            We've helped thousands of women
          </p>
          <p className="text-gray-600 text-sm">restore their relationships</p>
        </div>

        <button
          onClick={() => {
            onAnswer("continue");
            onContinue();
          }}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
                  ? "border-blue-500 bg-blue-50"
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
      <div className="text-center space-y-8">
        <h2 className="text-xl font-semibold text-gray-900">
          {question.title}
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {question.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className={`p-4 rounded-2xl border transition-colors ${
                selectedAnswer === option.value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="mb-4">
                <div className="w-full h-24 rounded-xl mb-3 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.text}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-5 h-5 rounded-full border-2 ${
                    selectedAnswer === option.value
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  {selectedAnswer === option.value && (
                    <div className="w-full h-full rounded-full bg-white scale-50"></div>
                  )}
                </div>
                <span className="text-gray-700 font-medium">{option.text}</span>
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
                ? "border-blue-500 bg-blue-50"
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
