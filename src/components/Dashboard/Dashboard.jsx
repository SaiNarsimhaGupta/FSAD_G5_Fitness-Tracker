// Dashboard.jsx
import React from 'react';
import ActivityCard from '../ActivityCard/ActivityCard';
import ActivityChart from '../ActivityChart/ActivityChart';
import ActivitySummary from '../ActivitySummary/ActivitySummary'; // Import the ActivitySummary component
import { faRunning, faBicycle, faWalking, faSwimmer } from '@fortawesome/free-solid-svg-icons'; // Import additional icons
import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
  // Sample data for activity summary
  const totalDistance = 35; // in kilometers
  const totalCalories = 1200; // in kcal
  const averagePace = 5.5; // in minutes per kilometer

  // Sample data for line chart and bar chart
  const stepsData = [
    { name: 'Day 1', steps: 5000 },
    { name: 'Day 2', steps: 6000 },
    { name: 'Day 3', steps: 7000 },
    { name: 'Day 4', steps: 8000 },
    { name: 'Day 5', steps: 9000 },
    { name: 'Day 6', steps: 10000 },
    { name: 'Day 7', steps: 11000 },
  ];

  // Mock data for activities like running, walking, swimming, cycling
  const activityData = [
    { name: 'Day 1', running: 30, walking: 45, swimming: 15, cycling: 60 },
    { name: 'Day 2', running: 45, walking: 60, swimming: 30, cycling: 45 },
    { name: 'Day 3', running: 60, walking: 75, swimming: 45, cycling: 30 },
    { name: 'Day 4', running: 75, walking: 90, swimming: 60, cycling: 15 },
    { name: 'Day 5', running: 90, walking: 105, swimming: 75, cycling: 30 },
    { name: 'Day 6', running: 105, walking: 120, swimming: 90, cycling: 45 },
    { name: 'Day 7', running: 120, walking: 135, swimming: 105, cycling: 60 },
  ];


  return (
    <div className="dashboard">
      <h2>Activity Dashboard</h2>
      <div className="activity-cards">
        <ActivityCard icon={faRunning} title="Running" value="5 km" />
        <ActivityCard icon={faBicycle} title="Cycling" value="3 km" />
        <ActivityCard icon={faWalking} title="Walking" value="8 km" />
        <ActivityCard icon={faSwimmer} title="Swimming" value="1 km" /> {/* Add Swimming activity card */}
        {/* Add more ActivityCard components for additional activities */}
      </div>
      <ActivitySummary
        totalDistance={totalDistance}
        totalCalories={totalCalories}
        averagePace={averagePace}
      />
      <ActivityChart stepsData={stepsData} activityData={activityData} />
    </div>
  );
};

export default Dashboard;
