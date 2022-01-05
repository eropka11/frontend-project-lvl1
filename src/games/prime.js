import { getRandomFloat, doRequest, isWrong } from '../index.js';

export default (name) => {
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
    if (isWrong(answer, rightAnswer, name) === 'end') {
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
