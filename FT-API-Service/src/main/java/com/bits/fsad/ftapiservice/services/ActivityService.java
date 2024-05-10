package com.bits.fsad.ftapiservice.services;

import com.bits.fsad.ftapiservice.entities.Activity;
import com.bits.fsad.ftapiservice.entities.Nutrition;
import com.bits.fsad.ftapiservice.model.LogActivityDto;
import com.bits.fsad.ftapiservice.model.NutritionDto;
import com.bits.fsad.ftapiservice.repository.ActivityRepository;
import com.bits.fsad.ftapiservice.repository.NutritionRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@SuppressWarnings("unused")
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private UUIDService uuid;
    @Autowired
    private NutritionRepository nutritionRepository;

    @Transactional
    public Activity logActivityOrGoal(LogActivityDto logActivityDto) {
        Activity activity;
        if (logActivityDto.getActivityId() != null) {
            // Modifying existing activity
            activity = activityRepository.findByActivityid(logActivityDto.getActivityId());
        } else {
            // Creating new activity
            activity = new Activity();
            activity.setActivityid(uuid.generateShortUUID());
//        activity.setUserid(logActivityDto.getUserid());
            activity.setName(logActivityDto.getActivityName());
        }
        activity.setCurrentduration(logActivityDto.getCurrentduration());
        activity.setGoalduration(logActivityDto.getGoalduration());
        activity.setCurrentdistance(logActivityDto.getCurrentdistance());
        activity.setGoaldistance(logActivityDto.getGoaldistance());
        activity.setCalories(logActivityDto.getCalories());
        return activityRepository.save(activity);
    }

    @Transactional
    public Nutrition logNutrition(NutritionDto nutritionDto) {
        Nutrition nutrition = new Nutrition();
        nutrition.setNutritionid(uuid.generateShortUUID());
//        nutrition.setUserid(nutritionDto.getUserid());
        nutrition.setFoodname(nutritionDto.getFoodname());
        nutrition.setMealtype(nutritionDto.getMealtype());
        nutrition.setMacronutrienttype(nutritionDto.getMacronutrienttype());
        nutrition.setCalorieintake(nutritionDto.getCalorieintake());
        nutrition.setCaloriegoal(nutritionDto.getCaloriegoal());
        return nutritionRepository.save(nutrition);
    }

    public List<Activity> getActivitiesForUser(String userid) {
        return (activityRepository.findAllByUserid(userid));
    }

    public List<Nutrition> getNutritionLogsOfUser(String userid) {
        return (nutritionRepository.findAllByUserid(userid));
    }
}
