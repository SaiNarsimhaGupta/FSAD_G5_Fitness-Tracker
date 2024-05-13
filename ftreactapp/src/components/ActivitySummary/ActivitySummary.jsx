// ActivitySummary.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faRunning, faFire, faStopwatch, faHeartbeat } from '@fortawesome/free-solid-svg-icons'; // Import icons
import './ActivitySummary.css'
const ActivitySummary = ({ totalDistance, totalCalories, averagePace, heartRate }) => {
  return (
    <div className="activity-summary">
      <h3 style={{margin:"0", marginBottom:"10px"}}>Activity Summary</h3>
      <div className=" activitycontainer">
        <div className="card running">
          <div className="card-icon">
            <FontAwesomeIcon icon={faRunning} />
          </div>
          <p>Total Distance: {totalDistance} km</p>
        </div>
        <div className="card calories">
          <div className="card-icon">
            <FontAwesomeIcon icon={faFire} />
          </div>
          <p>Total Calories Burned: {totalCalories} kcal</p>
        </div>
        <div className="card pace">
          <div className="card-icon">
            <FontAwesomeIcon icon={faStopwatch} />
          </div>
          <p>Average Pace: {averagePace} min/km</p>
        </div>
        <div className="card heart-rate">
          <div className="card-icon">
            <FontAwesomeIcon icon={faHeartbeat} />
          </div>
          <p>Heart Rate: {heartRate} bpm</p>
        </div>
      </div>
    </div>
  );
};

export default ActivitySummary;
