import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "../styles/Card.css";

const data = [
  { name: "Positive", value: 56.4, color: "#28a745" },
  { name: "Negative", value: 22.3, color: "#dc3545" },
];

const SentimentChart = () => {
  return (
    <div className="card">
      <h3>📊 Sentiment Analysis</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} dataKey="value" outerRadius={70}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentChart;
