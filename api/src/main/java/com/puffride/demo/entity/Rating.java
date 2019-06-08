package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "RATING")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rating implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "RATING_ID")
    private Integer rating;

    @ManyToOne
    @JoinColumn(name = "RIDE_ID")
    private Ride ride;

    @Column(name = "AMOUNT")
    private Integer amount;

    @Column(name = "CREATE_DATE")
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDateTime updateDate;

}