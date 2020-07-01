import React, { useState } from "react";
import "./App.scss";
import { countWordFrequencies, ignoredWords } from "./utils/TextUtils";
import { TextArea, Header, Form, Button, Label } from "semantic-ui-react";
import WordList from "./components/WordList/WordList";
import Chart from "./components/PieChart/PieChart";
import ResultTable from "./components/ResultTable/ResultTable";

const App = () => {
  const [stopWords, setStopWords] = useState(ignoredWords || []);
  const [words, setWords] = useState([]);
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className={`app ${result ? "split-screen" : ""}`}>
      <div className="control-panel">
        <Form className="full-width">
          <Header as="h2">Input Text</Header>
          <TextArea
            placeholder="Paste or type in your text here"
            className="text-input"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button
            className="spaced-top"
            primary
            onClick={() => {
              const result = countWordFrequencies(inputText, words, stopWords);
              setResult(result);
            }}
          >
            Count word frequencies
          </Button>
        </Form>
        <WordList
          words={words}
          color="green"
          title="Words to count"
          onWordAdd={(word) => setWords([...words, word.toLocaleLowerCase()])}
          onWordDelete={(word) => {
            setWords(words.filter((w) => w !== word));
          }}
        />
        <WordList
          words={stopWords}
          color="orange"
          title="Ignored Words"
          onWordAdd={(word) =>
            setStopWords([...stopWords, word.toLocaleLowerCase()])
          }
          onWordDelete={(word) => {
            setStopWords(stopWords.filter((w) => w !== word));
          }}
        />
      </div>
      {!!result && Object.keys(result).length && (
        <div className="result">
          <Chart result={result.words} />
          <Header as="h3">
            <Label>Total words: {result.totalWordCount}</Label>
          </Header>
          <ResultTable result={result.words} />
        </div>
      )}
      {!result ||
        (!!!Object.keys(result).length && (
          <div>
            None of the specified words were found in the text.
            <br />
            Please try again with a different set of words.
          </div>
        ))}
    </div>
  );
};

export default App;
