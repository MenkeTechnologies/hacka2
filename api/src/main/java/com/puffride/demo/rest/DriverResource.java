package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Driver;
import com.puffride.demo.dao.DriverDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/driver")
public class DriverResource {

    @Autowired
    DriverDao dao;

    @GetMapping
    public List<Driver> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Driver read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Driver create(@RequestBody Driver entity){
        return dao.save(entity);
    }

    @PutMapping
    public Driver update(@RequestBody Driver entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Driver> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
