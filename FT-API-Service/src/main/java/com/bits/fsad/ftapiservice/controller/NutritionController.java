package com.bits.fsad.ftapiservice.controller;

import com.bits.fsad.ftapiservice.dto.NutritionRequest;
import com.bits.fsad.ftapiservice.entities.Nutrition;
import com.bits.fsad.ftapiservice.service.NutritionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/nutrition")
public class NutritionController {

    @Autowired
    private NutritionService nutritionService;

    @PostMapping("/nutrition")
    public ResponseEntity<String> addNutrition(@RequestBody NutritionRequest nutrition) {
        nutritionService.addNutrition(nutrition);
        return new ResponseEntity<>("Nutrition Created...!", HttpStatus.CREATED);
    }

    @GetMapping("nutritionByUserId")
    public ResponseEntity<List<Nutrition>> getNutritionByUserId(@RequestParam("userId") long userId) {
        List<Nutrition> activitiesByUserId = nutritionService.getAllNutritionByUserID(userId);
        return new ResponseEntity<>(activitiesByUserId,HttpStatus.FOUND);
    }
}
