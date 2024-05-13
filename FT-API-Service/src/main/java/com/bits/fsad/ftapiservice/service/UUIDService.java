package com.bits.fsad.ftapiservice.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UUIDService {
    // Method to return a string uuid of length 6
    public long generateShortUUID() {
        UUID uuid = UUID.randomUUID();
        return uuid.getLeastSignificantBits();
    }
}