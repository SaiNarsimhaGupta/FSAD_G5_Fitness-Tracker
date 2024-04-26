package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "USERDETAILS")
public class Userdetail {
    @Id
    @Column(name = "USERID", nullable = false)
    private String userid;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "EMAILADDRESS", nullable = false)
    private String emailaddress;

    @Column(name = "PHONE")
    private String phone;

    @OneToMany(mappedBy = "userid")
    private Set<Activity> activities = new LinkedHashSet<>();

    @OneToMany(mappedBy = "userid")
    private Set<Nutrition> nutritions = new LinkedHashSet<>();

}