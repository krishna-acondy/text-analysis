import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const generateRandomColor = () => {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const Chart = ({ result }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie dataKey="frequency" data={result} label>
        {result.map((entry, index) => (
          <Cell key={index} fill={generateRandomColor()}>
            {entry.word}
          </Cell>
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart;
