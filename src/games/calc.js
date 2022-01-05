import { getRandomFloat, doRequest, isWrong } from '../index.js';

const resultCalculator = (operands, operator) => {
  if (operator === '+') {
    return operands[0] + operands[1];
  }
  if (operator === '-') {
    return operands[0] - operands[1];
  }
  return operands[0] * operands[1];
};

export default (name) => {
  const operators = ['+', '-', '*'];
  for (let i = 0; i < 3; i += 1) {
    const random = Math.floor(Math.random() * operators.length);
    const operands = [getRandomFloat(1, 100), getRandomFloat(1, 100)];
    const operator = operators[random];
    const rightAnswer = resultCalculator(operands, operator);
    console.log(`Question: ${operands[0]} ${operator} ${operands[1]}`);
    const answer = doRequest('Your answer: ');
    if (isWrong(Number(answer), rightAnswer, name) === 'end') {
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
