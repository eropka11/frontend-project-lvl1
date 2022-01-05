import { getRandomFloat, doRequest, isWrong } from '../index.js';

export default (name) => {
  for (let i = 0; i < 3; i += 1) {
    const progressionStep = getRandomFloat(1, 15);
    const progressionLength = getRandomFloat(5, 12);
    const hiddenNum = getRandomFloat(0, progressionLength - 1);
    const question = [getRandomFloat(0, 25)];
    for (let index = 0; index < progressionLength; index += 1) {
      question.push(question[index] + progressionStep);
    }
    const rightAnswer = question[hiddenNum];
    question[hiddenNum] = '..';
    let shownQuestion = '';
    for (let index = 0; index < question.length; index += 1) {
      shownQuestion += `${String(question[index])} `;
    }
    console.log(`Question: ${shownQuestion}`);
    const answer = doRequest('Your answer: ');
    if (isWrong(Number(answer), rightAnswer, name) === 'end') {
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
