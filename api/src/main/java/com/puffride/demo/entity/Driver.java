package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "DRIVER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Driver implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "DRIVER_ID")
    private Integer driver;

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