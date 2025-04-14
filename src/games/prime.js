import welcomeUser from '../cli.js';
import getAnswer from '../index.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const max = Math.sqrt(num);
  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const name = welcomeUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
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
