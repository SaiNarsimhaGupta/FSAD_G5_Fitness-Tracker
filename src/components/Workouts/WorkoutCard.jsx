// WorkoutCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumbbell,
  faRunning,
  faWalking,
  faSwimmer,
} from "@fortawesome/free-solid-svg-icons";

const getIconForWorkout = (workoutName) => {
  switch (workoutName.toLowerCase()) {
    case "full workout":
      return faDumbbell;
    case "cardio blast":
      return faRunning;
    case "leg day":
      return faWalking;
    case "core strengthen":
      return faDumbbell;
    case "yoga":
      return faSwimmer;
    default:
      return null;
  }
};

const WorkoutCard = ({ workout, onSelectWorkout, isSelected }) => {
  const icon = getIconForWorkout(workout.name);

  return (
    <div
      className={`workout-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelectWorkout(workout)}
      style={{
        backgroundColor: "white",
        width: "170px",
        height: "130px",
        display: "inline-block",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      <div style={{ color: "#3A98B9" }}>
        {icon && <FontAwesomeIcon icon={icon} size="3x" />}
      </div>
      <h3 style={{ color: "#0E46A3" }}>{workout.name}</h3>
    </div>
  );
};

export default WorkoutCard;
