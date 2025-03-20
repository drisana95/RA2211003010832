import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "../styles/Card.css";

const data = [
  { date: "Feb 15", mentions: 400 },
  { date: "Feb 16", mentions: 500 },
  { date: "Feb 17", mentions: 350 },
  { date: "Feb 18", mentions: 600 },
  { date: "Feb 19", mentions: 700 },
];

const MentionsGraph = () => {
  return (
    <div className="card">
      <h3>📈 Mentions Over Time</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="mentions" stroke="#007bff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MentionsGraph;
