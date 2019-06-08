package com.puffride.demo.entity;

import lombok.*;
import java.io.Serializable;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "USER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "USER_ID")
    private Integer user;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PROFILE_PICTURE")
    private String profilePicture;

    @Column(name = "PW_HASH")
    private String pwHash;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "BIO")
    private String bio;

    @Column(name = "EMAIL_VERIFIED_FLAG")
    private String emailVerifiedFlag;

    @ManyToOne
    @JoinColumn(name = "PHONE_ID")
    private Phone phone;

    @Column(name = "CREATE_DATE")
    private LocalDate createDate;

    @Column(name = "UPDATE_DATE")
    private LocalDateTime updateDate;

}