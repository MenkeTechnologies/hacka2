package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Ride;
import com.puffride.demo.dao.RideDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/ride")
public class RideResource {

    @Autowired
    RideDao dao;

    @GetMapping
    public List<Ride> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Ride read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Ride create(@RequestBody Ride entity){
        return dao.save(entity);
    }

    @PutMapping
    public Ride update(@RequestBody Ride entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Ride> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
