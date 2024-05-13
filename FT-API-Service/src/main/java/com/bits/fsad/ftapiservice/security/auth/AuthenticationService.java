package com.bits.fsad.ftapiservice.security.auth;


import com.bits.fsad.ftapiservice.dto.AuthenticationRequest;
import com.bits.fsad.ftapiservice.dto.AuthenticationResponse;
import com.bits.fsad.ftapiservice.dto.RegisterRequest;
import com.bits.fsad.ftapiservice.entities.User;
import com.bits.fsad.ftapiservice.repository.UserRepository;
import com.bits.fsad.ftapiservice.security.config.JwtService;
import com.bits.fsad.ftapiservice.service.UUIDService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;
  private final UUIDService uuidService;

  public AuthenticationResponse register(RegisterRequest request) {
    var user = User.builder()
        .userId(123456L+1)
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(request.getRole())
        .height(String.valueOf(request.getHeight()))
        .weight(String.valueOf(request.getWeight()))
        .build();
    var savedUser = repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken).refreshToken(refreshToken).userName(savedUser.getName()).userID(String.valueOf(savedUser.getUserId()))
            .height(Integer.valueOf(savedUser.getHeight())).weight(Integer.valueOf(savedUser.getWeight()))
        .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    var user = repository.findByEmail(request.getEmail())
        .orElseThrow();
    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
            .refreshToken(refreshToken)
            .userID(String.valueOf(user.getUserId()))
            .userName(user.getUsername())
            .height(Integer.valueOf(user.getHeight()))
            .weight(Integer.valueOf(user.getWeight()))
        .build();
  }



  public void refreshToken(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.repository.findByEmail(userEmail)
              .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        var accessToken = jwtService.generateToken(user);
        var authResponse = AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .build();
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
      }
    }
  }
}