import readlineSync from 'readline-sync';

const getAnswer = (question) => readlineSync.question(question).toLowerCase().trim();

export default getAnswer;
