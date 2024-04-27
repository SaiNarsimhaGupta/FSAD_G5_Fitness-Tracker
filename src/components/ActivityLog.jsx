// ActivityLog.jsx
import React from 'react';

const ActivityLog = ({ activities }) => {
  return (
    <div>
      <h2>Activity Log</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            <strong>Activity Type:</strong> {activity.activityType},{' '}
            <strong>Duration:</strong> {activity.duration},{' '}
            <strong>Distance:</strong> {activity.distance},{' '}
            <strong>Intensity:</strong> {activity.intensity},{' '}
            <strong>Calories Burned:</strong> {activity.caloriesBurned}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;
