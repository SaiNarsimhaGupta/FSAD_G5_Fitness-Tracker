package com.bits.fsad.ftapiservice.service;

import com.bits.fsad.ftapiservice.dto.NutritionDto;
import com.bits.fsad.ftapiservice.dto.NutritionRequest;
import com.bits.fsad.ftapiservice.entities.Nutrition;
import com.bits.fsad.ftapiservice.repository.NutritionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class NutritionService {

    @Autowired
    private NutritionRepository nutritionRepository;
    public List<Nutrition> getAllNutritionByUserID(long userId) {
        return nutritionRepository.findByUserId(userId);
    }

    public void addNutrition(NutritionRequest nutrition) {
        List<Nutrition> nutritions = new ArrayList<>();
        List<NutritionDto> dtoList = nutrition.getNutrition();
        for (NutritionDto nutritionDto : dtoList) {
            Nutrition nutrition1 = new Nutrition();
            nutrition1.setNutritionId(nutritionDto.getNutritionId());
            nutrition1.setUserId(nutrition.getUserId());
            nutrition1.setFoodName(nutritionDto.getFoodName());
            nutrition1.setCalorieIntake(nutritionDto.getCalorieIntake());
            nutrition1.setCalorieGoal(nutritionDto.getWeightIntake());
            nutrition1.setDate(new Date(System.currentTimeMillis()));
            nutritions.add(nutrition1);
        }
        nutritionRepository.saveAll(nutritions);
    }
}
