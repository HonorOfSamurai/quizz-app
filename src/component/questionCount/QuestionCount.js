import React from "react";
import "./questionCount.css";

const QuestionCount = (props) => {
  const questions = new Array(props.questionLength).fill(null);

  const handleClick = (order) => {
    props.setQuestionOrder(order);
  };

  return (
    <div>
      <h4>
        Question {props.currentQuestion} / {props.questionLength}
      </h4>
      <div className="count-block">
        {questions.map((item, index) => {
          let isCurrentQuestion = false;
          if (index + 1 === props.currentQuestion) {
            isCurrentQuestion = true;
          }
          return (
            <div
              className="circle"
              style={isCurrentQuestion ? { background: "#ff6363" } : null}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCount;