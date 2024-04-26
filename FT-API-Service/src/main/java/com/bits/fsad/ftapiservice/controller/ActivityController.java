package com.bits.fsad.ftapiservice.controller;

import com.bits.fsad.ftapiservice.entities.Activity;
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

    @PostMapping(value = "/logActivity", produces = {"application/json"})
    public ResponseEntity<Activity> logActivity(@RequestBody Activity activity) {
        Activity savedActivity = activityService.saveActivity(activity);
        return ResponseEntity.ok(savedActivity);
    }

}
