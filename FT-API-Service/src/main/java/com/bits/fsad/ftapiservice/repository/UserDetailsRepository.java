package com.bits.fsad.ftapiservice.repository;

import com.bits.fsad.ftapiservice.entities.Userdetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserDetailsRepository extends JpaRepository<Userdetail, String> {
    Optional<Userdetail> findByEmailaddress(String email);
}