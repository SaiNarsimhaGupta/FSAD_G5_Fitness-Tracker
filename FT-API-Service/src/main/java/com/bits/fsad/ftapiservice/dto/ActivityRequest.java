package com.bits.fsad.ftapiservice.dto;


import lombok.Data;

import java.util.List;

@Data
public class ActivityRequest {

    private long userId;
    private List<ActivityDto> dtoList;
}
