import React from 'react';

const MealSummaryCard = ({ day, meals }) => {
  return (
    <div className="meal-summary-card">
      <h3>{day}</h3>
      <ul>
        {meals.map((meal, index) => (
          <li key={index}>
            {meal.food.name}: {meal.food.carbs}g Carbs, {meal.food.fat}g Fat, {meal.food.protein}g Protein
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealSummaryCard;
