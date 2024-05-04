package com.bits.fsad.ftapiservice.model;

import lombok.Data;

@Data
public class LogActivityDto {
    private String activityId;
    private String activityName;
    private Integer currentduration;
    private Integer goalduration;
    private Integer currentdistance;
    private Integer goaldistance;
    private Integer calories;
}
