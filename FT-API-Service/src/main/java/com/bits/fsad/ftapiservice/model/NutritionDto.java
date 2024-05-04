package com.bits.fsad.ftapiservice.model;

import lombok.Data;

@Data
public class NutritionDto {
    private String foodname;
    private String mealtype;
    private String macronutrienttype;
    private String calorieintake;
    private String caloriegoal;
}
