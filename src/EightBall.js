import React, { useState } from "react";
import "./EightBall.css";
import { Footer } from "./Footer";

const EightBall = ({ answers }) => {
  const randomAnswer = () => {
    const randIdx = Math.floor(Math.random() * answers.length);
    return answers[randIdx];
  };
  const getAnswer = () => {
    const answer = randomAnswer();
    setMessage(answer.msg);
    setColor(answer.color);
  };
  const reset = () => {
    setMessage("Think of a question");
    setColor("black");
  };

  const [message, setMessage] = useState("Think of a question");
  const [color, setColor] = useState("black");

  return (
    <div>
      <h1>Magic 8-Ball</h1>
      <div
        className="EightBall"
        style={{ backgroundColor: color }}
        onClick={getAnswer}
      >
        <p className="EightBallText">{message}</p>
      </div>
      <p>Click the ball to recieve your answer</p>
      <button className="EightBallReset" onClick={reset}>
        Reset
      </button>
      <Footer />
    </div>
  );
};

export default EightBall;
