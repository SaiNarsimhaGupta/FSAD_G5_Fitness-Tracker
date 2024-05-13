package com.bits.fsad.ftapiservice.service;


import com.bits.fsad.ftapiservice.dto.ActivityDto;
import com.bits.fsad.ftapiservice.dto.ActivityRequest;
import com.bits.fsad.ftapiservice.dto.ActivityUpdateRequest;
import com.bits.fsad.ftapiservice.entities.Activity;
import com.bits.fsad.ftapiservice.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;

    public List<Activity> getActivitiesByUserId(Long userId) {
        return activityRepository.findByUserId(userId);
    }

    public void addActivities(ActivityRequest activity) {
        List<Activity> activities = new ArrayList<>() ;
        List<ActivityDto> dtoList = activity.getDtoList();
        for (ActivityDto dto : dtoList) {
            Activity activity1 = new Activity();
            activity1.setActivityId(dto.getActivityId());
            activity1.setActivityName(dto.getActivityName());
            activity1.setGoalDistance(dto.getGoalDistance());
            activity1.setDate(new Date(System.currentTimeMillis()));
            activity1.setCalories(0);
            activity1.setCurrentDistance(0);
            activity1.setGoalDuration(0);
            activity1.setCurrentDuration(0);
            activity1.setUserId(activity.getUserId());
            activities.add(activity1);
        }
        activityRepository.saveAll(activities);
    }

    public void addUpdateActivity(ActivityUpdateRequest activity) {
       Activity activity1 = activityRepository.findById(activity.getActivityId()).get();
       activity1.setCurrentDuration(activity.getCurrentDuration());
       activity1.setCurrentDistance(activity.getCurrentDistance());
       activityRepository.save(activity1);
    }
}
