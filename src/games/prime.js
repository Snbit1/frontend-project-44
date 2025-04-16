import runEngine from '../engine.js';
import getRandomInt from '../random.js';

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
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateRound = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [number.toString(), correctAnswer];
  };
  return runEngine(gameRules, generateRound);
};
