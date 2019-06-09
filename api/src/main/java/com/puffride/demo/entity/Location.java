package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "LOCATION")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Location implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "LOCATION_ID")
    private Integer location;

    @Column(name = "DRIVER_VERIFIED_FLAG")
    private String driverVerifiedFlag;

    @Column(name = "ICON")
    private String icon;

    @Column(name = "CREATE_DATE")
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDateTime updateDate;

}