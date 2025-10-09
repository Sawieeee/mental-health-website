"use client";

import { useState } from "react";
import Image from "next/image";
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
  {
    id: 4,
    text: "How often do you feel sad or depressed?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 5,
    text: "Do you have difficulty concentrating or making decisions?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 6,
    text: "How often do you feel isolated or lonely?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 7,
    text: "Do you experience changes in your appetite (eating too much or too little)?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 8,
    text: "How often do you feel restless or on edge?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 9,
    text: "Do you avoid social activities or interactions with others?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 10,
    text: "How often do you feel tired or lack energy?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 11,
    text: "Do you have thoughts of harming yourself or feeling like life isn't worth living?",
    options: [
      { label: "Never", value: 0 },
      { label: "Rarely", value: 1 },
      { label: "Sometimes", value: 2 },
      { label: "Often", value: 3 },
    ],
  },
  {
    id: 12,
    text: "How often do you experience physical symptoms like headaches, muscle tension, or stomach problems?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 13,
    text: "Do you feel hopeless about your future?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 14,
    text: "How often do you use alcohol, drugs, or other substances to cope with stress?",
    options: [
      { label: "Never", value: 0 },
      { label: "Sometimes", value: 1 },
      { label: "Often", value: 2 },
      { label: "Almost Always", value: 3 },
    ],
  },
  {
    id: 15,
    text: "Do you feel like you have lost interest in activities you used to enjoy?",
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
    // Check if all questions are answered
    if (Object.keys(answers).length < questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const maxScore = questions.length * 3; // 15 questions × 3 points = 45
    
    // Check for crisis intervention (Question 11 - self-harm thoughts)
    if (typeof answers[11] !== "undefined" && answers[11] >= 2) {
      setResult(
        "🚨 IMMEDIATE ATTENTION NEEDED: You indicated thoughts of self-harm. Please reach out for immediate support:\n\n" +
        "• National Suicide Prevention Lifeline: 988\n" +
        "• Crisis Text Line: Text HOME to 741741\n" +
        "• Emergency Services: 911\n\n" +
        "Your life has value and help is available. Please don't hesitate to reach out."
      );
      return;
    }

    const percentage = (totalScore / maxScore) * 100;

    if (percentage <= 20) {
      setResult(
        "✅ Low Risk (Score: " + totalScore + "/45): You're managing your mental health well. Continue with healthy habits and self-care practices."
      );
    } else if (percentage <= 40) {
      setResult(
        "⚠️ Mild Concerns (Score: " + totalScore + "/45): You may be experiencing some stress or mild symptoms. Consider practicing stress management techniques, regular exercise, and maintaining social connections."
      );
    } else if (percentage <= 60) {
      setResult(
        "🟡 Moderate Concerns (Score: " + totalScore + "/45): You're experiencing moderate symptoms that may be impacting your daily life. Consider speaking with a counselor, therapist, or your healthcare provider for support and guidance."
      );
    } else if (percentage <= 80) {
      setResult(
        "🔴 High Concerns (Score: " + totalScore + "/45): You're experiencing significant symptoms that are likely affecting your quality of life. It's strongly recommended to seek professional help from a mental health professional or your doctor."
      );
    } else {
      setResult(
        "🚨 Severe Concerns (Score: " + totalScore + "/45): You're experiencing severe symptoms that require immediate attention. Please contact a mental health professional, your doctor, or a crisis helpline right away. Help is available and you don't have to face this alone."
      );
    }
  };

  return (
    <div className="assessment-container">
      <h1 className="assessment-title">Mental Health Self-Assessment</h1>
      <p className="assessment-description">
        This comprehensive assessment covers various aspects of mental health including stress, anxiety, depression, and overall well-being. Please answer all questions honestly based on how you have been feeling over the past two weeks. This is not a diagnostic tool, but can help identify areas where you might benefit from additional support.
      </p>
      <Image src="/images/assessment-illustration.svg" alt="Assessment" width={640} height={200} style={{display: 'block', margin: '0 auto 1.5rem'}} />
      <p className="assessment-disclaimer" style={{fontSize: '14px', fontStyle: 'italic', color: '#666', marginBottom: '20px'}}>
        <strong>Important:</strong> This assessment is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, please seek immediate help.
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
