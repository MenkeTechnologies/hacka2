package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Car;
import com.puffride.demo.dao.CarDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/car")
public class CarResource {

    @Autowired
    CarDao dao;

    @GetMapping
    public List<Car> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Car read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Car create(@RequestBody Car entity){
        return dao.save(entity);
    }

    @PutMapping
    public Car update(@RequestBody Car entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Car> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
