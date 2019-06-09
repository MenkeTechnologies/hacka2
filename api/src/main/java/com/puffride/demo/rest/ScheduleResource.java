package com.puffride.demo.rest; 

import com.puffride.demo.dao.RideDao;
import com.puffride.demo.dao.RiderDao;
import com.puffride.demo.entity.Ride;
import com.puffride.demo.entity.User;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.puffride.demo.entity.Schedule;
import com.puffride.demo.dao.ScheduleDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/schedule")
public class ScheduleResource {

    @Autowired
    ScheduleDao dao;
    @Autowired
    RideDao riderDao;

    @PostMapping("findRidesByEmail")
    public List<Ride> findRidesByEmail(@RequestBody EmailObj emailObj) {
        List<Ride> rides = riderDao.findAll().stream().filter(r -> r.getRider().getUser().getEmail().equalsIgnoreCase(emailObj.getEmail())).collect(Collectors.toList());
        return rides;
    }

    @PostMapping("findSchedulesWithNoRidesByEmail")
    public List<Schedule> findSchedulesWithNoRidesByEmail(@RequestBody EmailObj emailObj){
        List<Schedule> schedules = dao.findAll().stream().filter(sched -> sched.getCreator().getEmail().equalsIgnoreCase(emailObj.getEmail())).collect(Collectors.toList());

        List<Schedule> unmatchedSchedules = new ArrayList<>();

        for (Schedule schedule : schedules) {
            List<Ride> rides = riderDao.findAll().stream().filter(r -> r.getSchedule().equals(schedule)).collect(Collectors.toList());
           if (rides.isEmpty()){
               unmatchedSchedules.add(schedule);
           }
        }

        return unmatchedSchedules;
    }

    @PostMapping("findSchedulesWithRidesByEmail")
    public List<Schedule> findSchedulesWithRidesByEmail(@RequestBody EmailObj emailObj){
        List<Schedule> schedules = dao.findAll().stream().filter(sched -> sched.getCreator().getEmail().equalsIgnoreCase(emailObj.getEmail())).collect(Collectors.toList());

        List<Schedule> matchedSchedules = new ArrayList<>();

        for (Schedule schedule : schedules) {
            List<Ride> rides = riderDao.findAll().stream().filter(r -> r.getSchedule().equals(schedule)).collect(Collectors.toList());
            if (!rides.isEmpty()){
                matchedSchedules.add(schedule);
            }
        }

        return matchedSchedules;
    }

    @PostMapping("findSchedulesByEmail")
    public List<Schedule> findSchedulesByEmail(@RequestBody EmailObj emailObj){
        List<Ride> rides = riderDao.findAll().stream().filter(r -> r.getRider().getUser().getEmail().equalsIgnoreCase(emailObj.getEmail())).collect(Collectors.toList());

        List<Schedule> schedules = rides.stream().map(Ride::getSchedule).collect(Collectors.toList());

        return schedules;
    }

    @PostMapping("findMatchingSchedules")
    public List<Schedule> findMatchingSchedules(@RequestBody ScheduleFinderObj scheduleFinderObj){

        List<Schedule> schedules = dao.findAll();

        List<Schedule> matched = new ArrayList<>();

        for (Schedule fr : schedules) {

            if (fr.getOrigin().getLatitude() == scheduleFinderObj.getOrigin().getLatitude() &&
                    fr.getOrigin().getLongitude() == scheduleFinderObj.getOrigin().getLongitude()){
                System.out.println("\n_____________\"origin\" = " + "origin" + "_____________\n");
                if (fr.getDestination().getLongitude() == scheduleFinderObj.getDestination().getLongitude() &&
                        fr.getDestination().getLatitude() == scheduleFinderObj.getDestination().getLatitude()){
                    System.out.println("\n_____________\"desting\" = " + "desting" + "_____________\n");
                    if (fr.getDow().equals(scheduleFinderObj.getDow())){
                       if (scheduleFinderObj.getTimeOfDay().equals(fr.getTimeOfDay())) {
                            matched.add(fr);
                       }
                    }
                }
            }
        }

        return matched;
    }

    @GetMapping
    public List<Schedule> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Schedule read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Schedule create(@RequestBody Schedule entity){
        return dao.save(entity);

    }

    @PutMapping
    public Schedule update(@RequestBody Schedule entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Schedule> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
