package com.bits.fsad.ftapiservice.controller;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import com.bits.fsad.ftapiservice.services.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/ftApiService")
@SuppressWarnings("unused")
public class UserDetailsController {

    @Autowired
    private UserDetailsService userDetailsService;

    @GetMapping(value = "/getUserDetails", produces = {"application/json"})
    public ResponseEntity<Optional<Userdetail>> getUserDetails() {
        Optional<Userdetail> user = Optional.of(new Userdetail());
        try {
            user = userDetailsService.getUserDetails();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(user);
    }
}
