package com.bits.fsad.ftapiservice.services;

import com.bits.fsad.ftapiservice.entities.Activity;
import com.bits.fsad.ftapiservice.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository activityRepository;
    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }
}
