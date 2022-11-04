import "./QuestionCard.css";
import "./AnswerButton/AnswerButton.css";
import { AnswerButton } from "./AnswerButton/AnswerButton";

const QuestionCard = () => {
  return (
    <section className="QuestionCard__Container">
      <h3 className="QuestionCard__Question">
        Wie heißt die Hauptstadt von Spanien?
      </h3>
      <div className="QuestionCard__AnswerButton__Container">
        <AnswerButton>className="AnswerButton__RightAnswer"</AnswerButton>
        <AnswerButton />
        <AnswerButton />
        <AnswerButton />
      </div>
    </section>
  );
};

export { QuestionCard };