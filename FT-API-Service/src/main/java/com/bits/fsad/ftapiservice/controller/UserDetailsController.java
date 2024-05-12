package com.bits.fsad.ftapiservice.controller;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import com.bits.fsad.ftapiservice.services.UserManagingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/ftApiService")
@SuppressWarnings("unused")
public class UserDetailsController {

    @Autowired
    private UserManagingService userManagingService;

    @GetMapping(value = "/getUserDetails", produces = {"application/json"})
    public ResponseEntity<Optional<Userdetail>> getUserDetails(@RequestParam String userid) {
        Optional<Userdetail> user = Optional.of(new Userdetail());
        try {
            user = userManagingService.getUserDetails(userid);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok(user);
    }
}
