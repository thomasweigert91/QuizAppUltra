import { questions } from "../../../../database/questions";
import "./AnswerButton.css";
import { useState } from "react";

const AnswerButton = ({
  answer,
  answerOption,
  answerText,
  currentQuestion,
  setCurrentQuestion,
}) => {
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      alert("Good job!");
    } else {
      alert("That was not right!:(");
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert("You have reached the end of the Quiz");
    }
  };

  return (
    <>
      <div
        className={`AnswerButton ${
          questions.showAnswer
            ? "AnswerButton__RightAnswer"
            : "AnswerButton_WrongAnswer"
        }`}
        onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
      >
        <p className="AnswerButton__AnswerText">{answerOption.answerText}</p>
      </div>
    </>
  );
};

export { AnswerButton };
