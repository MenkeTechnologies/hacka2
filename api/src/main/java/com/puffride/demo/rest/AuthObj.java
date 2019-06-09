package com.puffride.demo.rest;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthObj {
    private String email;
    private String password;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class EmailObj {
    private String email;
}


@Data
@AllArgsConstructor
@NoArgsConstructor
class LocationWrapper {
    private float latitude;
    private float longitude;
}

@Data
@AllArgsConstructor
@NoArgsConstructor
class ScheduleFinderObj {
    private LocationWrapper origin;
    private LocationWrapper destination;
    private Integer dow;
    private LocalTime timeOfDay;
}