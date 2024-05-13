package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name = "nutrition")
public class Nutrition {

    @Id
    private Long nutritionId;

    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;

    private String foodName;

    private String mealType;

    private String macroNutrientType;

    private String calorieIntake;

    private String calorieGoal;

    private Date date;

}