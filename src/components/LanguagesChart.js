import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "../styles/Card.css";

const data = [
  { name: "English", value: 60, color: "#007bff" },
  { name: "Spanish", value: 20, color: "#dc3545" },
  { name: "French", value: 10, color: "#ffc107" },
  { name: "Others", value: 10, color: "#28a745" },
];

const LanguagesChart = () => {
  return (
    <div className="card">
      <h3>🗣️ Language Distribution</h3>
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

export default LanguagesChart;
