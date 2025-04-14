import { welcomeUser } from '../cli.js';
import { getAnswer } from '../index.js';

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
  const name = welcomeUser();
  console.log('What is the result of the expression?');

  const operators = ['+', '-', '*'].sort(() => Math.random() - 0.5);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = Math.floor(Math.random() * 50) + 1;
    const number2 = Math.floor(Math.random() * 50) + 1;
    const operator = operators[i];

    console.log(`Question: ${number1} ${operator} ${number2}`);

    const correctAnswer = calculate(number1, number2, operator);
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
