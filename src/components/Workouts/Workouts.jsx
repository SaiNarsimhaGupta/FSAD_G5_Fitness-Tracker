// WorkoutsPage.jsx
import React, { useState } from 'react';
import WorkoutCard from './WorkoutCard'; // Assuming WorkoutCard is in the same directory
import './Workouts.css'
const WorkoutsPage = () => {
  const predefinedWorkouts = [
    { id: 1, name: 'Full Body Workout', image: 'full_body.jpg', exercises: ['Squats', 'Push-ups', 'Plank', 'Lunges'] },
    { id: 2, name: 'Cardio Blast', image: 'cardio.jpg', exercises: ['Running', 'Jumping Jacks', 'Burpees', 'High Knees'] },
    { id: 3, name: 'Leg Day', image: 'legs.jpg', exercises: ['Leg Press', 'Deadlifts', 'Calf Raises', 'Leg Extensions'] },
    { id: 4, name: 'Core Strengthening', image: 'core.jpg', exercises: ['Crunches', 'Russian Twists', 'Leg Raises', 'Plank'] },
    { id: 5, name: 'Yoga', image: 'yoga.jpg', exercises: ['Downward Dog', 'Warrior I', 'Warrior II', 'Tree Pose'] },
    // Add more predefined workouts as needed
  ];

  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [customWorkout, setCustomWorkout] = useState([]);

  const handleSelectWorkout = (workout) => {
    setSelectedWorkout(workout);
  };

  const handleAddExerciseToCustomWorkout = (exercise) => {
    if (!customWorkout.includes(exercise)) {
      setCustomWorkout([...customWorkout, exercise]);
    }
  };

  const handleRemoveExerciseFromCustomWorkout = (exercise) => {
    setCustomWorkout(customWorkout.filter((ex) => ex !== exercise));
  };

  return (
    <div className="workouts-page">
      <h2>Choose a Workout</h2>
      <div className="workout-cards">
        {predefinedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            onSelectWorkout={handleSelectWorkout}
            isSelected={selectedWorkout === workout}
          />
        ))}
      </div>
      {selectedWorkout && (
        <div className="workout-detail">
          <h3>{selectedWorkout.name}</h3>
          <ul className="exercise-list">
            {selectedWorkout.exercises.map((exercise) => (
              <li key={exercise}>
                {exercise}
                <button onClick={() => handleAddExerciseToCustomWorkout(exercise)} className="add-button">+</button>
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedWorkout(null)}>Back</button>
        </div>
      )}
      <div className="custom-workout">
        <h2>Custom Workout</h2>
        <ul className="custom-exercise-list">
          {customWorkout.map((exercise) => (
            <li key={exercise}>
              {exercise}
              <button onClick={() => handleRemoveExerciseFromCustomWorkout(exercise)} className="remove-button">-</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutsPage;
