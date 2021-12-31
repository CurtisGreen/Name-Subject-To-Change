export default function getTodaysKanji(numKanji) {
  const date = new Date();
  const todaysIndex =
    (date.getFullYear() + date.getMonth() * 30 + date.getDate()) % numKanji;
  return todaysIndex;
}
