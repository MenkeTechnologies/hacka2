package com.puffride.demo.dao; 

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import com.puffride.demo.entity.Phone;
import com.puffride.demo.repository.PhoneRepository;

@Service
@Transactional
public class PhoneDao {

    @Autowired
    PhoneRepository phoneRepository;

    public List<Phone> findAll() {
        return phoneRepository.findAll();
    }

    public Phone findOne(Long id) {
        return phoneRepository.findById(id).orElse(null);
    }

    public Phone save(Phone entity) {
        return phoneRepository.save(entity);
    }

    public void delete(Long id) {
        phoneRepository.deleteById(id);
    }

    public void delete(Phone entity) {
        phoneRepository.delete(entity);
    }

    public void deleteAll(List<Phone> entityList) {
        phoneRepository.deleteAll();
    }

}
