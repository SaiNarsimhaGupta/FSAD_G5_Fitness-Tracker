package com.bits.fsad.ftapiservice.security.entity;

import java.util.Optional;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Userdetail, Integer> {

  Optional<Userdetail> findByEmailaddress(String email);

}
