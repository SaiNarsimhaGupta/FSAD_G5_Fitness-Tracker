package com.bits.fsad.ftapiservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class NutritionRequest {

    private Long userId;

    List<NutritionDto> nutrition;

}
