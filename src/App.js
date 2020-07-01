import React, { useState } from "react";
import "./App.scss";
import { countWordFrequencies, ignoredWords } from "./utils/TextUtils";
import { TextArea, Header, Form, Button, Table } from "semantic-ui-react";
import WordList from "./components/WordList/WordList";
import Chart from "./components/PieChart/PieChart";

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
          onWordAdd={(word) =>
            setWords((value) => [...value, word.toLocaleLowerCase()])
          }
        />
        <WordList
          words={stopWords}
          color="orange"
          title="Ignored Words"
          onWordAdd={(word) =>
            setStopWords((value) => [...value, word.toLocaleLowerCase()])
          }
        />
      </div>
      {!!result && (
        <div className="result">
          <Chart result={result} />
          <Table>
            <Table.Header>
              <Table.HeaderCell>Word</Table.HeaderCell>
              <Table.HeaderCell>Count</Table.HeaderCell>
            </Table.Header>
            {result.map((part, index) => {
              return (
                <Table.Row key={index}>
                  <Table.Cell>{part.word}</Table.Cell>
                  <Table.Cell>{part.frequency}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table>
        </div>
      )}
    </div>
  );
};

export default App;
