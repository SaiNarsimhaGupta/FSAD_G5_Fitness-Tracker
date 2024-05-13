package com.bits.fsad.ftapiservice.dto;

import lombok.Data;

@Data
public class NutritionDto {
    private Long nutritionId;

    private long userId;

    private String foodName;

    private String calorieIntake;

    private String weightIntake;
}
