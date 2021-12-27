import kanji from "../data/kanji-jouyou.json";
import { getRandInList } from "./RandomUtilities";

export function generateRandomKanji() {
  const kanjiArr = Object.entries(kanji);
  const withKanji = kanjiArr.map((k) => {
    const kanji = k["0"];
    const kanjiInfo = k["1"];
    kanjiInfo.kanji = kanji;
    return kanjiInfo;
  });
  return getRandInList(withKanji);
}
