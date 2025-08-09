import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import Question from "./components/Question";
import Results from "./components/Results";
import { UserProvider } from "./components/UserContext";
import UserForm from "./components/UserForm";
import PixelSprites from "./components/PixelSprites";

const questions = [
  {
    question: "When people come to you for help, what do they usually want help with?",
    options: ["studies", "life advices", "tea", "i dont help anyone"],
  },
  {
    question: "Do you ever sing when you're alone?",
    options: ["YESSS", "no.", "w-who knows..", "yes."],
  },
  {
    question: "Pancakes or waffles?",
    options: ["PANCAKES", "none.", "WAFFLES", "BOTH"],
  },
  {
    question: "Do you have any nicknames?",
    options: ["yeah i love them", "i prefer my actual name", "not telling", "no??"],
  },
  {
    question: "What's something you learned in the last week?",
    options: ["time doesnt wait for anyone..", "life is unpredictable", "plans may fail", "i made cake"],
  },
  {
    question: "What's one place you've went to that you never would ever go back?",
    options: ["my home..", "PUBLIC TOILETS", "a room full of people", "i dont wanna go ANYWHERE"],
  },
  {
    question: "What's the best piece of advice you ever received?",
    options: ["Believe you can and youre halfway there", "you wish you knew it sooner", "remember your roots", "decieve yourself"],
  },
  {
    question: "If you inherited or won a million dollars, what’s the very first thing you would do with the money?",
    options: ["I WOULD GO AND EAT", "idk im already rich", "help the poor and open an orphanage", "guess"],
  },
  {
    question: "What’s something you always wanted to do as a child but never got to do it?",
    options: ["Get a full 8 hours of sleep and emotional stability.", "Win an argument against my mom", "Sell my teacher on eBay", "Stick googly eyes on every object in the house. Even the dog."],
  },
  {
    question: "what’s the highest level of pain you’ve ever been in?",
    options: ["stepped on a LEGO barefoot ", "Pain is an illusion. Only for the Weak.", "when someone used Comic Sans in a serious document.", "void is my fries"],
  },
];

const solutions = {
  "studies": "Castorice",
  "life advices": "Hyacine",
  "tea": "Aglaea",
  "i dont help anyone": "Anaxa",
  "YESSS": "Hyacine",
  "no.": "Anaxa",
  "w-who knows..": "Castorice",
  "yes.": "Mydei",
  "PANCAKES": "Phainon",
  "none.": "Anaxa",
  "WAFFLES": "Tribbie",
  "BOTH": "Tribbie",
  "yeah i love them": "Phainon",
  "i prefer my actual name": "Anaxa",
  "not telling": "Mydei",
  "no??": "Aglaea",
  "time doesnt wait for anyone..": "Phainon",
  "life is unpredictable": "Hyacine",
  "plans may fail": "Mydei",
  "i made cake": "Tribbie",
  "my home..": "Anaxa",
  "PUBLIC TOILETS": "Aglaea",
  "a room full of people": "Anaxa",
  "i dont wanna go ANYWHERE": "Castorice",
  "Believe you can and youre halfway there": "Phainon",
  "you wish you knew it sooner": "Mydei",
  "remember your roots": "Tribbie",
  "decieve yourself": "Anaxa",
  "I WOULD GO AND EAT": "Phainon",
  "idk im already rich": "Aglaea",
  "help the poor and open an orphanage":"Hyacine",
  "guess":"Cipher",
  "Get a full 8 hours of sleep and emotional stability.":"Castorice",
  "Win an argument against my mom":"Tribbie",
  "Sell my teacher on eBay":"Anaxa",
  "Stick googly eyes on every object in the house. Even the dog.":"Hyacine",
  "stepped on a LEGO barefoot":"Cipher",
  "Pain is an illusion. Only for the Weak.":"Mydei",
  "when someone used Comic Sans in a serious document.":"Anaxa",
  "void is my fries":"Phainon" 
};

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [character, setCharacter] = useState("");
  const navigate = useNavigate();

  function handleAnswer(answer) {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function determineCharacter(answers) {
    const counts = {};
    answers.forEach((answer) => {
      const character = solutions[answer];
      counts[character] = (counts[character] || 0) + 1;
    });
    
    // Get character with highest count
    const result = Object.keys(counts).reduce((a, b) => 
      counts[a] > counts[b] ? a : b
    );
    
    return result;
  }

  useEffect(() => {
    if (currentQuestionIndex === questions.length && answers.length === questions.length) {
      const resultCharacter = determineCharacter(answers);
      setCharacter(resultCharacter);
    }
  }, [currentQuestionIndex, answers]);

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCharacter("");
    navigate("/quiz");
  };

  return (
    <UserProvider>
      <div className="app-container">
        <PixelSprites />
        <div className="content-box">
        <Header />
        <Routes>
          <Route path="/" element={<UserForm />} />
          <Route
            path="/quiz"
            element={
              currentQuestionIndex < questions.length ? (
                <Question
                  question={questions[currentQuestionIndex].question}
                  options={questions[currentQuestionIndex].options}
                  onAnswer={handleAnswer}
                />
              ) : (
                <Results character={character}
                onRetry={resetQuiz} />
              )
            }
          />
        </Routes>
      </div>
      </div>
    </UserProvider>
  );
}