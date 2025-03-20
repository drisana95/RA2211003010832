import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">🔵 Awario</h2>
      <ul>
        <li className="active">📊 Dashboard</li>
        <li>🔔 Mentions</li>
        <li>📌 Leads</li>
        <li>📑 Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
