package com.puffride.demo.dao; 

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Driver;
import com.puffride.demo.repository.DriverRepository;

@Service
@Transactional
public class DriverDao {

    @Autowired
    DriverRepository driverRepository;

    public List<Driver> findAll() {
        return driverRepository.findAll();
    }

    public Driver findOne(Long id) {
        return driverRepository.findById(id).orElse(null);
    }

    public Driver save(Driver entity) {
        return driverRepository.save(entity);
    }

    public void delete(Long id) {
        driverRepository.deleteById(id);
    }

    public void delete(Driver entity) {
        driverRepository.delete(entity);
    }

    public void deleteAll(List<Driver> entityList) {
        driverRepository.deleteAll();
    }

}
