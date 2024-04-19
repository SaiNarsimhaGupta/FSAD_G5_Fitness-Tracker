// ActivityCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ActivityCard.css'; // Import CSS for styling

const ActivityCard = ({ icon, title, value }) => {
  return (
    <div className="activity-card">
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
