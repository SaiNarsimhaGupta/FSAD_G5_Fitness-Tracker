// GoalSetting.jsx
import React, { useState } from "react";
import GoalCard from "../GoalCard/GoalCard";
import "./GoalSetting.css"; // Import CSS for styling
import NavBar from "../NavBar/NavBar";

const GoalSetting = () => {
  const [goal, setGoal] = useState("");
  const [target, setTarget] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [goals, setGoals] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals([...goals, { goal, target, timeframe }]);
    setGoal("");
    setTarget("");
    setTimeframe("");

    // const postdata = {
    //   activityName: goal,
    //   goaldistance:target,
    //   goalduration: timeframe,
    // };
    //   fetch('http://localhost:8080/ftApiService/logActivityOrGoal?userid=${userId}', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(postdata)
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .catch(error => {
    //     console.error('There was a problem with your fetch operation:', error);
    //   });
  };

  const handleRemoveGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  return (
    <>
      <NavBar />
      <div className="goal-setting-container">
        <div className="goal-setting">
          <h2 style={{ textAlign: "center" }}>Set Fitness Goals</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="goal">Goal:</label>
              <input
                type="text"
                id="goal"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="E.g., Weight Loss, Muscle Gain, Endurance Improvement"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="target">Target:</label>
              <input
                type="text"
                id="target"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                placeholder="E.g., Lose 10 pounds, Run 5 miles in 30 minutes"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="timeframe">Timeframe:</label>
              <input
                type="text"
                id="timeframe"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                placeholder="E.g., 3 months, 6 weeks"
                required
              />
            </div>
            <button type="submit">Set Goals</button>
          </form>
          <div className="goal-cards">
            {goals.map((goal, index) => (
              <GoalCard
                key={index}
                goal={goal.goal}
                target={goal.target}
                timeframe={goal.timeframe}
                onRemove={() => handleRemoveGoal(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalSetting;
