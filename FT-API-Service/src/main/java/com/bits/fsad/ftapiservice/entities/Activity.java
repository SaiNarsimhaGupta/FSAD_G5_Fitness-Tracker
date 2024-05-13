package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name = "activity")
public class Activity {

    @Id
    @Column(name = "ACTIVITY_ID")
    private long activityId;

    @JoinColumn(name = "USER_ID", nullable = false)
    private long userId;

    @Column(name = "ACTIVITY_NAME")
    private String activityName;

    @Column(name = "CURRENT_DURATION")
    private Integer currentDuration;

    @Column(name = "GOAL_DURATION")
    private Integer goalDuration;

    @Column(name = "CURRENT_DISTANCE")
    private Integer currentDistance;

    @Column(name = "GOAL_DISTANCE")
    private Integer goalDistance;

    @Column(name = "CALORIES")
    private Integer calories;

    @Column(name = "DATE")
    private Date date;

}