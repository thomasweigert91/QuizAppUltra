import "./AnswerButton.css";

const AnswerButton = ({ answer }) => {
  return (
    <>
      <div
        className={`AnswerButton__Container ${
          answer ? "AnswerButton__RightAnswer" : "AnswerButton__WrongAnswer"
        }`}
      >
        <div className="AnswerButton__AnswerLetter">A</div>
        <p className="AnswerButton__AnswerText">LoremIpsumAnswer</p>
      </div>
    </>
  );
};

export { AnswerButton };
