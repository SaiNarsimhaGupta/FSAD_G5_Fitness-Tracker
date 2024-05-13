package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Data
@Entity
@Table(name = "activity")
public class Activity {

    @Id
    private long activityId;

    @ManyToOne
    @JoinColumn(name = "USER_ID", nullable = false)
    private User user;

    private String activityName;

    private Integer currentDuration;

    private Integer goalDuration;

    private Integer currentDistance;

    private Integer goalDistance;

    private Integer calories;

    private Date date;

}