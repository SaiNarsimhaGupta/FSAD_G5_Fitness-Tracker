// CustomExerciseCard.jsx
import React from 'react';
import './CustomExerciseCard.css'

const CustomExerciseCard = ({ exercise, onRemoveExercise }) => {
  return (
    <div className="custom-exercise-card">
      <p>{exercise}</p>
      <button className="remove-button" onClick={() => onRemoveExercise(exercise)}>-</button>
    </div>
  );
};

export default CustomExerciseCard;
