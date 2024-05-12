// ActivityLogForm.jsx
import React, { useState, useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const ActivityLogForm = ({ onLogActivity }) => {
  const [activityType, setActivityType] = useState("");
  const [duration, setDuration] = useState("");
  const [distance, setDistance] = useState("");
  const [caloriesBurned, setCaloriesBurned] = useState("");
  const { accessToken, userId } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      activityType,
      duration,
      distance,
      caloriesBurned,
    };
    onLogActivity(newActivity);
    setActivityType("");
    setDuration("");
    setDistance("");
    setCaloriesBurned("");

    const postdata = {
      userid: userId,
      activityName: activityType,
      currentduration: duration,
      currentdistance: distance,
      calories: caloriesBurned,
    };
      fetch('http://localhost:8080/ftApiService/logActivityOrGoal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(postdata)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });
  };

  return (
    <div>
      <h2>Log Activity</h2>
      <form onSubmit={handleSubmit} style={{ width: "300px" }}>
        <input
          type="text"
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
          placeholder="Activity Type"
          required
          style={{ margin: "5px" }}
        />
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration"
          required
          style={{ margin: "5px" }}
        />
        <input
          type="text"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          placeholder="Distance"
          style={{ margin: "5px" }}
          required
        />
        <input
          type="text"
          value={caloriesBurned}
          onChange={(e) => setCaloriesBurned(e.target.value)}
          placeholder="Calories Burned"
          style={{ margin: "5px" }}
          required
        />
        <button type="submit" style={{ margin: "5px" }}>
          Log Activity
        </button>
      </form>
    </div>
  );
};

export default ActivityLogForm;
