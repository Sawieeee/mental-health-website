"use client";

import { useState } from "react";

type Question = {
  id: number;
  text: string;
  options: { label: string; value: number }[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "How often do you feel overwhelmed by responsibilities?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 2,
    text: "Do you experience trouble sleeping due to stress?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 3,
    text: "How often do you feel anxious about daily tasks?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
];

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

    if (totalScore <= 2) {
      setResult("✅ Low Stress: You’re managing your stress well.");
    } else if (totalScore <= 5) {
      setResult("⚠️ Moderate Stress: Consider practicing relaxation techniques.");
    } else {
      setResult("❌ High Stress: It may help to talk to a counselor or mental health professional.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Self-Assessment Quiz</h1>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Answer the following questions honestly to reflect on your current stress levels.
      </p>

      <div className="max-w-3xl mx-auto space-y-8">
        {questions.map((q) => (
          <div key={q.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">{q.text}</h2>
            <div className="flex flex-wrap gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(q.id, opt.value)}
                  className={`px-4 py-2 rounded-lg border ${
                    answers[q.id] === opt.value
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          onClick={calculateResult}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Quiz
        </button>
      </div>

      {result && (
        <div className="max-w-2xl mx-auto mt-8 bg-green-50 border border-green-300 text-green-800 p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-2">Your Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
