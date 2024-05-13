package com.bits.fsad.ftapiservice.dto;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

@Data
public class ActivityUpdateRequest {

    private long userId;
    private long activityId;
    private Integer currentDuration;
    private Integer currentDistance;
}
