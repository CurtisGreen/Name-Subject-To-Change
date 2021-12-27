import { generateRandomKanji } from "./GenerateKanji";

export function generateAnswerChoices(curKanji, numAnswers = 4) {
  const answers = [curKanji];
  for (let i = 1; i < numAnswers; i++) {
    let foundKanji = true;
    while (foundKanji) {
      const randomKanji = generateRandomKanji();
      foundKanji = answers.find((answer) => answer.kanji == randomKanji.kanji);
      if (!foundKanji) {
        answers.push(randomKanji);
      }
    }
  }
  const shuffled = shuffleAnswers(answers);
  return shuffled;
}

function shuffleAnswers(answers) {
  return answers
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
