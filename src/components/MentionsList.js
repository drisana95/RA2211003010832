import React from "react";
import "../styles/Card.css";

const mentions = [
  { user: "New York Magazine", text: "Check out Slack’s new feature!" },
  { user: "Tech Insider", text: "Slack's UI redesign looks promising." },
  { user: "CNN", text: "Slack notifications improved significantly." },
];

const MentionsList = () => {
  return (
    <div className="card">
      <h3>📰 Latest Mentions</h3>
      <ul>
        {mentions.map((mention, index) => (
          <li key={index}>
            <strong>{mention.user}</strong>: {mention.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentionsList;
