package com.bits.fsad.ftapiservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
public class UserDto {
    private Long userId;
    private String name;
    private String email;
    private String role;
    private String height;
    private String weight;

    public UserDto(Long userId, String name, String email, String role, String height, String weight) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.role = role;
        this.height = height;
        this.weight = weight;
    }

}
