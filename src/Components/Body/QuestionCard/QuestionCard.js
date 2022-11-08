import "./QuestionCard.css";
import { questions } from "../../../database/questions";
import "./AnswerButton/AnswerButton.css";
import { AnswerButton } from "./AnswerButton/AnswerButton";
import { useState } from "react";

const QuestionCard = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section className="QuestionCard__Container">
      <h3 className="QuestionCard__Question">
        {questions[currentQuestion].questionText}
      </h3>
      <div className="QuestionCard__AnswerButton__Container">
        {questions[currentQuestion].answerOption.map((Option) => (
          <AnswerButton
            answerOption={Option}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        ))}
      </div>
    </section>
  );
};

export { QuestionCard };
