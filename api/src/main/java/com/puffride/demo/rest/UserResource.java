package com.puffride.demo.rest; 

import com.puffride.demo.entity.Schedule;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.stream.Collectors;

import com.puffride.demo.entity.User;
import com.puffride.demo.dao.UserDao;

import com.puffride.demo.utils.GlobalConstants;

@RestController
@RequestMapping(GlobalConstants.CONTEXT_PATH + "/user")
public class UserResource {

    @Autowired
    UserDao dao;

    private String bytesToHex(byte[] hash) {
        StringBuffer hexString = new StringBuffer();
        for (int i = 0; i < hash.length; i++) {
            String hex = Integer.toHexString(0xff & hash[i]);
            if(hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }

    @PostMapping("authenticate")
    public Boolean findByEmailPassword(@RequestBody AuthObj authObj){
        for (User user : dao.findAll()) {
            
            if (user.getEmail().equalsIgnoreCase(authObj.getEmail())){
                try {
                    String hashedPwd = bytesToHex(MessageDigest.getInstance("SHA-256").digest(authObj.getPassword().getBytes()));
                    if (hashedPwd.equalsIgnoreCase(user.getPwHash())){
                       return true;
                    }
                } catch (NoSuchAlgorithmException e) {
                    e.printStackTrace();
                }
            }
        }

        return false;
                
    }
    @PostMapping("findByEmail")
    public List<User> findByEmail(@RequestBody AuthObj authObj){
        List<User> users = dao.findAll().stream().filter(user -> user.getEmail().equalsIgnoreCase(authObj.getEmail())).collect(Collectors.toList());
        return users;
    }

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
