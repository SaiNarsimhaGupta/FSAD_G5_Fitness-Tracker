package com.bits.fsad.ftapiservice.service;

import com.bits.fsad.ftapiservice.dto.UserDto;
import com.bits.fsad.ftapiservice.entities.User;
import com.bits.fsad.ftapiservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserDto getUserById(long id) {
        return userRepository.findUserDetailsById(id);
    }

    public User getUserDetailsByEmail(String userEmail) {
        return userRepository.findByEmail(userEmail).get();
    }

    //public long createUser(UserDto userDto) {return userRepository.s}
}
