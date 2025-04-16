import welcomeUser from './cli.js';
import getAnswer from './index.js';

const runEngine = (gameRules, generateRound) => {
  const name = welcomeUser();
  console.log(gameRules);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);

    const userAnswer = getAnswer('Your answer: ');

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
