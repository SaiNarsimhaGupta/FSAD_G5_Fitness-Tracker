package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Setter
@Entity
@Table(name = "NUTRITION")
public class Nutrition {
    @Id
    @Column(name = "NUTRITIONID", nullable = false)
    private String nutritionid;

    @Column(name = "USERID", nullable = false)
    private String userid;

    @Column(name = "FOODNAME")
    private String foodname;

    @Column(name = "MEALTYPE")
    private String mealtype;

    @Column(name = "MACRONUTRIENTTYPE")
    private String macronutrienttype;

    @Column(name = "CALORIEINTAKE")
    private String calorieintake;

    @Column(name = "CALORIEGOAL")
    private String caloriegoal;

}