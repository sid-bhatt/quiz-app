import './App.css';
import {useState} from 'react';

function App() {

  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        {answerText: "New York", isCorrect: false},
        {answerText: "Sydney", isCorrect: false},
        {answerText: "Paris", isCorrect: true},
        {answerText: "London", isCorrect: false},
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        {answerText: "Apple", isCorrect: true},
        {answerText: "Google", isCorrect: false},
        {answerText: "Amazon", isCorrect: false},
        {answerText: "Microsoft", isCorrect: false},
      ],
    },
    {
      questionText: "What is the curency of Japan?",
      answerOptions: [
        {answerText: "Dinar", isCorrect: false},
        {answerText: "Yen", isCorrect: true},
        {answerText: "Dollars", isCorrect: false},
        {answerText: "Pounds", isCorrect: false},
      ],
    },
    {
      questionText: "Which is the biggest planet in our solar system?",
      answerOptions: [
        {answerText: "Saturn", isCorrect: false},
        {answerText: "Mars", isCorrect: false},
        {answerText: "Jupiter", isCorrect: true},
        {answerText: "Uranus", isCorrect: false},
      ],
    },
    {
      questionText: "Who is the CEO of Tesla?",
      answerOptions: [
        {answerText: "Jeff Bezos", isCorrect: false},
        {answerText: "Bill Gates", isCorrect: false},
        {answerText: "Sundar Pichai", isCorrect: false},
        {answerText: "Elon Musk", isCorrect: true},
      ],
    },
  ]

  const [currQuestion, setCurrQuestion] = useState(0);
  const [score, setScore] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleClick = (isCorrect) => {
    if(isCorrect === true){
      setTotalScore(totalScore + 1);
    }
    const nextQuestion = currQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrQuestion(nextQuestion);
    }
    else {
      setScore(true);
    }
  }

  return (
    <div className="App">
      {score ? (
        <div className="score-section">You scored {totalScore} out of {questions.length}</div>
      ) : (
        <>
        <div className="question-section">
          <div className="question-section">
            <h2>Question {currQuestion+1}/{questions.length}</h2>
          </div>
          <div className="question-text">
          <h2>{questions[currQuestion].questionText}</h2>
          </div>
        </div>
          <div className="answer-section">
            {questions[currQuestion].answerOptions.map((answerOption) => {
              return <button onClick={() => handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            })}
        </div>
       </>
      )}
      
    </div>
  );
}

export default App;
