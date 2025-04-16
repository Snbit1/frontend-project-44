import runEngine from '../engine.js';
import getRandomInt from '../random.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  let current = start;

  for (let i = 0; i < length; i += 1) {
    progression.push(current);
    current += step;
  }

  return progression;
};

export default () => {
  const gameRules = 'What number is missing in the progression?';

  const generateRound = () => {
    const start = getRandomInt(1, 10);
    const step = getRandomInt(1, 5);
    const length = getRandomInt(5, 10);
    const hiddenIndex = getRandomInt(0, length - 1);

    const progression = generateProgression(start, step, length);
    const correctAnswer = progression[hiddenIndex];

    let questionString = '';
    for (let i = 0; i < progression.length; i += 1) {
      if (i > 0) {
        questionString += ' ';
      }
      questionString += (i === hiddenIndex) ? '..' : progression[i];
    }

    return [questionString, correctAnswer];
  };

  return runEngine(gameRules, generateRound);
};
