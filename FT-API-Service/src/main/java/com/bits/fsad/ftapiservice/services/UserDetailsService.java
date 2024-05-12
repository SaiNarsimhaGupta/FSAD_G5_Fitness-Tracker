package com.bits.fsad.ftapiservice.services;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import com.bits.fsad.ftapiservice.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepo;

    public Optional<Userdetail> getUserDetails(String userid) {
        return userDetailsRepo.findById(userid);
    }

}