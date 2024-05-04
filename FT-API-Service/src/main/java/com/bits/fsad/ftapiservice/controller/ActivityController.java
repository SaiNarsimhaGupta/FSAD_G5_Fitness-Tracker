package com.bits.fsad.ftapiservice.controller;

import com.bits.fsad.ftapiservice.entities.Activity;
import com.bits.fsad.ftapiservice.entities.Nutrition;
import com.bits.fsad.ftapiservice.model.LogActivityDto;
import com.bits.fsad.ftapiservice.model.NutritionDto;
import com.bits.fsad.ftapiservice.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SuppressWarnings("unused")
@RequestMapping("/ftApiService")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @PostMapping(value = "/logActivityOrGoal", produces = {"application/json"})
    public ResponseEntity<Activity> logActivityOrGoal(@RequestBody LogActivityDto logActivityDto) {
        Activity savedActivity = new Activity();
        try {
            savedActivity = activityService.logActivityOrGoal(logActivityDto);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(savedActivity);
    }

    @PostMapping(value = "/logNutritions", produces = {"application/json"})
    public ResponseEntity<Nutrition> logNutrition(@RequestBody NutritionDto nutritionDto) {
        Nutrition savedNutrition = new Nutrition();
        try {
            savedNutrition = activityService.logNutrition(nutritionDto);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(savedNutrition);
    }

}
