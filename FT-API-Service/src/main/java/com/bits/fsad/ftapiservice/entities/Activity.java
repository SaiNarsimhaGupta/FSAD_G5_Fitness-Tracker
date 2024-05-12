package com.bits.fsad.ftapiservice.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Setter
@Entity
@Table(name = "ACTIVITY")
public class Activity {
    @Id
    @Column(name = "ACTIVITYID", nullable = false)
    private String activityid;

    @OnDelete(action = OnDeleteAction.RESTRICT)
    @JoinColumn(name = "USERID", nullable = false)
    private String userid;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "CURRENTDURATION")
    private Integer currentduration;

    @Column(name = "GOALDURATION")
    private Integer goalduration;

    @Column(name = "CURRENTDISTANCE")
    private Integer currentdistance;

    @Column(name = "GOALDISTANCE")
    private Integer goaldistance;

    @Column(name = "CALORIES")
    private Integer calories;

}