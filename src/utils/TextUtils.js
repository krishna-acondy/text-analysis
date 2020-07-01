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
  wordsToCount = [],
  stopWords = ignoredWords
) => {
  let words = text
    .toLowerCase()
    .trim()
    .replace(/[,;.()'"]/g, "")
    .replace(/[0-9]/g, "")
    .split(/[\s/]+/g)
    .filter((w) => !stopWords.includes(w))
    .sort();

  const totalWordCount = words.length;

  if (wordsToCount.length) {
    words = words.filter((w) => wordsToCount.includes(w));
  }

  const wordFrequencies = {};

  words.forEach((word) => {
    wordFrequencies[word] = wordFrequencies[word] || 0;
    wordFrequencies[word]++;
  });

  const wordFrequenciesArray = [];
  Object.keys(wordFrequencies).forEach((word) => {
    wordFrequenciesArray.push({
      word,
      frequency: wordFrequencies[word],
      percentage: (wordFrequencies[word] / totalWordCount) * 100,
    });
  });

  return {
    totalWordCount,
    words: wordFrequenciesArray.sort((a, b) => b.frequency - a.frequency),
  };
};
