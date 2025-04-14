import readlineSync from 'readline-sync';

export const getAnswer = (question) => readlineSync.question(question).toLowerCase().trim();
