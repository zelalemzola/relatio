import { useEffect, useState } from "react";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  analysisType: "insight" | "match" | "plan";
}

export function AnalysisModal({
  isOpen,
  onClose,
  analysisType,
}: AnalysisModalProps) {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const modalContent = {
    insight: {
      icon: "💡",
      title: "We noticed something...",
      message:
        "You have a unique communication style that creates deep connections",
      color: "from-yellow-400 to-orange-500",
    },
    match: {
      icon: "✨",
      title: "Perfect match detected!",
      message: "Your answers show incredible relationship potential",
      color: "from-purple-400 to-pink-500",
    },
    plan: {
      icon: "🎯",
      title: "Creating your plan...",
      message: "We're building something amazing just for you",
      color: "from-blue-400 to-indigo-500",
    },
  };

  const content = modalContent[analysisType];

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setShowContent(false);
      return;
    }

    // Show progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setShowContent(true);
          setTimeout(onClose, 2000); // Auto close after showing content
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-xs w-full mx-4 text-center transform transition-all duration-300 scale-100">
        {!showContent ? (
          // Loading state
          <div className="space-y-6">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-full flex items-center justify-center mx-auto`}
            >
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>

            <div className="space-y-3">
              <div className="w-full bg-gray-100 rounded-full h-1">
                <div
                  className={`bg-gradient-to-r ${content.color} h-1 rounded-full transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Analyzing your responses...
              </p>
            </div>
          </div>
        ) : (
          // Content state
          <div className="space-y-4 animate-fade-in">
            <div className="text-4xl mb-2">{content.icon}</div>
            <h3 className="text-lg font-bold text-gray-900">{content.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {content.message}
            </p>

            <div className="flex justify-center">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${content.color} rounded-full flex items-center justify-center`}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
