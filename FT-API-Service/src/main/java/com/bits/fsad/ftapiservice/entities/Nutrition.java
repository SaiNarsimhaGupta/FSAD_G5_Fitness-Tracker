package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name = "nutrition")
public class Nutrition {

    @Id
    @Column(name = "NUTRITION_ID")
    private Long nutritionId;

    @JoinColumn(name = "USER_ID", nullable = false)
    private long userId;

    @Column(name = "FOOD_NAME")
    private String foodName;

    @Column(name = "MEAL_TYPE")
    private String mealType;

    @Column(name = "MACRO_NUTRIENT_TYPE")
    private String macroNutrientType;

    @Column(name = "CALORIE_INTAKE")
    private String calorieIntake;

    @Column(name = "CALORIE_GOAL")
    private String calorieGoal;

    @Column(name = "DATE")
    private Date date;

}