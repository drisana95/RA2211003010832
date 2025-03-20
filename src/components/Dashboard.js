import React from "react";
import "../styles/Dashboard.css";
import CountriesMap from "./CountriesMap";
import LanguagesChart from "./LanguagesChart";
import MentionsGraph from "./MentionsGraph";
import MentionsList from "./MentionsList";
import SentimentChart from "./SentimentChart";
import Sidebar from "./Sidebar";
import SourcesChart from "./SourcesChart";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <div className="header">
          <input type="text" placeholder="🔍 Search..." className="search-box" />
          <button className="filter-btn">Last 7 Days ▼</button>
        </div>

        <div className="grid">
          <MentionsGraph />
          <SentimentChart />
          <MentionsGraph />
          <MentionsList />
          <CountriesMap />
          <LanguagesChart />
          <SourcesChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
