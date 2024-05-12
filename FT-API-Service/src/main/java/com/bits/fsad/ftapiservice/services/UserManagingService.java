package com.bits.fsad.ftapiservice.services;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import com.bits.fsad.ftapiservice.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@ComponentScan
public class UserManagingService {

    @Autowired
    private UserDetailsRepository userDetailsRepo;

    public Optional<Userdetail> getUserDetails(String userid) {
        return userDetailsRepo.findById(userid);
    }

    public Userdetail getUserDetailsByEmail(String email) {
        return userDetailsRepo.findByEmailaddress(email).get();
    }

}