package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "RIDER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rider implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "RIDER_ID")
    private Integer rider;

    @Column(name = "DRIVER_VERIFIED_FLAG")
    private String driverVerifiedFlag;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @Column(name = "CREATE_DATE")
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDateTime updateDate;

}