package com.bits.fsad.ftapiservice.dto;

import lombok.Data;

import java.sql.Date;

@Data
public class ActivityDto {

    private long activityId;

    private String activityName;

    private Integer goalDuration;

    private Integer goalDistance;

}
