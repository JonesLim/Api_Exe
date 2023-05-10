import React, { useState, useEffect } from "react";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert(`You scored ${score} out of ${questions.length} !`);
      setCurrentQuestion(0);
      setScore(0);
    }
  };

  return (
    <div>
      <div>
        Score: {score} / {questions.length}
      </div>
      <div>
        <div>
          Question {currentQuestion + 1}/{questions.length}
        </div>
        <div>{questions[currentQuestion]?.question}</div>
      </div>
      <div>
        {questions[currentQuestion]?.incorrect_answers.map(
          (answerOption, index) => (
            <button key={index} onClick={() => handleAnswerOptionClick(false)}>
              {answerOption}
            </button>
          )
        )}
        <button onClick={() => handleAnswerOptionClick(true)}>
          {questions[currentQuestion]?.correct_answer}
        </button>
      </div>
    </div>
  );
}

export default App;
