package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @ManyToOne
    @JoinColumn(name = "ORIGIN_ID")
    private Origin origin;

    @ManyToOne
    @JoinColumn(name = "DESTINATION_ID")
    private Destination destination;

    @Column(name = "AMOUNT")
    private Integer amount;

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