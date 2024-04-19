// ActivitySummary.jsx
import React from 'react';

const ActivitySummary = ({ totalDistance, totalCalories, averagePace }) => {
  return (
    <div className="activity-summary">
      <h3>Activity Summary</h3>
      <div>
        <p>Total Distance: {totalDistance} km</p>
        <p>Total Calories Burned: {totalCalories} kcal</p>
        <p>Average Pace: {averagePace} min/km</p>
      </div>
    </div>
  );
};

export default ActivitySummary;
