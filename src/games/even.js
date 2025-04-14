import { welcomeUser } from '../cli.js';
import { getAnswer } from '../index.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const name = welcomeUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);

    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const userAnswer = getAnswer('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
