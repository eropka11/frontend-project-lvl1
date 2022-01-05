import readlineSync from 'readline-sync';

const doRequest = (request) => readlineSync.question(request);

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = doRequest('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const isWrong = (answer, rightAnswer, playerName) => {
  if (answer !== rightAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
    return 'end';
  }
  return '';
};

const getRandomFloat = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export {
  doRequest, getRandomFloat, greetings, isWrong,
};
