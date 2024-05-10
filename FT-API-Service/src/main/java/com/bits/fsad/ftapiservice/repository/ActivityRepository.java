package com.bits.fsad.ftapiservice.repository;

import com.bits.fsad.ftapiservice.entities.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, String> {
    Activity findByActivityid(String activityId);
    List<Activity> findAllByUserid(String userId);
}
