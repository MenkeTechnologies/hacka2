package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Rating;
import com.puffride.demo.dao.RatingDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/rating")
public class RatingResource {

    @Autowired
    RatingDao dao;

    @GetMapping
    public List<Rating> readAll(){
        return dao.findAll();
    }

    @GetMapping("/{id}")
    public Rating read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public Rating create(@RequestBody Rating entity){
        return dao.save(entity);
    }

    @PutMapping
    public Rating update(@RequestBody Rating entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<Rating> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
