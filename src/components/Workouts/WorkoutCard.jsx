// WorkoutCard.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning, faWalking, faSwimmer, faTree } from '@fortawesome/free-solid-svg-icons';

const getIconForWorkout = (workoutName) => {
  switch (workoutName.toLowerCase()) {
    case 'full body workout':
      return faDumbbell;
    case 'cardio blast':
      return faRunning;
    case 'leg day':
      return faWalking;
    case 'core strengthening':
      return faTree;
    case 'yoga':
      return faSwimmer;
    default:
      return null;
  }
};

const WorkoutCard = ({ workout, onSelectWorkout, isSelected }) => {
  const icon = getIconForWorkout(workout.name);

  return (
    <div
      className={`workout-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectWorkout(workout)}
      style={{ display: 'inline-block', margin: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}
    >
      {icon && <FontAwesomeIcon icon={icon} size="3x" />}
      <h3>{workout.name}</h3>
    </div>
  );
};

export default WorkoutCard;
