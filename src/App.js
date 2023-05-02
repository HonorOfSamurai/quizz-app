import { useState } from "react";
import "./App.css";
import QuestionCount from "./component/questionCount/QuestionCount";
import QuizCard from "./component/quizcard/QuizCard";
import { questions } from "./data";

function App() {
  const [questionOrder, setQuestionOrder] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedQuestions, setSelectedQuestions] = useState({});

  // console.log(selectedOption);
  // console.log(selectedQuestions);

  return (
    <div className="container">
      <div className="main-block">
        <QuizCard
          questionNumber={questionOrder}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          selectedQuestions={selectedQuestions}
          setSelectedQuestions={setSelectedQuestions}
          changeQuestion={setQuestionOrder}
          lenQuestions={questions.length}
          question={questions[questionOrder].question}
          options={questions[questionOrder].options}
        />
        <QuestionCount
          currentQuestion={questionOrder + 1}
          questionLength={questions.length}
          setQuestionOrder={setQuestionOrder}
        />
      </div>
    </div>
  );
}

export default App;