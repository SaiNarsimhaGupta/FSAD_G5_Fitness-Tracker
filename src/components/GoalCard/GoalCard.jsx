// GoalCard.jsx
import React from 'react';

const GoalCard = ({ goal, target, timeframe, onRemove }) => {
  return (
    <div className="goal-card">
      <h3>{goal}</h3>
      <p>{target}</p>
      <p>{timeframe}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default GoalCard;
