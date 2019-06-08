package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Rider;
import com.puffride.demo.dao.RiderDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/rider")
public class RiderResource {

    @Autowired
    RiderDao dao;

    @GetMapping
    public List<Rider> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Rider read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Rider create(@RequestBody Rider entity){
        return dao.save(entity);
    }

    @PutMapping
    public Rider update(@RequestBody Rider entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Rider> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
