// NutritionTracking.jsx
import React, { useState } from 'react';
import MealSummaryCard from '../MealSummaryCard/MealSummaryCard'; // Import the MealSummaryCard component
import './NutritionTracking.css';
import NavBar from '../NavBar/NavBar';

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

 

  return (
    <>
      <NavBar />
      <div className="nutrition-tracking">
        <div className='container'>
          <div className='sub-container'>
        <h2 style={{textAlign:'center',marginBottom:'50px'}}>My Food Tracker</h2>
        <div className="dropdowns-and-button">
          <div className="dropdown">
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
          <div className="dropdown">
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
          <button className='nutrition-button' onClick={handleAddFood} disabled={!selectedDay || !selectedFood}>
            Add Food
          </button>
        </div>
        </div>
        </div>
        {selectedFood && (
          <div className="food-info">
            <span style={{marginRight:'10px',fontWeight:'bold'}}>Carbs: {selectedFood.carbs}</span>
            <span style={{marginRight:'10px',fontWeight:'bold'}}>Fat: {selectedFood.fat}</span>
            <span style={{marginRight:'10px',fontWeight:'bold'}}>Protein: {selectedFood.protein}</span>
          </div>
        )}
          
        <div className="logged-foods">
          {loggedFoods.map((item, index) => (
            <div key={index} className="food-card">
              <p style={{fontWeight:'bold'}}>Day: {item.day}</p>
              <p style={{fontWeight:'bold'}}>Food: {item.food.name}</p>
              <p style={{fontWeight:'bold'}}>Carbs: {item.food.carbs}</p>
              <p style={{fontWeight:'bold'}}>Fat: {item.food.fat}</p>
              <p style={{fontWeight:'bold'}}>Protein: {item.food.protein}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NutritionTracking;
