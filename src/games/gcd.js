import { welcomeUser } from '../cli.js';
import { getAnswer } from '../index.js';

const calculateGCD = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export default () => {
  const name = welcomeUser();
  console.log('Find the greatest common divisor of given numbers.');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = Math.floor(Math.random() * 50) + 1;
    const number2 = Math.floor(Math.random() * 50) + 1;

    console.log(`Question: ${number1} ${number2}`);

    const correctAnswer = calculateGCD(number1, number2);
    const userAnswer = getAnswer('Your answer: ');

    if (parseInt(userAnswer, 10) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
