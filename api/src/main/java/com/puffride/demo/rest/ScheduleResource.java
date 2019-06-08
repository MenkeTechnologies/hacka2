package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Schedule;
import com.puffride.demo.dao.ScheduleDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/schedule")
public class ScheduleResource {

    @Autowired
    ScheduleDao dao;

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
