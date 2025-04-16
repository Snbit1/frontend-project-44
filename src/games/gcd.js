import runEngine from '../engine.js';
import getRandomInt from '../random.js';

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
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const generateRound = () => {
    const number1 = getRandomInt(1, 50);
    const number2 = getRandomInt(1, 50);

    const question = `${number1} ${number2}`;
    const correctAnswer = calculateGCD(number1, number2);

    return [question, correctAnswer];
  };

  return runEngine(gameRules, generateRound);
};
