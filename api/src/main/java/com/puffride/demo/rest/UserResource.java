package com.puffride.demo.rest; 

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.User;
import com.puffride.demo.dao.UserDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/user")
public class UserResource {

    @Autowired
    UserDao dao;

    @GetMapping
    public List<User> readAll(){
        List<User> users = dao.findAll();
        return users;
    }

    @GetMapping("/{id}")
    public User read(@PathVariable("id") Long id){
        return dao.findOne(id);
    }

    @PostMapping
    public User create(@RequestBody User entity){
        return dao.save(entity);
    }

    @PutMapping
    public User update(@RequestBody User entity){
        return dao.save(entity);
    }

    @DeleteMapping("/{id}")
    public boolean delete(@PathVariable("id") Long id){
        dao.delete(id);
        return true;
    }

    @DeleteMapping
    public boolean deleteAll(@RequestBody List<User> entityList){
        dao.deleteAll(entityList);
        return true;
    }

}
