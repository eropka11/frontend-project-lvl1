/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getRandomFloat, doRequest } from '../index.js';

const gamePrime = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomFloat(1, 100);
    console.log(`Question: ${random}`);
    let rightAnswer = 'yes';
    for (let k = 2; k < random; k += 1) {
      if (random % k === 0) {
        rightAnswer = 'no';
      }
    }
    const answer = doRequest('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { gamePrime };
