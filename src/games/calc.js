/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { getRandomFloat, doRequest } from '../index.js';

const gameCalc = (name) => {
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * operators.length);
    const firstOperand = getRandomFloat(1, 100);
    const secondOperand = getRandomFloat(1, 100);
    const operator = operators[random];
    let rightAnswer = 0;
    if (operator === '+') {
      rightAnswer = firstOperand + secondOperand;
    }
    if (operator === '-') {
      rightAnswer = firstOperand - secondOperand;
    }
    if (operator === '*') {
      rightAnswer = firstOperand * secondOperand;
    }
    console.log(`Question: ${firstOperand} ${operator} ${secondOperand}`);
    const answer = doRequest('Your answer: ');
    if (Number(answer) !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { gameCalc };
