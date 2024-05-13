package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "user ")
public class User {

    @Id
    @Column(name = "USER_ID", nullable = false)
    private String userId;
    private String name;
    private String email;
    private String password;
    private String role;
    private String height;
    private String weight;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Nutrition> nutritionList;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Activity> activityList;

}