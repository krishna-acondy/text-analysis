import React, { useState } from "react";
import { Header, Form, Input, Button, Label, Icon } from "semantic-ui-react";
import "./WordList.scss";

const WordList = ({ words, title, onWordAdd, onWordDelete, color }) => {
  const [newWord, setNewWord] = useState("");
  return (
    <div className="words">
      <Header as="h2">{title}</Header>
      <Form className="add-word">
        <Input
          type="text"
          placeholder="Add new word"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <Button
          primary
          onClick={() => {
            onWordAdd(newWord.toLocaleLowerCase());
            setNewWord("");
          }}
        >
          Add
        </Button>
      </Form>
      <div>
        {words &&
          words.map((word, index) => {
            return (
              <Label key={index} color={color}>
                {word}
                <Icon name="delete" />
              </Label>
            );
          })}
      </div>
    </div>
  );
};

export default WordList;
