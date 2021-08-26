/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { getRandomFloat, doRequest } from '../index.js';

const gameProgression = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const progressionStep = getRandomFloat(1, 15);
    const progressionLength = getRandomFloat(6, 12);
    const hiddenNum = getRandomFloat(0, progressionLength - 1);
    const question = [getRandomFloat(0, 25)];
    for (let index = 0; index < progressionLength; index += 1) {
      question.push(question[index] + progressionStep);
    }
    const rightAnswer = question[hiddenNum];
    question[hiddenNum] = '..';
    console.log(`Question: ${question}`);
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

export { gameProgression };
