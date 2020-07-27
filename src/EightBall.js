import React, { useState } from 'react';
import './EightBall.css';

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

	const [ message, setMessage ] = useState('Think of a question');
	const [ color, setColor ] = useState('black');

	return (
        <>
        <h1>Magic 8-Ball</h1>
		<div className="EightBall" style={{ backgroundColor: color }} onClick={getAnswer}>
			<p className="EightBallText">{message}</p>
		</div>
        <p>Click the ball to recieve your answer</p>
        </>
	);
};

export default EightBall;
