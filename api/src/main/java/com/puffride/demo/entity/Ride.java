package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "RIDE")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Ride implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "RIDE_ID")
    private Integer ride;

    @ManyToOne
    @JoinColumn(name = "CAR_ID")
    private Car car;

    @ManyToOne
    @JoinColumn(name = "SCHEDULE_ID")
    private Schedule schedule;

    @ManyToOne
    @JoinColumn(name = "DRIVER_ID")
    private Driver driver;

    @ManyToOne
    @JoinColumn(name = "RIDER_ID")
    private Rider rider;

    @Column(name = "START_TIME")
    private LocalDateTime startTime;

    @Column(name = "END_TIME")
    private LocalDateTime endTime;

    @Column(name = "CREATE_DATE")
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDateTime updateDate;

}