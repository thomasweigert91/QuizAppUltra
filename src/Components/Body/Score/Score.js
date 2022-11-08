import "./Score.css";
import { useState } from "react";
import { questions } from "../../../database/questions";

const Score = () => {
  const [showScore, setShowScore] = useState(false);

  return (
    <div className="Score__Container">
      <p Score__Text>
        You have reached {score} out of {questions.length}
      </p>
    </div>
  );
};

export { Score };
