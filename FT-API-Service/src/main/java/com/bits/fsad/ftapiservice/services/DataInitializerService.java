package com.bits.fsad.ftapiservice.services;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

//@Component
public class DataInitializerService {

   //@Autowired
    private JdbcTemplate jdbcTemplate;

   //@PostConstruct
    public void populateDummyData() {

        String sqlDeleteUserDetails = "DELETE FROM UserDetails";
        String sqlDeleteActivity = "DELETE FROM Activity";
        String sqlDeleteNutrition = "DELETE FROM Nutrition";

        String sqlUserDetails = "INSERT INTO UserDetails (UserId, Name, emailAddress, Phone,Password) VALUES (?, ?, ?, ?,?)";
        String sqlActivity = "INSERT INTO Activity (UserId, ActivityId, Name, currentDuration, goalDuration, currentDistance, goalDistance, Calories) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        String sqlNutrition = "INSERT INTO Nutrition (NutritionId, UserId, FoodName, MealType, MacroNutrientType, CalorieIntake, CalorieGoal) VALUES (?, ?, ?, ?, ?, ?, ?)";

        String[] userIds = {"user1", "user2", "user3"};
        String[] names = {"John Doe", "Jane Doe", "Alice Smith"};
        String[] emails = {"john.doe@example.com", "jane.doe@example.com", "alice.smith@example.com"};
        String[] phones = {"123-456-7890", "098-765-4321", "555-123-4567"};
        String[] passwords = {"123", "456", "789"};

        String[] activityIds = {"act1", "act2", "act3"};
        String[] activityNames = {"Running", "Cycling", "Swimming"};
        int[] currentDurations = {30, 45, 60};
        int[] goalDurations = {60, 90, 120};
        int[] currentDistances = {5, 10, 15};
        int[] goalDistances = {10, 20, 25};
        int[] calories = {200, 300, 400};

        String[] nutritionIds = {"nut1", "nut2", "nut3"};
        String[] foodNames = {"Pizza", "Salad", "Pasta"};
        String[] mealTypes = {"Lunch", "Dinner", "Snack"};
        String[] macroNutrientTypes = {"Carbs", "Protein", "Fat"};
        String[] calorieIntakes = {"500", "300", "200"};
        String[] calorieGoals = {"2000", "1800", "2500"};

        jdbcTemplate.update(sqlDeleteUserDetails);
        jdbcTemplate.update(sqlDeleteActivity);
        jdbcTemplate.update(sqlDeleteNutrition);

        // Insert dummy user data
        for (int i = 0; i < userIds.length; i++) {
            jdbcTemplate.update(sqlUserDetails, userIds[i], names[i], emails[i],phones[i] ,passwords[i]);
        }

        // Insert dummy activity data
        for (int i = 0; i < activityIds.length; i++) {
            jdbcTemplate.update(sqlActivity, userIds[i], activityIds[i], activityNames[i], currentDurations[i], goalDurations[i], currentDistances[i], goalDistances[i], calories[i]);
        }

        // Insert dummy nutrition data
        for (int i = 0; i < nutritionIds.length; i++) {
            jdbcTemplate.update(sqlNutrition, nutritionIds[i], userIds[i], foodNames[i], mealTypes[i], macroNutrientTypes[i], calorieIntakes[i], calorieGoals[i]);
        }

    }
}
