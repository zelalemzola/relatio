import { ArrowLeft } from "lucide-react";

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  onBack: () => void;
}

export function QuizHeader({
  currentQuestion,
  totalQuestions,
  onBack,
}: QuizHeaderProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="bg-white px-4 py-4 border-b border-gray-200">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          disabled={currentQuestion === 1}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            Re<span className="text-purple-600">la</span>
            <span className="text-pink-500">t</span>io
          </span>
        </div>

        <div className="text-sm text-gray-500 font-medium">
          {String(currentQuestion).padStart(2, "0")} /{" "}
          {String(totalQuestions).padStart(2, "0")}
        </div>
      </div>

      <div className="max-w-md mx-auto mt-4">
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
