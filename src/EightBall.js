import React, { useState } from 'react';

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
		<div className="EightBall" style={{ backgroundColor: color }} onClick={getAnswer}>
			<p className="EightBallText">{message}</p>
		</div>
	);
};

export default EightBall;
