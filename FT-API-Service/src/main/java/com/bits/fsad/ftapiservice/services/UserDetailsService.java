package com.bits.fsad.ftapiservice.services;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import com.bits.fsad.ftapiservice.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@SuppressWarnings("unused")
public class UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepo;

    public Optional<Userdetail> getUserDetails() {
        String user = "user1"; // get current logged in user
        return userDetailsRepo.findById(user);
    }
}