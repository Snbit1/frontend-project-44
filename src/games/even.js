import runEngine from '../engine.js';
import getRandomInt from '../random.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateRound = () => {
    const number = getRandomInt(1, 100);
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    return [number.toString(), correctAnswer];
  };
  return runEngine(gameRules, generateRound);
};
