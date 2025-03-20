import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "../styles/Card.css";

const data = [
  { source: "Twitter", mentions: 120 },
  { source: "Facebook", mentions: 95 },
  { source: "Instagram", mentions: 80 },
  { source: "News", mentions: 45 },
];

const SourcesChart = () => {
  return (
    <div className="card">
      <h3>📡 Mentions by Source</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="source" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="mentions" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SourcesChart;
