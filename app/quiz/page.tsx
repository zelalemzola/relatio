"use client";

import { useState, useEffect } from "react";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { AnalysisModal } from "@/components/quiz/AnalysisModal";
import { getQuizQuestions, baseQuizQuestions } from "@/lib/quiz-data";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [quizQuestions, setQuizQuestions] = useState(baseQuizQuestions);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"insight" | "match" | "plan">(
    "insight",
  );

  // Define which questions trigger analysis modals
  const analysisPoints = [
    { questionIndex: 6, type: "insight" as const }, // After decision making questions
    { questionIndex: 14, type: "match" as const }, // After relationship improvement questions
    { questionIndex: 22, type: "plan" as const }, // Near the end
  ];

  // Update questions when partner gender is selected
  useEffect(() => {
    const partnerGender = answers[1]; // Partner selection is question 2 (index 1)
    if (partnerGender) {
      setQuizQuestions(getQuizQuestions(partnerGender));
    }
  }, [answers]);

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

    // Check if we should show an analysis modal
    const analysisPoint = analysisPoints.find(
      (point) => point.questionIndex === currentQuestion,
    );
    if (analysisPoint) {
      setModalType(analysisPoint.type);
      setShowModal(true);
      return;
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
    // Check if we should show an analysis modal
    const analysisPoint = analysisPoints.find(
      (point) => point.questionIndex === currentQuestion,
    );
    if (analysisPoint) {
      setModalType(analysisPoint.type);
      setShowModal(true);
      return;
    }

    // Advance to next question immediately for Continue button
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Quiz completed, redirect to analysis
      window.location.href = "/analysis";
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Continue to next question after modal closes
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Quiz completed, redirect to analysis
        window.location.href = "/analysis";
      }
    }, 500);
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
            partnerGender={answers[1]} // Pass the partner gender
          />
        </div>
      </div>

      <AnalysisModal
        isOpen={showModal}
        onClose={handleModalClose}
        analysisType={modalType}
      />
    </div>
  );
}
