import { getRandomFloat, doRequest, isWrong } from '../index.js';

export default (name) => {
  for (let i = 0; i < 3; i += 1) {
    const numbers = [getRandomFloat(1, 100), getRandomFloat(1, 100)];
    console.log(`Question: ${numbers[0]} ${numbers[1]}`);
    const answer = doRequest('Your answer: ');
    let rightAnswer = 1;
    for (let divisor = 2; divisor <= numbers[0] || divisor <= numbers[1]; divisor += 1) {
      if (numbers[0] % divisor === 0 && numbers[1] % divisor === 0) {
        rightAnswer = divisor;
      }
    }
    if (isWrong(answer, rightAnswer, name) === 'end') {
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
