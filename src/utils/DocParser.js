import WordExtractor from "word-extractor";

export const parseText = async (file) => {
  if (!file) {
    return;
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (() => {
      return function (e) {
        try {
          debugger;
          const text = new WordExtractor()
            .extract(e.target.result)
            .then((res) => resolve(res));
          resolve(text);
        } catch (e) {
          console.error("Error reading file", e);
          reject(e);
        }
      };
    })();
    reader.readAsText(file);
  });
};
