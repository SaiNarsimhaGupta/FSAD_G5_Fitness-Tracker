// ActivityLog.jsx
import React from 'react';
import './ActivityLog.css'; // Import CSS for styling

const ActivityLog = ({ activities }) => {
  return (
    <div className="activity-log">
      {activities.length > 0 ? (
        activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <div>
              <strong>Activity Type:</strong> {activity.activityType}
            </div>
            <div>
              <strong>Duration:</strong> {activity.duration}
            </div>
            <div>
              <strong>Distance:</strong> {activity.distance}
            </div>
            <div>
              <strong>Calories Burned:</strong> {activity.caloriesBurned}
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: 'center' }}>No activities logged</p>
      )}
    </div>
  );
};

export default ActivityLog;
