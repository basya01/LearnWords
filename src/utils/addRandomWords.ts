import { Word } from "../models/Word";

const getRandomWordExcept = (allWords: Word[], except: Word[]): Word => {
  const random = Math.floor(Math.random() * allWords.length);

  if (except.find((word) => word.id === allWords[random].id)) {
    return getRandomWordExcept(allWords, except);
  } else {
    return allWords[random];
  }
};

export const addRandomWords = (allWords: Word[], except: Word) => {
  const words = [except];

  for (let i = 0; i < 3; i++) {
    words.push(getRandomWordExcept(allWords, words));
  }

  return words.sort(() => Math.random() - 0.5);
};