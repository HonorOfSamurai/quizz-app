import React, { useState } from "react";
import "./QuizCard.css";
import { questions } from "../../data";
export default function QuizCard(props) {
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const clickPrev = () => {
    props.changeQuestion((prevValue) => {
      if (prevValue > 0) {
        return prevValue - 1;
      } else {
        return prevValue;
      }
    });
    props.setSelectedOption(props.selectedQuestions[props.questionNumber - 1]);
    console.log(props.selectedQuestions);
  };

  const clickNext = () => {
    props.changeQuestion((prevValue) => {
      if (prevValue < props.lenQuestions - 1) {
        return prevValue + 1;
      } else {
        return prevValue;
      }
    });
    props.setSelectedOption(props.selectedQuestions[props.questionNumber + 1]);
    console.log(props.selectedQuestions);
  };

  const finishTest = () => {
    let result = questions.reduce((prevValue, item, index) => {
      if (item.answer === props.selectedQuestions[index]) {
        return prevValue + 1;
      } else {
        return prevValue;
      }
    }, 0);
    setResult(result);
    setShowResult(true);
    // console.log(result);
  };

  const onChangeOption = (e) => {
    // console.log(e.target.checked);
    props.setSelectedQuestions((prevValue) => {
      prevValue[props.questionNumber] = e.target.value;

      return prevValue;
    });
    props.setSelectedOption(e.target.value);
  };

  function startTestAgain() {
    setShowResult(false);
    props.changeQuestion(0);
    props.setSelectedQuestions({});
    props.setSelectedOption("");
  }

  return (
    <div>
      {showResult ? (
        <div className="result-block">
          <h2>
            You answered correctly {result} out of {props.lenQuestions}
          </h2>
          <button className="back" onClick={startTestAgain}>
            Back
          </button>
        </div>
      ) : (
        <div>
          <h2>{props.question}</h2>
          <div className="options">
            {props.options?.map((item) => {
              return (
                <label>
                  <input
                    type="radio"
                    name={props.question}
                    onClick={onChangeOption}
                    value={item}
                    checked={props.selectedOption === item}
                  />
                  {item}
                </label>
              );
            })}
          </div>
          <div className="buttons">
            <button
              style={
                props.questionNumber === 0 ? { visibility: "hidden" } : null
              }
              onClick={clickPrev}
            >
              Prev
            </button>

            <button
              style={
                props.questionNumber === questions.length - 1
                  ? { visibility: "hidden" }
                  : null
              }
              onClick={clickNext}
            >
              Next
            </button>
            <button onClick={finishTest}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
}
