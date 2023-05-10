// import React, { useState, useEffect } from "react";

// //based on https://opentdb.com/api.php?amount=10&category=9&type=multiple
// //create a trivia app that displays 10 questions from the api and allows the user to select an answer
// //after the user has answered all 10 questions and clicks submit, display the number of correct answers
// //show the score achieved by the user on the top right corner of the screen

// function testing() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [showScore, setShowScore] = useState(false);

//   useEffect(() => {
//     fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestions(data.results);
//       });
//   }, []);

//   const handleAnswerOptionClick = (isCorrect) => {
//     if (isCorrect) {
//       setScore(score + 1);
//     }

//     const nextQuestion = currentQuestion + 1;
//     if (nextQuestion < questions.length) {
//       setCurrentQuestion(nextQuestion);
//     } else {
//       setShowScore(true);
//     }
//   };

//   return (
//     <div className="app">
//       {showScore ? (
//         <div className="score-section">
//           You scored {score} out of {questions.length} !
//         </div>
//       ) : (
//         <>
//           <div className="question-section">
//             <div className="question-count">
//               <span>Question {currentQuestion + 1}</span>/{questions.length}
//             </div>
//             <div className="question-text">
//               {questions[currentQuestion]?.question}
//             </div>
//           </div>
//           <div className="answer-section">
//             {questions[currentQuestion]?.incorrect_answers.map(
//               (answerOption, index) => (
//                 <button
//                   key={index}
//                   onClick={() => handleAnswerOptionClick(false)}
//                 >
//                   {answerOption}
//                 </button>
//               )
//             )}
//             <button onClick={() => handleAnswerOptionClick(true)}>
//               {questions[currentQuestion]?.correct_answer}
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default testing;
