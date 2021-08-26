/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getRandomFloat, doRequest } from '../index.js';

const gameGcd = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomFloat(1, 100);
    const secondNum = getRandomFloat(1, 100);
    let biggerNum = 0;
    let smallerNum = 0;
    if (firstNum >= secondNum) {
      biggerNum = firstNum;
      smallerNum = secondNum;
    } else {
      smallerNum = firstNum;
      biggerNum = secondNum;
    }
    console.log(`Question: ${smallerNum} ${biggerNum}`);
    const answer = doRequest('Your answer: ');
    let rightAnswer = 1;
    for (let divisor = 2; divisor <= smallerNum; divisor += 1) {
      if (smallerNum % divisor === 0 && biggerNum % divisor === 0) {
        rightAnswer = divisor;
      }
    }
    if (Number(answer) !== rightAnswer) {
      console.log(`'${answer}' is a wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { gameGcd };
