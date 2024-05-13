package com.bits.fsad.ftapiservice.controller;

import com.bits.fsad.ftapiservice.dto.ActivityRequest;
import com.bits.fsad.ftapiservice.dto.ActivityUpdateRequest;
import com.bits.fsad.ftapiservice.entities.Activity;
import com.bits.fsad.ftapiservice.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @PostMapping("/activities")
    public ResponseEntity<String> addActivity(@RequestBody ActivityRequest activity) {
        activityService.addActivities(activity);
        return new ResponseEntity<>("Activity Added..!", HttpStatus.CREATED);
    }

    @GetMapping("activitiesByUserId")
    public ResponseEntity<List<Activity>> getActivitiesByUserId(@RequestParam("userId") long userId) {
        List<Activity> activitiesByUserId = activityService.getActivitiesByUserId(userId);
        //System.out.println(activitiesByUserId.get(0).getActivityId());
        return new ResponseEntity<>(activitiesByUserId,HttpStatus.FOUND);
    }

    @PostMapping("/setActivityProgress")
    public ResponseEntity<String> addActivity(@RequestBody ActivityUpdateRequest activity) {
        activityService.addUpdateActivity(activity);
        return new ResponseEntity<>("Activity Updated..!", HttpStatus.CREATED);
    }


}
