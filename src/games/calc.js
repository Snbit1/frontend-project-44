/* eslint-disable indent */
import runEngine from '../engine.js';
import getRandomInt from '../random.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

export default () => {
  const gameRules = 'What is the result of the expression?';

  const generateRound = () => {
    const operators = ['+', '-', '*'];
    const number1 = getRandomInt(1, 50);
    const number2 = getRandomInt(1, 50);
    const operator = operators[getRandomInt(0, operators.length - 1)];

    const question = `${number1} ${operator} ${number2}`;
    const correctAnswer = calculate(number1, number2, operator);

    return [question, correctAnswer];
  };

  return runEngine(gameRules, generateRound);
};
