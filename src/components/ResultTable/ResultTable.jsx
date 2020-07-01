import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { Parser } from "json2csv";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ResultTable = ({ result }) => {
  return result ? (
    <>
      <CopyToClipboard text={new Parser().parse(result)} onCopy={() => {}}>
        <Button icon>
          <Icon name="copy" />
          Copy to clipboard
        </Button>
      </CopyToClipboard>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Word</Table.HeaderCell>
            <Table.HeaderCell>Count</Table.HeaderCell>
            <Table.HeaderCell>Percentage</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {result.map((part, index) => {
          return (
            <Table.Row key={index}>
              <Table.Cell>{part.word}</Table.Cell>
              <Table.Cell>{part.frequency}</Table.Cell>
              <Table.Cell>{part.percentage.toFixed(2)}%</Table.Cell>
            </Table.Row>
          );
        })}
      </Table>
    </>
  ) : (
    <></>
  );
};

export default ResultTable;
