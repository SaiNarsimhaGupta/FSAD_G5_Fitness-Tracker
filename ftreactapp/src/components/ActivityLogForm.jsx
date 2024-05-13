// ActivityLogForm.jsx
import React, { useState } from 'react';

const ActivityLogForm = ({ onLogActivity }) => {
  const [activityType, setActivityType] = useState('');
  const [duration, setDuration] = useState('');
  const [distance, setDistance] = useState('');
  const [intensity, setIntensity] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      activityType,
      duration,
      distance,
      intensity,
      caloriesBurned,
    };
    onLogActivity(newActivity);
    setActivityType('');
    setDuration('');
    setDistance('');
    setIntensity('');
    setCaloriesBurned('');
  };

  return (
    <div>
      <h2>Log Activity</h2>
      <form onSubmit={handleSubmit} style={{width: '300px'}}>
        <input
          type="text"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          placeholder="Activity Type"
          required
          style={{margin:'5px'}}
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration"
          required
          style={{margin:'5px'}}
          
        />
        <input
          type="text"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Distance"
          style={{margin:'5px'}}
          required
        />
        <input
          type="text"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          placeholder="Calories Burned"
          style={{margin:'5px'}}
          required
        />
        <button type="submit" style={{margin:'5px'}} >Log Activity</button>
      </form>
    </div>
  );
};

export default ActivityLogForm;
