/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-expressions */
import { getRandomFloat, doRequest } from '../index.js';

const gameEven = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const random = getRandomFloat(1, 1000);
    console.log(`Question: ${random}`);
    const answer = doRequest('Your answer: ');
    let rightAnswer = '';
    random % 2 === 0 ? rightAnswer = 'yes' : rightAnswer = 'no';
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export { gameEven };
