import { welcomeUser } from '../cli.js';
import { getAnswer } from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const hideElement = (progression, hiddenIndex) => {
  const progressionCopy = [...progression];
  progressionCopy[hiddenIndex] = '..';
  return progressionCopy.join(' ');
};

export default () => {
  const name = welcomeUser();
  console.log('What number is missing in the progression?');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 5) + 1;
    const progressionLength = Math.floor(Math.random() * 6) + 5;
    const hiddenIndex = Math.floor(Math.random() * progressionLength);

    const progression = generateProgression(start, step, progressionLength);
    const correctAnswer = progression[hiddenIndex];
    const question = hideElement(progression, hiddenIndex);

    console.log(`Question: ${question}`);
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
