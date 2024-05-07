// ExerciseCard.jsx
import React from 'react';
import './ExerciseCard.css'

const ExerciseCard = ({ exercise, onAddExercise }) => {
  return (
    <div className="exercise-card">
      <p>{exercise}</p>
      <button onClick={() => onAddExercise(exercise)} className="add-button">+</button>
    </div>
  );
};

export default ExerciseCard;
