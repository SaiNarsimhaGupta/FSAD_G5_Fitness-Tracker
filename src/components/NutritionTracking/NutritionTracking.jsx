import React, { useState } from 'react';
import MealSummaryCard from '../MealSummaryCard/MealSummaryCard'; // Import the MealSummaryCard component
import './NutritionTracking.css';

const foodList = [
  { name: 'Fish', carbs: 0, fat: 5, protein: 20 },
  { name: 'Chicken', carbs: 0, fat: 10, protein: 25 },
  // Add more food items as needed
];

const NutritionTracking = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedFood, setSelectedFood] = useState('');
  const [loggedFoods, setLoggedFoods] = useState([]);

  const handleFoodSelect = (food) => {
    setSelectedFood(foodList.find((item) => item.name === food));
  };

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleAddFood = () => {
    if (selectedDay && selectedFood) {
      setLoggedFoods([
        ...loggedFoods,
        {
          day: selectedDay,
          food: selectedFood,
        },
      ]);
      setSelectedFood('');
    }
  };

  const calculateTotalNutrition = (day) => {
    const foodsForDay = loggedFoods.filter((item) => item.day === day);
    let totalCarbs = 0;
    let totalFat = 0;
    let totalProtein = 0;
    foodsForDay.forEach((item) => {
      totalCarbs += item.food.carbs;
      totalFat += item.food.fat;
      totalProtein += item.food.protein;
    });
    return { totalCarbs, totalFat, totalProtein };
  };

  return (
    <div className="nutrition-tracking">
      <h2>Nutrition Tracking</h2>
      <div>
        <label htmlFor="day-select">Select Day:</label>
        <select id="day-select" value={selectedDay} onChange={(e) => handleDaySelect(e.target.value)}>
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>
      <div>
        <label htmlFor="food-select">Select Food:</label>
        <select id="food-select" value={selectedFood} onChange={(e) => handleFoodSelect(e.target.value)}>
          <option value="">Select Food</option>
          {foodList.map((food, index) => (
            <option key={index} value={food.name}>
              {food.name}
            </option>
          ))}
        </select>
      </div>
      {selectedFood && (
        <div>
          <p>Carbs: {selectedFood.carbs}</p>
          <p>Fat: {selectedFood.fat}</p>
          <p>Protein: {selectedFood.protein}</p>
        </div>
      )}
      <button onClick={handleAddFood} disabled={!selectedDay || !selectedFood}>
        Add Food
      </button>
      <div>
        {loggedFoods.map((item, index) => (
          <MealSummaryCard key={index} day={item.day} meals={[item]} />
        ))}
      </div>
    </div>
  );
};

export default NutritionTracking;
