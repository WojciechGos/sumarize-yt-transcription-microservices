package com.gos.server.authentication;

public record SignUpRequest(
        String email,
        String password,
        String name,
        String surname) {
}
