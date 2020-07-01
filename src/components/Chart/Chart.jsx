import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./Chart.scss";

const generateRandomColor = () => {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
};

const Chart = ({ result }) => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        isAnimationActive={true}
        dataKey="frequency"
        data={result}
        label
        nameKey="phrase"
      >
        {result.map((entry, index) => (
          <Cell key={index} fill={generateRandomColor()}>
            {entry.phrase}
          </Cell>
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
