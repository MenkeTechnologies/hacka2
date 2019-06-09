package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Location;
import com.puffride.demo.dao.LocationDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/location")
public class LocationResource {

    @Autowired
    LocationDao dao;

    @GetMapping
    public List<Location> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Location read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Location create(@RequestBody Location entity){
        return dao.save(entity);
    }

    @PutMapping
    public Location update(@RequestBody Location entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Location> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
