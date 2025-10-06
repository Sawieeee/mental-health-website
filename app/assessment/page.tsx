"use client";

import { useState } from "react";
import "./AssessmentPage.css"; // Import CSS file

const questions = [
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
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

    if (totalScore <= 2) {
      setResult("✅ Low Stress: You’re managing your stress well.");
    } else if (totalScore <= 5) {
      setResult("⚠️ Moderate Stress: Consider practicing relaxation techniques.");
    } else {
      setResult(
        "❌ High Stress: It may help to talk to a counselor or mental health professional."
      );
    }
  };

  return (
    <div className="assessment-container">
      <h1 className="assessment-title">Self-Assessment Quiz</h1>
      <p className="assessment-description">
        Answer the following questions honestly to reflect on your current stress levels.
      </p>

      <div className="questions-wrapper">
        {questions.map((q) => (
          <div key={q.id} className="question-card">
            <h2 className="question-text">{q.text}</h2>
            <div className="options-group">
              {q.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => handleAnswer(q.id, opt.value)}
                  className={`option-button ${
                    answers[q.id] === opt.value ? "selected" : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="submit-container">
        <button onClick={calculateResult} className="submit-button">
          Submit Quiz
        </button>
      </div>

      {result && (
        <div className="result-box">
          <h2>Your Result</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
