package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import javax.print.attribute.standard.Destination;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "SCHEDULE")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Schedule implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "SCHEDULE_ID")
    private Integer schedule;

    @OneToOne
    @JoinColumn(name = "ORIGIN_ID", referencedColumnName = "LOCATION_ID")
    private Location origin;

    @OneToOne
    @JoinColumn(name = "USER_ID", referencedColumnName = "USER_ID")
    private User creator;

    @OneToOne
    @JoinColumn(name = "DESTINATION_ID", referencedColumnName = "LOCATION_ID")
    private Location destination;

    @Column(name = "TIME_OF_DAY")
    private LocalTime timeOfDay;

    @Column(name = "DOW")
    private Integer dow;

    @Column(name = "START_DATE")
    private LocalDate startDate;

    @Column(name = "END_DATE")
    private LocalDate endDate;

    @Column(name = "CREATE_DATE")
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDateTime updateDate;

}