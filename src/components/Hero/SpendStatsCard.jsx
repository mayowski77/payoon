import React from 'react';

const SpendStatsCard = () => (
  <div className="stat-card spend-stats">
    <h3 className="card-title">SPEND STATS</h3>
    <div className="stats-graph">
      {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
        <div key={day} className="stat-bar">
          <div className={`bar ${day === "WED" ? "active" : ""}`}></div>
          <span className="day-label">{day}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SpendStatsCard;