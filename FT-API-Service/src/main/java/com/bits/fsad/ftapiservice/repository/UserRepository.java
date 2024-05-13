package com.bits.fsad.ftapiservice.repository;

import com.bits.fsad.ftapiservice.dto.UserDto;
import com.bits.fsad.ftapiservice.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT new com.bits.fsad.ftapiservice.dto.UserDto(u.userId, u.name, u.email, u.role, u.height, u.weight) FROM User u WHERE u.userId = :userId")
    UserDto findUserDetailsById(Long userId);

    Optional<User> findByEmail(String email);




}
