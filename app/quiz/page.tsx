"use client";

import { useState } from "react";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { quizQuestions } from "@/lib/quiz-data";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});

  const handleAnswer = (answer: any) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));

    // For multi-select and text-input questions, don't auto-advance
    if (
      quizQuestions[currentQuestion].type === "multi-select" ||
      quizQuestions[currentQuestion].type === "text-input"
    ) {
      return; // User needs to click Continue button
    }

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Quiz completed, redirect to analysis
        window.location.href = "/analysis";
      }
    }, 300);
  };

  const handleContinue = () => {
    // Advance to next question immediately for Continue button
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Quiz completed, redirect to analysis
      window.location.href = "/analysis";
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const currentQuestionData = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <QuizHeader
        currentQuestion={currentQuestion + 1}
        totalQuestions={totalQuestions}
        onBack={handleBack}
      />

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <QuizQuestion
            question={currentQuestionData}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}
