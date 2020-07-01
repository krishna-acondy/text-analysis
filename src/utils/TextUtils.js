export const ignoredWords = [
  "and",
  "the",
  "to",
  "a",
  "of",
  "for",
  "as",
  "i",
  "with",
  "it",
  "is",
  "on",
  "that",
  "this",
  "can",
  "in",
  "be",
  "has",
  "if",
];

export const countWordFrequencies = (
  text,
  phrasesToCount = [],
  stopPhrases = ignoredWords
) => {
  let words = text
    .toLowerCase()
    .trim()
    .replace(/[,;.()'"]/g, "")
    .replace(/[0-9]/g, "")
    .split(/[\s/]+/g)
    .filter((w) => !stopPhrases.includes(w))
    .sort();

  const totalWordCount = words.length;
  const phraseFrequencies = {};

  phrasesToCount.forEach((phrase) => {
    if (
      !Object.keys(phraseFrequencies).includes(phrase) &&
      !stopPhrases.includes(phrase)
    ) {
      const regexp = new RegExp(phrase, "gi");
      const count = (text.match(regexp) || []).length;
      phraseFrequencies[phrase] = count;
    }
  });

  const wordFrequenciesArray = [];
  Object.keys(phraseFrequencies).forEach((phrase) => {
    wordFrequenciesArray.push({
      phrase,
      frequency: phraseFrequencies[phrase],
      percentage: (phraseFrequencies[phrase] / totalWordCount) * 100,
    });
  });

  return {
    totalWordCount,
    words: wordFrequenciesArray.sort((a, b) => b.frequency - a.frequency),
  };
};
